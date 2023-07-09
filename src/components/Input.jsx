import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"

export const Input = ({ fetching }) => {
  const { inputStore } = useContext(StoreContext);
  const { wikiStore } = useContext(StoreContext);

  const handleClick = (e) => {
    e.preventDefault();
    wikiStore.putData([]);
    inputStore.putError(false);
    if(inputStore.searchValue) {
      fetching(inputStore.searchValue);
    } else {
      inputStore.putError(true);
    }
  }

  return (
    <>
    <form onSubmit={handleClick}>
    <input type="search" className="input" placeholder="Поиск" onChange={(e) => inputStore.putSearchValue(e)}></input>
    <button type="submit" onClick={handleClick}>Push</button>
    </form>
    </>
  )
}