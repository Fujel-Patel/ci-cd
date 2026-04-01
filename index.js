import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(express.static('public'));
dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi I am Billy-Butcher!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});