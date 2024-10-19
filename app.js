const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');


const port = 3000;
const prisma = new PrismaClient();

const userRoutes = require('./routes/userRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(bankAccountRoutes);
app.use(transactionRoutes);

app.get('/', (req, res) => {
    res.send('API is Running')
});

app.listen(port, () => console.log(`Server berjalan pada port ${port}`));


// Buat dijalankan di postman
// http://localhost:3000/
// http://localhost:3000/api/v1/users
// http://localhost:3000/api/v1/users/:userId
// http://localhost:3000/api/v1/accounts
// http://localhost:3000/api/v1/accounts/:accountId
// http://localhost:3000//api/v1/transactions
// http://localhost:3000//api/v1/transactions/:transactionId