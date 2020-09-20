const express = require('express');
const router = express.Router();
const app = express();

app.use("/static", express.static('./static/'));

// router.get('/about-us', (req, res) => {
//     res.render('/about-us');
// })

router.get('/about-us', (req, res) => {
    res.render('pages/about-us')
})

router.get('/graduates', (req, res) => {
    res.render('pages/graduates')
})

router.get('/login', (req, res) => {
    res.render('pages/login')
})

router.get('/organizations', (req, res) => {
    res.render('pages/organizations')
})

router.get('/add-org', (req, res) => {
    res.render('pages/add-org')
})

router.get('/style-guide', (req, res) => {
  res.render('pages/style-guide')
})

router.get('/graduate-card', (req, res) => {
  res.render('pages/graduate-card')
})

router.get('/organization-card', (req, res) => {
  res.render('pages/organization-card')
})

router.get('/registration', (req, res) => {
  res.render('pages/registration')
})

router.get('/search-page', (req, res) => {
  res.render('pages/search-page')
})

router.get('/add-experience', (req, res) => {
  res.render('pages/add-experience')
})

router.get('/forgotpwd', (req, res) =>{
  res.render('pages/forgotpwd')
})

module.exports = router;