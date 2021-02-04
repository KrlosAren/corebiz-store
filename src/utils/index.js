import axios from 'axios';

const getData = async (API) => {
  try {
    const response = await axios(API);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getData;
