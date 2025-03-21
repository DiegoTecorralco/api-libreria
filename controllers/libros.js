import librosModel from '../models/libros.js';

class librosController {
    constructor() {}

    async create(req, res) {
        try {
            const data = await librosModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            console.error("Error al crear el libro:", e.message);
            res.status(500).send({ error: 'Error al crear el libro', detalle: e.message });
        }
    }

    async getAll(req, res) {
        try {
            const data = await librosModel.getAll();
            res.status(200).json(data);
        } catch (e) {
            console.error("Error:", e);
            res.status(500).send({ error: 'Error en el servidor', detalle: e.message });
        }
    }

    async getOne(req, res) {
        try {
            const data = await librosModel.getOne(req.params.id);
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).send({ error: 'Libro no encontrado' });
            }
        } catch (e) {
            console.error("Error:", e);
            res.status(500).send({ error: 'Error en el servidor', detalle: e.message });
        }
    }

    async update(req, res) {
        try {
            const updatedBook = await librosModel.update(req.params.id, req.body);
            if (updatedBook) {
                res.status(200).json(updatedBook);
            } else {
                res.status(404).send({ error: 'Libro no encontrado para actualizar' });
            }
        } catch (e) {
            res.status(500).send({ error: 'Error al actualizar el libro', detalle: e.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await librosModel.delete(req.params.id);
            if (result) {
                res.status(200).json({ status: 'Libro eliminado con éxito' });
            } else {
                res.status(404).send({ error: 'Libro no encontrado para eliminar' });
            }
        } catch (e) {
            res.status(500).send({ error: 'Error al eliminar el libro', detalle: e.message });
        }
    }
}

export default new librosController();