const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4400;

app.use(express.json());
app.use(require("./routes/students.routes"));

mongoose.connect("mongodb+srv://Emin:1221@cluster0.c8v7a8i.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(port, () => {
    console.log('Сервер запущен успешно')
})