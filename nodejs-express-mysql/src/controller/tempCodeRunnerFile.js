const Item = require('../models/item.model.js');

exports.create = (req, res) => {
  const item = { name: req.body.name };
  Item.create(item).then(data => res.send(data)).catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Item.findAll().then(data => res.send(data)).catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Item.findByPk(id).then(data => res.send(data)).catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Item.update(req.body, { where: { id: id } }).then(num => res.send({ message: "Item updated successfully" }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Item.destroy({ where: { id: id } }).then(num => res.send({ message: "Item deleted successfully" }));
};

console.log(itemController);