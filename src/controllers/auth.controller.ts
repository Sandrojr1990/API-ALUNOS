import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Usuario } from "../entities/Usuario";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class AuthController {

  async register(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    const repo = AppDataSource.getRepository(Usuario);

    const usuarioExiste = await repo.findOne({ where: { email } });
    if (usuarioExiste) {
      return res.status(400).json({ mensagem: "Email já cadastrado" });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = repo.create({
      nome,
      email,
      senha: senhaCriptografada
    });

    await repo.save(usuario);

    return res.status(201).json({
      mensagem: "Usuário criado com sucesso"
    });
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const repo = AppDataSource.getRepository(Usuario);
    const usuario = await repo.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ mensagem: "Credenciais inválidas" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ mensagem: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }
}
