module.exports = (() => {
    const hardskillController = require("../controllers/hardskill.controller");

    let router = require("express").Router();

    router.get("/", async (req, res) => {
      const hardskills = await hardskillController.index();
      res.json(hardskills);
        
    })

    router.get("/:id", async (req, res) => {
        const id = req.params.id
        const hardskill = await hardskillController.show(id);
        res.json(hardskill);
    })

    router.post("/", async (req, res) => {
        const hardskills = await hardskillController.store(req.body);
        res.json(hardskills);
    })

    router.put("/:id", async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const hardskill = await hardskillController.update(id, body);
        res.json(hardskill);
    })

    router.delete("/:id", async (req, res) => {
        const id = req.params.id
        const hardskill = await hardskillController.destroy(id);
        res.json(hardskill);
    })

    return router;
})()