const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");

//@route @GET
//@description Test todo route
//@acess public
router.get("/test", (req, res) => {
  res.json({ msg: "test of todo is working" });
});

//@route @POST
//@description Create todo route
//@acess public
router.post("/create", (req, res) => {
  const newTodo = new Todo({
    todotask: req.body.todotask,
    priority: req.body.priority,
  });
  newTodo
    .save()
    .then((todo) => res.json(todo))
    .catch((err) => console.log(err));
});

//@route @GET
//@description GET todo's route
//@acess public
router.get("/alltodos", (req, res) => {
  Todo.find()
    .then((todos) => {
      if (!todo) {
        res.status(400).json("no todos found create one because its empty");
      } else {
        res.status(200).json(todos);
      }
    })
    .catch((err) => console.log(err));
});

//@route @GET
//@description GET todo's by id route
//@acess public
router.get("/todoid/:id", (req, res) => {
  const { id } = req.params;
  Todo.findById(id)
    .then((todo) => {
      if (!todo) {
        res.status(400).json(`No todo with ${id} exist`);
      } else {
        res.status(200).json(todo);
      }
    })
    .catch((err) => console.log(err));
});

//@route @UPDATE
//@description UPDATE todo by id route
//@acess public

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((todo) => {
      if (!todo) {
        res.status(400).send({ msg: "todo dont exist" });
      } else {
        res.status(200).json(todo + " succesfully updated");
      }
    })
    .catch((err) => console.log(err));
});

//@route @DELETE
//@description DELETE todo's by id route
//@acess public
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id)
    .then((todo) => {
      if (!todo) {
        res.status(400).json("todo dont exist");
      } else {
        res.status(200).json(todo.todotask + " sucessfully deleted");
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
