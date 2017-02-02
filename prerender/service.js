var prerender = require('prerender');

var server = prerender({
  port: 80,
  workers: 1 // in production you'd have multiple workers, but for demo purposes it's simpler to show just one
});
server.use(prerender.sendPrerenderHeader());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(prerender.inMemoryHtmlCache());
server.start();
