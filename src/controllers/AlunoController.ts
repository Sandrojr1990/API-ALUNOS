import { Request, Response } from "express";
import { AppDataSource } from "../database.js";
import { Aluno } from "../entity/Aluno.js";

const repo = AppDataSource.getRepository(Aluno);

export class AlunoController {

    // criar novo aluno
    
    async criar(req: Request, res: Response) {
        const aluno = repo.create(req.body);
        const resultado = await repo.save(aluno);
        return res.status(201).json(resultado);

    }

    async listar(req: Request, res: Response) {
        const alunos = await repo.find();
        return res.json(alunos);

    }

    async atualizar(req: Request, res: Response) {
        const id = Number(req.params.id);
        const dadosAtualizados = req.body;
        await repo.update(id, dadosAtualizados);
        return res.json({ mensagem: "Aluno atualizado com sucesso!" });

    }
     
    async excluir(req: Request, res: Response) {
        const id = Number(req.params.id);
        await repo.delete(id);
        return res.json({ mensagem: "Aluno excluído com sucesso!" });

    }

}
    
