let controller = {

    index: (req, res) => {
        res.render('index')
    },
    detalle: (req, res) => {
        res.render('detalle')
    }
}



module.exports = controller;