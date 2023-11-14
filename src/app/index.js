import cors from 'cors';
import express from 'express';
import httpStatus from 'http-status';
import routes from '../routes/index.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    message: 'Server is running fine',
  });
});

app.use('/api/v1', routes);

app.use(globalErrorHandler);

export default app;