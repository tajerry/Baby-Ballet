const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const COMMENTS_DB_PATH = path.join(__dirname, "./db/db.comments.json");
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "my-blog/build")));

//Получаем все комментарии

app.get("/api/comments", (req, res) => {
    fs.readFile(COMMENTS_DB_PATH, "utf8", (err, data) => {
        if (err) {
            console.error("Ошибка чтения файла:", err);
            res.status(500).send("Ошибка сервера");
            return;
        }
        const comments = JSON.parse(data).comments;
        console.log(comments)
        res.json(comments);
    });
});
console.log(`server connect on port ${PORT}`);
