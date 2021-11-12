module.exports = app => {
    app.get('/api/productos/getProductos', (req, res) => {
        var data = require('../json/productos.json');
        res.json(data);
    }),
    app.get('/api/categoria/getCategorias', (req, res) => {
        var data = require('../json/categoria.json');
        res.json(data);
    })
}