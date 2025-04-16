import axios from 'axios';
const API_KEY  = 'NK6KDPliJAirxUi6jNNa1HKmsBvLVsJx';
const api_url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed'
export const fetchMostViewedArticles = async (params) => {
    console.log('API_KEY ', API_KEY);
    
    try {
      const response = await axios.get(`${api_url}/${params}.json?api-key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching NYT data:', error);
      throw error;
    }
  };