import express from 'express';
import { addSnippets, getSnippets } from '../controllers/snippets.controller';

const router = express.Router();

router.post('/add-snippet', addSnippets);

router.post('/', getSnippets);


export default router;
