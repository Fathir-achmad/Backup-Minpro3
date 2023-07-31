const express = require('express');
const PORT = 8000;
const server = express();
const db = require('./models');
const cors = require('cors');


server.use(express.json());
server.use(cors())
server.use(express.static("./public"))

server.get('/', (req, res) => {
    res.status(200).send('This is my API for testing backend')
})

const { productRouter, categoryRouter } = require('./routers');
server.use("/api/products",productRouter)
server.use("/api/categories",categoryRouter)

server.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`);
    // db.sequelize.sync( {alter:true} ) //------------------- Synchronize
})