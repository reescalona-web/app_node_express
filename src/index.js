import express from 'express'
import { pool } from './db.js';
import employeesRouter from './routes/employees.routes.js'

const app = express();

app.use(employeesRouter);

app.listen(3000)