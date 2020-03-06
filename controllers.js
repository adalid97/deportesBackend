const { Jugador, Equipo } = require("./models.js");


// ------- JUGADORES

exports.readJugadores = (req, res) => {
    Jugador.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readJugador = (req, res) => {
    Jugador.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteJugador = (req, res) => {
    Jugador.findOneAndRemove({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateJugador = (req, res) => {
    Jugador.findOneAndUpdate(
        { nombre: req.params.nombre },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, edad: req.body.edad, equipo: req.body.equipo } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createJugador = (req, res) => {
    const jugador = new Jugador({ nombre: req.body.nombre, apellidos: req.body.apellidos, edad: req.body.edad, equipo: req.body.equipo });
    jugador.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}


// ------ EQUIPOS

exports.readEquipos = (req, res) => {
    Equipo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readEquipo = (req, res) => {
    Equipo.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteEquipo = (req, res) => {
    Equipo.findOneAndRemove({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateEquipo = (req, res) => {
    Equipo.findOneAndUpdate(
        { nombre: req.params.nombre },
        { $set: { nombre: req.body.nombre, pais: req.body.pais, socios: req.body.socios, titulos: req.body.titulos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createEquipo = (req, res) => {
    const equipo = new Equipo({ nombre: req.body.nombre, pais: req.body.pais, socios: req.body.socios, titulos: req.body.titulos });
    equipo.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}