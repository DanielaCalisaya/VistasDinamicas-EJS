const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/menu.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    index: (req, res) => {
        res.render('index', { //renderizo y llevo todos los productos o platos
            products
        })
    },
    detail: (req, res) => {
        
        let productId = +req.params.id
        let product = products.find(product => product.id === productId)

        res.render('detalleMenu', {
            product
        })

    }
}

/* app.get('/serie/:id', (req, res) => {
    let serie=series.find(serie => serie.id == req.params.id)
    
    if(serie == undefined){
        res.send('no se encontro')
    }else {
        res.send(serie)
    }
}) */



module.exports = controller;