import express, {
  Request, Response, NextFunction,
} from 'express';
import bodyParser from 'body-parser';
import UserController from './Controllers/UserController';

const { User } = require('./db/models/index');

console.log(User);
const app = express();
app.use(bodyParser.json());
// import { UserModel } from './db/models/User';
// UserModel.sync();

app.post('/:id', async (req: Request, res: Response, next:NextFunction) => {
  // try {
  //   const { name } = req.body;
  //   console.log(name);
  //   await UserController.register(name);
  //   res.send('Hello');
  // } catch (err) {
  //   next(err);
  // }
  const users = await User.findAll();
  res.send(users);
});

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { message } = err;
  res.send({ message });
};

app.use(errorHandler);
app.listen(3001, () => {
  console.log('Server start at port 3001!');
});
