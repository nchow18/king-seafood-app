import Axios from 'axios';

class Data {
  getProducts() {
    const result = Axios.get('http://localhost:3001/api/products').then(data => data.data);

    return result
  }
}

export default new Data();