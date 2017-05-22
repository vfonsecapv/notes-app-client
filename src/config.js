export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    //YOUR AWS S3 BUCKET NAME
    BUCKET: ''
  },
  apiGateway: {
    //EG.: https://lambdaname.execute-api.region.amazonaws.com/dev
    URL: '',
  },
  cognito: {
    //EG.: region-code
    USER_POOL_ID : '',
    //COGNITO APP CLIENT ID
    APP_CLIENT_ID : '',
    //AWS REGION us-east-1 us-east-2 or any other
    REGION: '',
    //COGNITO FEDERATE IDENTIFY POOL
    IDENTITY_POOL_ID: '',
  }
};
