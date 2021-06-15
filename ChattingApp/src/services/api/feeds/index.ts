import FeedsApiEndpoints from './FeedsAPIEndpoints';
import {BASE_API} from '../../../constants/api/feedsAPI/FeedsAPI';

class FeedAPI {
  constructor() {}
  getProfileAPI(feedId) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_API}${FeedsApiEndpoints.v1}/${feedId}`)
        .then(response => response.json())
        .then(json => {
          resolve(json);
        })
        .catch(error => console.error(error));
    });
  }
}

export default FeedAPI;

