export const environment = {
  get production() {
    return true;
  },
  get name() {
    return 'production';
  },
  get apis() {
    return {
      get questionServiceConsumerEndpoint() {
        return 'https://question-service-ft1.azurewebsites.net/api/question';
      },
      get queueServiceEndpoint() {
        return 'https://queuefunctionft1.azurewebsites.net/api';
      }
    };
  }
};
