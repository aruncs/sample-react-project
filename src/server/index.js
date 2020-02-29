import express from 'express'
import path from 'path'
const PORT = process.env.PORT || 5000

function createExpressApp() {
  const app = express()
  app.set('view engine', 'pug')
  app.set('views', path.join(__dirname, 'views'))
  app.use((req, res, next) => {
    res.render('index')
  })
  app.listen(PORT, () => {
    console.log('server running on port', PORT)
  })
}

createExpressApp()