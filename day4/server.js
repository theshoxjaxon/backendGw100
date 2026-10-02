import http from "http"
import fs from "fs"
import { json } from "stream/consumers"

const PORT = 3001

const rawData = fs.readFileSync("../books.json", "utf-8")
const books = JSON.parse(rawData)

const server = http.createServer((req, res) => {
    // Sarlavhani (Header) bir martaga o'rnatamiz
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    if (req.url === "/") {
        res.writeHead(200)
        res.end("Salom bu Home Page")
        console.log(books);
    }

    if (req.url === "/books") {
        res.writeHead(200)
        res.end("Salom bu Books Page")
    }

})

server.listen(PORT, (error) => {
    if (error) {
        console.error("Serverni ishga tushirishda xatolik:", error)
        return
    }
    console.log(`Sizning serveringiz http://localhost:${PORT} da ishlayapti`)
})