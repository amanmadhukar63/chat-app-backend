import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.get('/',(req,res)=>{
    res.send('hello, i am listening');
});

export default server;