const mongoose = require('mongoose');

const Jugador = mongoose.model('Jugador',
  new mongoose.Schema({ nombre: String, apellidos: String, edad:Number, equipo:String })
);

const Equipo = mongoose.model('Equipo',
  new mongoose.Schema({ nombre: String, pais: String, socios:Number, titulos:Number })
);

module.exports = {
  Jugador: Jugador,
  Equipo: Equipo
}
