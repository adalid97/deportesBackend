const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/jugadores",          cors(), controller.readJugadores);     // Read All
router.get    ("/jugadores/:nombre",  cors(), controller.readJugador);      // Read
router.delete ("/jugadores/:nombre",  cors(), controller.deleteJugador);    // Delete
router.put    ("/jugadores/:nombre",  cors(), controller.updateJugador);    // Update
router.post   ("/jugadores",          cors(), controller.createJugador);    // Create

router.get    ("/equipos",         cors(), controller.readEquipos);            // Read All
router.get    ("/equipos/:nombre", cors(), controller.readEquipo);             // Read
router.delete ("/equipos/:nombre", cors(), controller.deleteEquipo);           // Delete
router.put    ("/equipos/:nombre", cors(), controller.updateEquipo);           // Update
router.post   ("/equipos",         cors(), controller.createEquipo);           // Create


module.exports = router;
