
var google = require('googleapis');
var key = require(__dirname + '/auth.json');
var jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/cloud-platform' ], null);

jwtClient.authorize(function(err, tokens) {
  if (err) {
    console.log(err);
    return;
  }

  const vision = require('node-cloud-vision-api');
  vision.init({auth: jwtClient});

  // construct parameters
  const req = new vision.Request({
    image: new vision.Image(__dirname + '/dog.jpg'),
    features: [
      new vision.Feature('FACE_DETECTION', 4),
      new vision.Feature('LABEL_DETECTION', 10),
    ]
  })

  // send single request
  vision.annotate(req).then((res) => {
    // handling response
    console.log(JSON.stringify(res.responses, ' ', 2))
  }, (e) => {
    console.log('Error: ', e)
  })

});