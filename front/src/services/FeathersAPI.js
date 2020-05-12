import Axios from "axios";
const Base_URL = "http://localhost:3030";

//restorani
//povlaci do limita sve(limit na 4(...za one koji ne vide))
const GetRestaurants = async (newPage) => {
  return await Axios.get(`${Base_URL}/restaurant?$limit=${4}&$skip=${newPage}`);
};

//povlaci po prosledjenom ID-ju
const GetRestaurant = async (id) => {
  return await Axios.get(`${Base_URL}/restaurant/${id}`);
};

//updejtuje restoran
const updateRestaurant = async (id, body) => {
  return await Axios.put(`${Base_URL}/restaurant/${id}`, body);
};

//dodaje novi restoran
const addRestaurant = async (body) => {
  return await Axios.post(`${Base_URL}/restaurant`, body);
};

//brise restoran
const restDelete = async (id) => {
  return await Axios.delete(`${Base_URL}/restaurant/${id}`);
};

//pretrazuje restorane
const searchRest = async (param) => {
  return await Axios.get(`${Base_URL}/restaurant?name=${param}`);
};

//************************************************************ */
//ankete
const GetPolls = async () => {
  return await Axios.get(`${Base_URL}/poll`);
};

export {
  GetRestaurants,
  GetRestaurant,
  GetPolls,
  updateRestaurant,
  addRestaurant,
  restDelete,
  searchRest,
};
