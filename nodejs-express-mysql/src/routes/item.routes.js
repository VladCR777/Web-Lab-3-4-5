// item.toutes.js
module.exports = app => {
    const itemController = require("../controller/item.controller");
    const router = require("express").Router();


    
    
    router.post("/", itemController.create);

    
    router.get("/", itemController.findAll);

    router.get("/:id", itemController.findOne);

    
    router.put("/:id", itemController.update);

    router.delete("/:id", itemController.delete);

    app.use("/api/films", router);
};
