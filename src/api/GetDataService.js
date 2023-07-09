import { LIMIT, WIKI_LIMIT, WIKI_SEARCH, WIKI_URL } from '../config/constants';


export class GetDataService  {

  static async getData(search, route = WIKI_URL) {
    const urlString = route + WIKI_SEARCH + search + WIKI_LIMIT + LIMIT;
    
    const response = await fetch(urlString);
    return await response.json();
  }
}
