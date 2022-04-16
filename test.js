var ogjs = require('./index.js');
// Pass in a URL
ogjs({ url: 'https://get.animateme.app/GGfmuvMOdpb' })
  .then(function (data) {
    console.log(data); // some share data parsed from metatags..
  }, function (err) {
    console.log('It seems that we have fumbled with an error', err);
  });