// item.controller.js
const Item = require('../models/item.model.js');


exports.create = (req, res) => {
  console.log('Request body:', req.body); 
  if (!req.body.name || !req.body.duration || req.body.reviews === undefined) {
    return res.status(400).send({
      message: "Content cannot be empty! Please provide name, duration, and reviews."
    });
  }

  
  const item = {
    name: req.body.name,
    duration: req.body.duration,
    reviews: req.body.reviews
  };

  
  Item.create(item)
    .then(data => {
      console.log("Film successfully added:", data); 
      res.send(data);
    })
    .catch(err => {
      console.error("Error adding film:", err.message || err); 
      res.status(500).send({ message: err.message || "Some error occurred while creating the film." });
    });
};



exports.findAll = (req, res) => {
  Item.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};


exports.findOne = (req, res) => {
  const id = req.params.id;
  Item.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `Item with id ${id} not found.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};


exports.update = (req, res) => {
  const id = req.params.id;
  Item.update(req.body, { where: { id: id } })
    .then(num => {
      if (num[0] === 1) {
        res.send({ message: "Item updated successfully." });
      } else {
        res.status(404).send({ message: `Item with id ${id} not found.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};


exports.delete = (req, res) => {
  const id = req.params.id;
  Item.destroy({ where: { id: id } })
    .then(num => {
      if (num === 1) {
        res.send({ message: "Item deleted successfully." });
      } else {
        res.status(404).send({ message: `Item with id ${id} not found.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};
