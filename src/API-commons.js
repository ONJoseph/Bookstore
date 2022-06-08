import axios from 'axios';

import { baseURL } from './modules/endpoints';

export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
