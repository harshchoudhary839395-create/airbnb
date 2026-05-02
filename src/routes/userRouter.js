// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const { registeredHomes } = require('../controllers/homes.js');
const homesController = require("../controllers/homes");

userRouter.get("/", homesController.getAddHomes);

module.exports = userRouter;