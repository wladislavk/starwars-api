import express, {NextFunction} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import router from './routes/main';
import {Request, Response} from "express/ts4.0";

interface ErrorWithStatus extends Error {
  status: number
}

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.use(function(req, res, next) {
  res.status(404).json({"message": "Unknown error"});
});

const errorHandler = function(err: ErrorWithStatus,
                              req: Request,
                              res: Response,
                              next: NextFunction
) {
  // render the error page
  res.status(err.status || 500).json({"message": "Unknown error"});

  next();
};

// error handler
app.use(errorHandler);

module.exports = app;
