import dotenv from 'dotenv';
import express from 'express';
import postsRouter from './api/posts';
import bodyParser from 'body-parser';


dotenv.config();

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/posts', postsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});