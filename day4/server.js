import http from "http"
const PORT = 3001

// server yaratish
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    res.end("Salom")

})

// LIsten Server Codi ishga tshuradi
server.listen(PORT, (error) => {
    console.log(`Sizning serveringiz http://localhost:${PORT} da ishlayapt`)
})