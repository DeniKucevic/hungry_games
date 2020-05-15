import Axios from "axios";
const Base_URL = "http://localhost:3030";

//restorani
//povlaci do limita sve(limit na 4(...za one koji ne vide))
const GetRestaurants = async (newPage) => {
  return await Axios.get(
    `${Base_URL}/restaurant?$limit=${4}&$skip=${newPage}&$sort[name]=1`
  );
};

//povlaci sve
const GetAllRestaurants = async (newPage) => {
  return await Axios.get(`${Base_URL}/restaurant?$limit=${50}&$sort[name]=1`);
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

//meals
const getMeal = async (restourantId) => {
  return await Axios.get(`${Base_URL}/meal?restaurantId=${restourantId}`);
};

//************************************************************ */

//ankete
//povlaci sve
const GetPolls = async () => {
  return await Axios.get(`${Base_URL}/poll`);
};

//povlaci po id-ju
const GetPoll = async (id) => {
  return await Axios.get(`${Base_URL}/poll/${id}`);
};

//pravi novi poll
const createPoll = async (body) => {
  return await Axios.post(`${Base_URL}/poll`, body);
};

//brise poll
const deletePoll = async (id) => {
  return await Axios.delete(`${Base_URL}/poll/${id}`);
};

//************************************************************ */
//get vote entity by id
const getVote = async (id) => {
  return await Axios.get(`${Base_URL}/vote/${id}`);
};

//update votes
const updateVote = async (id, body) => {
  return await Axios.patch(`${Base_URL}/vote/${id}`, { votes: body });
};

//create votes
const createVote = async (body) => {
  return await Axios.post(`${Base_URL}/vote`, body);
};

//******************************************* */
//orders
//create order
const createOrder = async (id) => {
  return await Axios.post(`${Base_URL}/order`, {
    date: new Date(),
    restaurantId: id,
  });
};

//zemi si orders
const getOrders = async () => {
  return await Axios.get(`${Base_URL}/order`);
};

export {
  GetRestaurants,
  GetRestaurant,
  GetPolls,
  updateRestaurant,
  addRestaurant,
  restDelete,
  searchRest,
  getMeal,
  GetPoll,
  getVote,
  updateVote,
  GetAllRestaurants,
  createVote,
  createPoll,
  deletePoll,
  createOrder,
  getOrders,
};
