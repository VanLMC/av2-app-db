module.exports = (() => {
    const usuarioController = require("../controllers/usuario.controller");

    let router = require("express").Router();

    router.get("/", async (req, res) => {
      const usuarios = await usuarioController.index();
      res.json(usuarios);
        
    })

    router.get("/:id", async (req, res) => {
        const id = req.params.id
        const usuario = await usuarioController.show(id);
        res.json(usuario);
    })

    router.post("/", async (req, res) => {
        const usuarios = await usuarioController.store(req.body);
        res.json(usuarios);
    })

    router.put("/:id", async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const usuario = await usuarioController.update(id, body);
        res.json(usuario);
    })

    router.delete("/:id", async (req, res) => {
        const id = req.params.id
        const usuario = await usuarioController.destroy(id);
        res.json(usuario);
    })

    return router;
})()