
import express from 'express';
import morgan from 'morgan';

import cors from 'cors';

//routes
import deviceRouter from './routes/device.routes.js';

const app = express();


// app.set('pkg',pkg);

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/device',deviceRouter)
export default app;