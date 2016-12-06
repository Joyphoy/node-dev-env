import express from 'express';
import path from 'path';
import open from 'open';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

dotenv.config();

const port = process.env.PORT;
const app = express();
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, () => {
  open(`http://localhost:${port}`);

  console.log(`Server listening on port ${port}`);
});
