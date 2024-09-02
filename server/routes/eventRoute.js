const express = require("express");
const { createEvent} = require("../controllers/eventController");
const {getEventsByUserEmail,getEventsByUserEmail1} = require ("../controllers/eventController");


// router
const router = express.Router();

// login route
router.post("/create", createEvent);
router.get('/user/:email', getEventsByUserEmail);
router.get('/user', getEventsByUserEmail1);
// sign up route


module.exports = router;
