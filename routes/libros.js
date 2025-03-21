import express from 'express';
const route = express.Router();  // Corrected here: use express.Router(), not expressRouter()
import libroController from '../controllers/libros.js';

route.post('/', libroController.create);
route.get('/:id', libroController.getOne);
route.get('/', libroController.getAll);
route.put('/:id', libroController.update);
route.delete('/:id', libroController.delete);

export default route;