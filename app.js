import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import routeslibros from './routes/libros.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Rutas
app.use('/libros', routeslibros);

try {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
} catch (e) {
    console.log(e);
}