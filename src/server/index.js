import express from "express"
import path from "path"
import resourceMap from "./resources.json"
import addResources from "./middlewares/addResources"
import attachReduxStore from "./middlewares/attachReduxStore"
import viewHandler from "./middlewares/viewHandler"

const PORT = process.env.PORT || 5000

function createExpressApp() {
  const app = express()
  app.set("view engine", "pug")
  app.set("views", path.join(__dirname, "views"))

  app.use(express.static(path.join(__dirname, "..", "client")))
  app.use(addResources(resourceMap))
  app.use(attachReduxStore)
  //app.use(viewHandler)
  app.use((req, res, next) => {
    res.render("index")
  })
  app.listen(PORT, () => {
    console.log("server running on port", PORT)
  })
}

createExpressApp()
