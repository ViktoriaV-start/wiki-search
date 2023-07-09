import { makeAutoObservable } from "mobx";


export class WikiStore {
  wikiData = [];
  constructor() {
    makeAutoObservable(this);
  }

  putData(newSearch) {
    this.wikiData = newSearch;
  }
}

// export default new WikiStore();