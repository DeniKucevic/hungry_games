import Axios from "axios";
const Base_URL = "http://localhost:3030";

//restorani
const GetRestaurants = async () => {
  return await Axios.get(`${Base_URL}/restaurant`);
};

//ankete
const GetPolls = async () => {
  return await Axios.get(`${Base_URL}/poll`);
};

export { GetRestaurants, GetPolls };
