import { useContext, useEffect, useRef } from "react"
import { StoreContext } from "../context/StoreContext"
import { observer } from "mobx-react-lite";

export const Form = observer(({ fetching }) => {
  const { inputStore } = useContext(StoreContext);
  const { wikiStore } = useContext(StoreContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleClick = (e) => {
    e.preventDefault();
    wikiStore.putData([]);
    inputStore.putError(false);
    if(inputStore.searchValue) {
      fetching(inputStore.searchValue);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleClick}>
        <input className="form__input"
               type="search"
               placeholder="Искать в Википедии"
               onChange={(e) => inputStore.putSearchValue(e)}
               ref={inputRef}
        >
        </input>
        <button className="form__btn" type="submit" onClick={handleClick}>Поиск</button>   
      </form>

      <div className="form__random-btn">
        <a href="https://ru.wikipedia.org/wiki/Special:Random" target="_blank" rel="noreferrer">
          <button className="form__special-btn" type="button">Случайный выбор</button>
        </a> 
      </div>
    </div>
  )
});
