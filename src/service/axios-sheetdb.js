import axios from 'axios';

export const AXIOSsheetDB = axios.create({
  baseURL: 'https://sheetdb.io/api/v1/5ad90898901b3',
  headers: {
    Authorization: 'Bearer {token}'
  }
})