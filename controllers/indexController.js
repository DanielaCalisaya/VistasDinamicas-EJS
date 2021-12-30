let controller = {

    index: (req, res) => {
        res.render('index')
    },
    detalle: (req, res) => {
        res.render('detalleMenu')
    }
}



module.exports = controller;