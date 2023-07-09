import { makeAutoObservable } from "mobx";


export class InputStore {
  searchValue = '';
  error = false;
  constructor() {
    makeAutoObservable(this);
  }

  

  putSearchValue(e) {
    this.searchValue = this.checkInput(e.target.value);
  }

  putError(value) {
    this.error = value;
  }

  checkInput(value) {
    this.putError(false);
    let checkedValue = value.trim().slice(0, 255).toLowerCase();
    if(!checkedValue) return checkedValue = '';

    if(/^[a-zа-яё0-9\s]+$/.test(checkedValue)) {
      checkedValue = checkedValue.replace(/\s/g, '+');
      console.log(checkedValue);
    } else {
      console.log(this.error)
      this.putError(true);
      console.log(this.error)
      return checkedValue = '';
    }
    return checkedValue;
  
  }
}

// export const inputStore = new InputStore();