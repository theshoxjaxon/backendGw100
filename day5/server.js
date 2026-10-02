import express from "express";
const app = express()
import fs from "fs"

const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"))
// import http from "http"
const PORT = 3000

// Middleware
app.use(express.json())

// ! Home Page
app.get("/", (req, res) => {
    res.send("Salom Bu Express JS Freamworki")
})

app.get("/profile", (req, res) => {
    res.status(200).send("<h1>Bu Profile Page</h1>")
})

app.get("/users/:id", (req, res) => {
    const { id } = req.params
    const user = users.find((user) => user.id === Number(id))
    if (!user) {
        return res.status(404).send("<h1>User Not Found</h1>")
    }
    res.status(200).json(user)
})





// ! POst qilamiz
app.post("/user", (req, res) => {
    res.status(201).send("User Yartilindi")
})


// ! 404 Page eng oxirida yoziladi
app.get("/*splat", (req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>")
})
// app.post("/user", (req, res))

app.listen(PORT, (error) => {
    if (error) {
        return console.log("Siz dagi error :", error)
    }
    console.log(`Sizning serveringiz http://localhost:${PORT}`)
})