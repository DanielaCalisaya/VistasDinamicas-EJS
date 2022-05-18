const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/menu.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    index: (req, res) => {
        res.render('index', { /* Renderizo la vista principal incluyendo los platos del menú */
            products
        })
    },
    detail: (req, res) => {
        
        let productId = +req.params.id /* Acá tengo el id que viene por parámetro, y le paso el + para pasarlo a número */
        let product = products.find(product => product.id === productId) /* Captura el producto según el id y despues pasarlo a la vista */

        res.render('detalle', { /* solo me traerá el producto que le pido */
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