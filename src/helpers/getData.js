export const url = "https://guappjolotes.herokuapp.com/";

export const getData = async (producto) => {
  const endpoint = url + producto;
  const resp = await fetch(endpoint);
  const data = resp.json();
  return data;
};
