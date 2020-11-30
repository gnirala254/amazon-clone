import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api",
  // "http://localhost:5001/challenge-4b2b2/us-central1/api",
  // baseURL: "http://localhost:5001/clone-9bef9/us-central1/api",
});

export default instance;

//firebase deploy --only functions
//then go to firebase functions and
//copy the api url and paste it here in base url
//then npm run build
//then firebase deploy --only hosting
