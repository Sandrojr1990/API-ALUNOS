import { Router } from 'express';
import { AlunoController } from '../controllers/aluno.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();
const controller = new AlunoController();

router.use(authMiddleware);

/**
 * @openapi
 * /alunos:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Alunos
 *     summary: Listar alunos
 *     description: Retorna todos os alunos cadastrados
 *     responses:
 *       200:
 *         description: Lista de alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aluno'
 *       401:
 *         description: Não autorizado
 */

router.post('/', controller.criar);
router.get('/', controller.listar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.excluir);

export default router;

