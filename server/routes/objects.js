const express = require('express');
const obj = require('../models/obj')
const objects = express.Router();

objects.get('/', async(req, res) => {
    const objects = await obj.find({});
    res.send(objects);
});

objects.post('/create', async(req, res) => {
    const obj = new obj({
        title: req.body.name,
        content: req.body.description,
        date: req.body.date
    });
    await obj.save();
    res.redirect('/');
});

module.exports = objects;