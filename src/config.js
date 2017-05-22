export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    //YOUR AWS S3 BUCKET NAME
    BUCKET: 'notes-app-uploads-vf'
  },
  apiGateway: {
    //EG.: https://lambdaname.execute-api.region.amazonaws.com/dev
    URL: 'https://bo09rj6y1d.execute-api.us-east-1.amazonaws.com/prod/',
  },
  cognito: {
    //EG.: region-code
    USER_POOL_ID : 'us-east-1_5jI2CpVD4',
    //COGNITO APP CLIENT ID
    APP_CLIENT_ID : '7c4jdqu5ddttadht1dtpnn3b8j',
    //AWS REGION us-east-1 us-east-2 or any other
    REGION: 'us-east-1',
    //COGNITO FEDERATE IDENTIFY POOL
    IDENTITY_POOL_ID: 'us-east-1:c2202ad6-5d3c-446a-9614-06dadeec102f',
  }
};
