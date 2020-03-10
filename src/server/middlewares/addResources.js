import { isMainThread } from "worker_threads";

export default function addResources(resourceMap) {
  return function(req, res, next) {
    let scripts = [resourceMap["external.js"], resourceMap["main.js"]]
    let links = [resourceMap["main.css"]]
    res.resources = {
      scripts,
      links
    }
    next()
  }
}
