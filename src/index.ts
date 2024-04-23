import express, { Request, Response } from 'express';
import morgan from 'morgan';

const app = express();
const port = Number(process.env.PORT || 8081);

app.use(morgan('dev'));
app.get('/', (req: Request, res: Response) => {
  // debugger;
  return res.status(200).send({ message:"sort"});
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
