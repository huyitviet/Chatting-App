import FeedAPI from '../../../services/api/feeds/index';
class getFeedsProfile {
  constructor() {}

  getProfileFromAPI(feedId) {
    return new Promise((resolve, reject) => {
      var api = new FeedAPI();
      api.getProfileAPI(feedId).then(profile => resolve(profile));
    });
  }
}
export default getFeedsProfile;
