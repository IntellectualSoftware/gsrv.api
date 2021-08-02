import {createServer} from "restify"
import MainApiRoute from "./api"
import {performance} from "perf_hooks"

let server = createServer()

let mar = new MainApiRoute()
mar.hook(server)

server.pre(function (req, res, next) {
    let t = performance.now()
    next()
    console.log(`${req.method}: ${req.url} [${(performance.now() - t).toFixed(2)}ms]`)
})
server.listen(3000, () => console.log('%s listening at %s', server.name, server.url))