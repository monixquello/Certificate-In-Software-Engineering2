const express = require('express');
const Register = require('../models/indexModels')

const router = express.Router();

router.get('/register', (req, res) => {
    res.render('index.pug');
})

router.post("/regregister", async (req, res) => {
    try{
        const register = new Register(req.body);
        await register.save();
        console.log(req.body);
        res.redirect("/api/register");
    }
    catch(error){
        res.status(400).render("index.pug")
        console.log(error);
    }
})



module.exports = router;