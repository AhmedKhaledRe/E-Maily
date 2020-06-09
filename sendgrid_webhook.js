const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 5000 },{ subdomain: 'lairjgliargli' }, function(err, tunnel) {
    console.log('LT running');
  });
})();