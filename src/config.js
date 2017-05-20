export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'notes-app-uploads-vf'
  },
  apiGateway: {
    URL: 'https://bo09rj6y1d.execute-api.us-east-1.amazonaws.com/prod/',
  },
  cognito: {
    USER_POOL_ID : 'us-east-1_5jI2CpVD4',
    APP_CLIENT_ID : '7c4jdqu5ddttadht1dtpnn3b8j',
    REGION: 'us-east-1',
    IDENTITY_POOL_ID: 'us-east-1:c2202ad6-5d3c-446a-9614-06dadeec102f',
  }
};
