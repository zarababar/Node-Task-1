import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/users.js';
import blogsRoutes from './routes/blogs.js';
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/blogs', blogsRoutes);
app.get('/', (req, res) => {
    res.send("Hello from express");
})

app.all('*', (req, res) => res.status(404).send("Route does not exist"));
app.listen(port, () => console.log("Server is listening"));