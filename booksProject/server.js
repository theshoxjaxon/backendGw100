import express from "express"
import fs from "fs"

const app = express()
const books = JSON.parse(fs.readFileSync("../books.json", "utf-8"))
const PORT = 3000

// Middleware
app.use(express.json())

// ! Home Page
app.get("/", (req, res) => {
    res.status(200).send("<h1>Salom Bu Home Page</h1>")

    if (!res) {
        return res.status(404).send("<h1>Page Not Found</h1>")
    }
})

app.get("/books", (req, res) => {
    res.status(200).json(books)

    if (!books) {
        return res.status(404).send("<h1>Books Not Found</h1>")
    }
})