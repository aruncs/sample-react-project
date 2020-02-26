import express from 'express'

const PORT = process.env.PORT || 5000

function createExpressApp() {
  const app = express()
  app.listen(PORT, () => {
    console.log('server running on port', PORT)
  })
}

createExpressApp()