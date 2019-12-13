const express = require('express');
const mongoose = require('mongoose');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();

const documents = require('./routes/documents')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

app.use(express.urlencoded({ extended: true }));
app.use('/documents',documents);

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  try {
    await mongoose.connect(
      'mongodb+srv://abc123:Vkfltytwjou9df9@vueexpress-nq8xi.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      }
    )
    app.listen(port, () => {
      consola.log('Server has been started...')
    })
  } catch (e) {
    consola.log(e)
  }
}
start()
