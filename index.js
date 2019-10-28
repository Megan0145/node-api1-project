// implement your API here
const express = require("express");
const cors = require("cors");
const db = require("./data/db");
const app = express();

app.use(cors());
app.use(express.json());

app.put("/api/users/:id", updateUser)
app.delete("/api/users/:id", deleteUser)
app.get("/api/users/:id", getUserById);
app.post("/api/users", createNewUser);
app.get("/api/users", getAllUsers);
app.get("*", handleDefaultRequest);

function deleteUser(req, res) {
    const { id } = req.params;
    db.remove(id)
    .then(user => {
        if(!user){
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        } else {
            res.status(200).json(user)
        }
    })
    .catch(err => {
        res.status(500).json({ error: "The user could not be removed" })
    })
}

function updateUser(req, res) {
const { id } = req.params;
const { name, bio } = req.body;

    if(!name || !bio){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db.update(id, req.body)
        .then(user => {
            console.log(id, req.body)
            res.status(200).json({message: "User updated", body: req.body})
        })
        .catch(err => {
            res.status(500).json({ error: "The user information could not be modified." })
        })
    }
}

function getUserById(req, res) {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (!user) {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
}

function createNewUser(req, res) {
  const user = {
    name: req.body.name,
    bio: req.body.bio
  };
  if (!user.name || !user.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    db.insert(user)
      .then(response => {
        res.status(201).json(user);
      })
      .catch(err => {
        res
          .status(500)
          .json({
            error: "There was an error while saving the user to the database"
          });
      });
  }
}

function getAllUsers(req, res) {
  db.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The users information could not be retrieved." });
    });
}

function handleDefaultRequest(req, res) {
  res.json("boo");
}

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on " + (process.env.PORT || 5000));
});
