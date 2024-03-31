import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '84416e3d1bc4467eac34e1e37ef7df32'
  }
});
