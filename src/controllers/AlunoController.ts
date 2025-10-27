import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Aluno } from "../entity/Aluno";

const repo = AppDataSource.getRepository(Aluno);

export class AlunoController {
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
        await repo.delete(id);
        return res.json({ mensagem: "Aluno atualizado com sucesso!" });

    }
     
    async excluir(req: Request, res: Response) {
        const id = Number(req.params.id);
        await repo.delete(id);
        return res.json({ mensagem: "Aluno excluído com sucesso!" });

    }

}
    
