// ! REST APi. === APlication Programming Interface. === API
import express from "express";
import fs from "fs"

const app = express()
const PORT = 3003
const users = JSON.parse(fs.readFileSync("./user.json", "utf-8"))

app.use(express.json())

app.get("/api/users", (req, res) => {
    res.status(200).send("<h1>Salom Xamma  userlar</h1>")
})

app.post("/api/users", (req, res) => {
    const { name, id, email } = req.body

    console.log(name, id, email)
    const newUser = {
        id,
        name,
        email
    }
    users.users.push(newUser)
    fs.writeFileSync("./user.json", JSON.stringify(users, null, 4))

    res.status(201).send("Foydanaluvchi yaratilindi")
})

app.get("/api/users/:id", (req, res) => {
    const { id } = req.params
    const users = users.find((user) => user.id === Number(id))
    if (!users) {
        return res.status(404).send("<h1>User Not Found</h1>")
    }
    res.status(200).json(user)
})


app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);

    }
    console.log(`sizning serveringiz http://localhost:${PORT} da ishlayapti`);

})