var jsonServer = require('json-server');
var path = require('path');
var server = jsonServer.create();
var router = jsonServer.router(path.join(__dirname, '../src/api/db.json'))
var middlewares = jsonServer.defaults();



server.use(middlewares)

function isAuthorized(req) {
  return true;
}

server.use(function (req, res, next) {
  if (isAuthorized(req)) {
    next()
  } else {
    res.sendStatus(401)
  }
})

server.use('/api', router);
server.use(router);

server.listen(3000, function () {
  console.log('JSON Server is running');
});
