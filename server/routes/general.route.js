module.exports = app => {
    app.get('/api/productos/getProductos', (req, res) => {
        var data = require('../json/productos.json');
        res.json(data);
    }),
    app.get('/api/categoria/getCategorias', (req, res) => {
        var data = require('../json/categoria.json');
        res.json(data);
    }),
	app.get('/api/pedidocliente/getpedidoscliente', (req, res) => {
        var data = require('../json/pedidocliente.json');
        res.json(data);
    }),
	app.get('/api/locales/getlocales', (req, res) => {
        var data = require('../json/local.json');
        res.json(data);
    }),
	app.get('/api/promociones/getpromociones', (req, res) => {
        var data = require('../json/promocion.json');
        res.json(data);
    })
}