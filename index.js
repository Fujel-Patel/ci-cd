import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(express.static('public'));
dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});