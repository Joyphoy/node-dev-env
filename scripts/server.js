import express from 'express';
import path from 'path';
import open from 'open';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, () => {
  open(`http://localhost:${port}`);

  console.log(`Server listening on port ${port}`);
});
