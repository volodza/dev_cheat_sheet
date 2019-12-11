const Express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const BodyParser = require('body-parser');
const app = Express();
const PORT = process.env.PORT || 3000;
const documents = require('./routes/documents')

app.use(Cors());
app.use(BodyParser.json());
app.use(Express.static(__dirname + '/public/'))
// app.get(/.*/, (req,res)=> res.sendFile(__dirname + '/public/index.html'))

app.use('/documents',documents)

async function run() {
  try {
    await mongoose.connect(
      'mongodb+srv://abc123:Vkfltytwjou9df9@vueexpress-nq8xi.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

run();