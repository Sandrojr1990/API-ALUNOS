import { Router } from 'express';
import { AlunoController } from '../controllers/AlunoController.js';

const router = Router();
const controller = new AlunoController();

router.post('/', controller.criar);
router.get('/', controller.listar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.excluir);

export default router;

