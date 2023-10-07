const express = require('express');
const router = express.Router();

//DIFINING ALL THE ROUTERS FOR RENDERING EJS TEMPLATES

// Render the index.ejs template
router.get('/', (req, res) => {
    res.render('home'); 
});

//Render the index.js template
router.get('/home', (req, res) => {
    res.render('home');
});

//Render the about.ejs template
router.get('/about', (req, res) => {
    res.render('about');
});

// Render the article.ejs template
router.get('/articles', (req, res) => {
    res.render('articles');
});

// Render the assignment1.ejs template
router.get('/assignment1', (req, res) => {
    res.render('assignment1');
});

// Render the contact.ejs template
router.get('/contact', (req, res) => {
    res.render('contact');
});

// Render the ebooks.ejs template
router.get('/ebooks', (req, res) => {
    res.render('ebooks');
});

// Render the ieninfoaboutnscn.ejs template
router.get('/ieninfoaboutnscn', (req, res) => {
    res.render('ieninfoaboutnscn');
});

// Render the newreview.ejs template
router.get('/newreview', (req, res) => {
    res.render('newreview');
});

// Render the renalfailure.ejs template
router.get('/renalfailure', (req, res) => {
    res.render('renalfailure');
});

// Render the onlinebooking.ejs template
router.get('/onlinebooking', (req, res) => {
    res.render('onlinebooking');
});

// Render the programclasses.ejs template
router.get('/programclasses', (req, res) => {
    res.render('programclasses');
});

// Render the project.ejs template
router.get('/project', (req, res) => {
    res.render('project');
});

// Render the questionnaireinto.ejs template
router.get('/questionnaireintro', (req, res) => {
    res.render('questionnaireintro');
});

// Render the questionnaire.ejs template
router.get('/questionnaire', (req, res) => {
    res.render('questionnaire');
});

// Render the service.ejs template
router.get('/service', (req, res) => {
    res.render('service');
});

module.exports = router;