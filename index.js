// implement your API here
const express = require("express")
const cors = require("cors")
const db = require("./data/db")
const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/users", createNewUser)
app.get("/api/users", getAllUsers)
app.get("*", handleDefaultRequest)

function createNewUser(req, res) {
    const user = {
        name: req.body.name,
        bio: req.body.bio
    }
    if(!user.name || !user.bio){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db.insert(user)
        .then(response => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({ error: "There was an error while saving the user to the database" })
        })
    }
}

function getAllUsers(req, res) {
  db.find()
    .then(data => {
      console.log(data)
      res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

function handleDefaultRequest(req, res) {
  res.json("boo");
}

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on " + (process.env.PORT || 5000));
})
