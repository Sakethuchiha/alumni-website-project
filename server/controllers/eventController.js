// eventController.js
const jwt = require("jsonwebtoken");
const Event = require("../models/eventModel");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "7d" });
};

const createEvent = async (req, res) => {
  console.log("create event");
  console.log(req.body);

  const {
    title,
    date,
    time,
    venue,
    registrationLink,
    alumniIncharge,
    team,
    email,
  } = req.body;

  try {
    const event = await Event.create({
      title,
      date,
      time,
      venue,
      registrationLink,
      alumniIncharge,
      team,
      email: email,
    });

    console.log("res");
    res.status(201).json({ event, message: "Event created successfully!" });
  } catch (err) {
    console.error(err);
    console.log("error creating event");
    res.status(400).json({ error: err.message });
  }
};
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Access denied, token missing' });
  
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Access denied, invalid token' });
  
      req.user = user;
      next();
    });
  };
  
  const getEventsByUserEmail = async (req, res) => {
    const userEmail = req.params.email;
  console.log(userEmail);
    try {
      const events = await Event.find({ email: userEmail });
    
      res.status(200).json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const getEventsByUserEmail1 = async (req, res) => {


    try {
      const events = await Event.find();
      //console.log(events);
      res.status(200).json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  
  module.exports = { createEvent,authenticateToken, getEventsByUserEmail,getEventsByUserEmail1 };


