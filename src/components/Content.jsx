import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { observer } from "mobx-react-lite";


export const Content = observer(() => {
  const { wikiStore } = useContext(StoreContext);

  return (
    <>
    {wikiStore.wikiData.map(el => <a className="content__href" href={el.link} key={el.id} target="_blank" rel="noreferrer">
      <p className="content__item">{el.title}</p>
      </a>)}
    </>
  )
});