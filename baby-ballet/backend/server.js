const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5002;
const COMMENTS_DB_PATH = path.join(__dirname, "./db/db.comments.json");
const CLASSES_DB_PATH = path.join(__dirname, "./db/db.classes.json");
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join(__dirname, "my-blog/build")));
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

//Получаем все комментарии

app.get("/api/comment", (req, res) => {
    fs.readFile(COMMENTS_DB_PATH, "utf8", (err, data) => {
        if (err) {
            console.error("Ошибка чтения файла:", err);
            res.status(500).send("Ошибка сервера");
            return;
        }
        const comments = JSON.parse(data).comments;
        res.json(comments);
    });
});
app.get("/api/classes", (req, res) => {
    fs.readFile(CLASSES_DB_PATH, "utf8", (err, data) => {
        if (err) {
            console.error("Ошибка чтения файла:", err);
            res.status(500).send("Ошибка сервера");
            return;
        }
        const classes = JSON.parse(data).classes;
        res.json(classes);
    });
});

//Добавить нового пользователя
// const usersFilePath = path.join(__dirname, "./db/db.users.json");
app.post("/api/users", (req, res) => {
    console.log('11111!!!!');
    fs.readFile(
        path.join(__dirname, "./db/db.users.json"),
        "utf8",
        (err, data) => {
            if (err) {
                console.error("Ошибка чтения файла:", err);
                res.status(500).send("Ошибка сервера");
                return;
            }
            const users = JSON.parse(data).users;
            const newUser = {
                id: users.length + 1,
                firstName: req.body.name,
                lastName: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
            };
            users.push(newUser);
            fs.writeFile(
                path.join(__dirname, "./db/db.users.json"),
                JSON.stringify({ users }),
                "utf8",
                (err) => {
                    if (err) {
                        console.error("Ошибка записи файла:", err);
                        res.status(500).send("Ошибка сервера");
                        return;
                    }
                    res.status(201).json(newUser);
                },
            );
        },
    );
});
