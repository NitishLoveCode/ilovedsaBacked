
import express from 'express';
import { createProblem, dymmyAPI } from '../controllers/problemController';

const router = express.Router();

router.post('/', createProblem);
router.get("/dummy", dymmyAPI);

export default router;
