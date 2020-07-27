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
        return 'https://question-service-master.azurewebsites.net/api/question';
      },
      get queueServiceEndpoint() {
        return 'https://queuefunctionmaster.azurewebsites.net/api';
      }
    };
  }
};
