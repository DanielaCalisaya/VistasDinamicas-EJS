let controller = {

    index: (req, res) => {
        res.render('index')
    },
    detalle: (req, res) => {
        
        let detail = req.params.id
        res.render('detalle/id')
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