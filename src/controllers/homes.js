

 exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
};

const registeredHomes = [];

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
  console.log(registeredHomes)
};

exports.getAddHomes = (req, res, next) => {
  // console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
};


exports.registeredHomes = registeredHomes;