const config = require('../config.js');
const path = require('path');
const fs = require('fs');
const aws = require('aws-sdk');
const { exec } = require('child_process');

/**
 * Push assets to an AWS S3 (or compatible) bucket.
 */
const pushToBucket = (relPath, contentType) => {
  const s3 = new aws.S3({
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
    region: config.aws.region,
    endpoint: config.aws.endpoint,
  });
  
  const file = path.resolve(__dirname, relPath);
  const fileStream = fs.createReadStream(file);
  fileStream.on('error', (error) => console.log('File Error', error));
  
  const uploadParams = {
    Bucket: config.aws.bucket,
    Key: path.basename(file),
    Body: fileStream,
    // Metadata
    ACL: 'public-read',
    ContentType: contentType,
    ContentDisposition: 'inline',
  };
  
  s3.upload(uploadParams, (error, data) => {
    if (error) {
      throw error;
    } else if (data) {
      console.log(`Upload Success: "${data.Location}" with mime-type: "${contentType}"`);
    } else {
      console.log(`Failed to upload asset "${relPath}"`);
    }
  });
};

/**
 * Perform a serverless deployment.
 */
const deploy = () => {
  const command = './node_modules/serverless/bin/serverless deploy';
  const opts = {
    cwd: path.resolve(__dirname, '..'),
    env: {
      // Pass in parent env.
      ...process.env,
      // Augment with app env.
      CLOUDFLARE_AUTH_EMAIL: config.cloudflare.authEmail,
      CLOUDFLARE_AUTH_KEY: config.cloudflare.authKey,
    },
  };

  exec(command, opts, (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    
    if (stderr) {
      throw new Error(stderr);
    }
    
    console.log(stderr || stdout);
  });
};

pushToBucket('../dist/front.js', 'application/javascript');
pushToBucket('../src/styles/app.css', 'text/css');
deploy();
