import { makeAutoObservable } from "mobx";


class InputStore {
  searchValue = '';
  constructor() {
    makeAutoObservable(this);
  }

  setSearchValue(e) {
    
    this.searchValue = this.checkInput(e.target.value);
  }

  checkInput(value) {
    
  //  if (/^[a-zA-Z0-9\s]+$/.test(value)) {
    let trimedValue = value.trim().slice(0, 255).toLowerCase();
    console.log(/^[a-zа-яё0-9\s]+$/.test(value))
    return trimedValue;
  //  }
  }
}

export const inputStore = new InputStore();