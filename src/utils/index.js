import axios from 'axios';

export const getData = async (API) => {
  try {
    const response = await axios(API);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const handleSumTotal = (cart) => {
  const reducer = (acc, cv) => acc + Number(cv.price);
  const sum = cart.reduce(reducer, 0);
  return sum;
};
