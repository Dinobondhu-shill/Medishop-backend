import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { medicineRouter } from './modules/medicine/medicine.router';
import { categoryRouter } from './modules/category/category.router';
import { shopRouter } from './modules/shop/shop.router';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';

const app : Application = express();



app.use(cors());
app.use(express.json());    

app.get('/', (req:Request, res:Response) => {
    res.send('Hello, World!');
});

app.all('/api/auth/*splat', toNodeHandler(auth));
app.use('/api/v1', medicineRouter)
app.use('/api/v1', categoryRouter)
app.use('/api/v1', shopRouter)





export default app; 
