const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./app/db/models");

//db.sequelize.sync({force: true})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.json({
        mensagem: 'GRUPOU API'
    })
});

app.listen(3000, () => {
    console.log('Servidor rodando')
})

require("./app/routes")(app);


