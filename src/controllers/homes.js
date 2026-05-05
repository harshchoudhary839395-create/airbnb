const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
};

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  const {houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();


  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
  console.log(registeredHomes)
};

exports.getAddHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  // console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
};


//exports.registeredHomes = registeredHomes;