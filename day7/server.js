import express from "express"
import fs from "fs"
import { json } from "stream/consumers"
const app = express()
const PORT = 3002
// Middleware
app.use(express.json())

const books = JSON.parse(fs.readFileSync("../books.json", "utf-8"))


// ! Home Page
app.get("/api/kitoblar", (req, res, next) => {
    res.status(200).send(json({ message: "Salom Bu Home Page" }))
    console.log(req.method, req.url, req.statusCode, new Date().toLocaleString());
    next()
})


app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);

    }
    console.log(`Sizning Serveringiz http://localhost:${PORT} da ishlayapt`);

})