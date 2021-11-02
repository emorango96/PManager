import express from 'express';
import { getTasks, createTask, updateTask } from '../controllers/tasks.js';

const router = express.Router();

//localhost:5000/tasks
router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', updateTask);

export default router;