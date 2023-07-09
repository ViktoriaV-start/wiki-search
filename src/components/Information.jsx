import { useContext } from "react";
import { TEXT_ERROR } from "../config/constants"
import { StoreContext } from "../context/StoreContext";
import { observer } from "mobx-react-lite";

export const Information = observer(({ isLoading }) => {

  const { inputStore } = useContext(StoreContext);
  const error = inputStore.error;

  return (
    <>
    {error && <div className="information">{TEXT_ERROR}</div>}
    {isLoading && <div className="spinner"></div>}
    </>
  )
});