import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import './db/connect';
import routes from './routes/routes';
// routes
// import userRouter from './routes/api/user';


const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.json());

// app.use('/api/users', userRouter);

// * React
// //Static file declaration
// app.use(express.static(path.join(__dirname, "../client/build/")));
// //build mode
// app.get("/index.html", (req: any, res: any) => {
//   res.sendFile(path.join(__dirname + "../client/build/index.html"));
// });
// * end of React

app.listen(port, () => {
  console.log('server is up on ' + port);
});
