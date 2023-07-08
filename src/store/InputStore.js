import { makeAutoObservable } from "mobx";



class InputStore {
  searchValue = '';
  constructor() {
    makeAutoObservable(this);
  }

  setSearchValue(e) {
    this.searchValue = e.target.value;
  }
}

export default new InputStore();