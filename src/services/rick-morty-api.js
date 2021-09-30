const URL = process.env.REACT_APP_URL;

export const fetchCharacters = () => {
  return fetch(`${URL}/api/character`)
    .then(res => res.json())
    .then(console.log());
};
