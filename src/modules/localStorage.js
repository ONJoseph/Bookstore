import { baseURL } from './endpoints';

class LocalStorage {
  constructor(url, key) {
    this.baseUrl = url;
    this.endPointKey = key;
    this.appId = '';
  }

  setAppId(data) {
    this.appId = data;
  }

  getAppId() {
    return this.appId;
  }

  createApp(method) {
    method().then(
      (result) => { this.appId = result.data; this.setLocal(); },
    );
  }

  setLocal() {
    localStorage.setItem(this.endPointKey, this.appId);
  }

  getLocal(method) {
    if (localStorage.getItem(this.endPointKey) === null) {
      this.createApp(method);
    } else {
      this.appId = localStorage.getItem(this.endPointKey);
    }
  }
}

const storage = new LocalStorage(baseURL, 'app-endpoint');

export default storage;
