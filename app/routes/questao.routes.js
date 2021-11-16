module.exports = (() => {
    const questaoController = require("../controllers/questao.controller");

    let router = require("express").Router();

    router.get("/", async (req, res) => {
      const questaos = await questaoController.index();
      res.json(questaos);
        
    })

    router.get("/:id", async (req, res) => {
        const id = req.params.id
        const questao = await questaoController.show(id);
        res.json(questao);
    })

    router.post("/", async (req, res) => {
        const questaos = await questaoController.store(req.body);
        res.json(questaos);
    })

    router.put("/:id", async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const questao = await questaoController.update(id, body);
        res.json(questao);
    })

    router.delete("/:id", async (req, res) => {
        const id = req.params.id
        const questao = await questaoController.destroy(id);
        res.json(questao);
    })

    return router;
})()