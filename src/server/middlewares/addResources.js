export default function addResources(resourceMap) {
  return function(req, res, next) {
    let scripts = [resourceMap["external.js"], resourceMap["main.js"]]

    res.resources = {
      scripts
    }
    next()
  }
}
