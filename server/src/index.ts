import path from 'path';
import express, { ErrorRequestHandler } from 'express';
import { createServer } from 'http';
import cors from 'cors';
import categoryRouter from './routers/categories';

export const PORT = process.env.PORT || 3000;

const app = express();
const http = createServer(app);

const buildPath = path.join(__dirname, '../../dist/server/');

app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());
app.use('/category', categoryRouter);

// Errors
app.use((req, res, next) => {
  res.json({
    statusCode: 404,
  });
});

const error500: ErrorRequestHandler = (err, req, res, next) => {
  res.json({
    statusCode: 500,
    message: err.message,
  });
};

app.use(error500);

app.get('/', (req, res) => {
  res.send('Server is starting...');
});

http.listen(PORT);
console.log(`Server started at: ${JSON.stringify(http.address())}`);
