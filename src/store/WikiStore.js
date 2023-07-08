import { makeAutoObservable } from "mobx";


class WikiStore {
  wikiData = [];
  constructor() {
    makeAutoObservable(this);
  }

  setData(newSearch) {
    this.wikiData = newSearch;
  }
}

export default new WikiStore();