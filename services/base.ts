import axios from "axios";
export default axios.create({
  baseURL: `https://62a6df6097b6156bff813771.mockapi.io/fakeData`,
  headers: {
    'Content-type': 'application/json'
  }
});
