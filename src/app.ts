import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { medicineRouter } from './modules/medicine/medicine.router';
import { categoryRouter } from './modules/category/category.router';
import { shopRouter } from './modules/shop/shop.router';

const app : Application = express();



app.use(cors());
app.use(express.json());    

app.get('/', (req:Request, res:Response) => {
    res.send('Hello, World!');
});

app.use('/api/v1', medicineRouter)
app.use('/api/v1', categoryRouter)
app.use('/api/v1', shopRouter)





export default app; 
