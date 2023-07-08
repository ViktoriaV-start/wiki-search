import { limit, url } from '../config/constants';


export class GetDataService  {

  static async getData(search, route=url) {
    const urlString = route + '&search=' + search + '&limit=' + limit + '&format=json&origin=*&formatversion=2';
    
    console.log(urlString)
    const response = await fetch(urlString);
    return await response.json();
  }
}
