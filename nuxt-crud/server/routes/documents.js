const express = require('express');
const Document = require('../models/document')

const documents = express.Router();

//получаем все документы
documents.get('/', async(req, res) => {
    const documents = await Document.find({});
    res.send(documents);
});

//полу4аем конкретный документ по айди
documents.get('/:id', async(req, res) => {
    const document = await Document.findById(req.params.id);
    res.send(document);
});

//добавляем новый документ
documents.post('/', async(req, res) => {
    console.log(req.body)
    const document = new Document({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
        date: Date.now()
    });
    await document.save();
    res.redirect('/documents');
});

//обновить конкретный документ по айди
documents.post('/:id', async(req, res) => {
    const document = await Document.findById(req.params.id);
    document.title = req.body.title;
    document.content = req.body.content;
    await document.save();
    res.redirect('/');
});

//удаляем конкретный документ по айди
documents.delete('/:id', async(req, res) => {
    const document = await Document.findByIdAndDelete(req.params.id)
    await document.save()
    res.redirect('/documents')
})



module.exports = documents;