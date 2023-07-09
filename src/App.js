import { useContext, useEffect } from "react";

import { useFetching } from "./hooks/useFetching";
import { GetDataService } from "./api/GetDataService";
import { observer } from "mobx-react-lite";
import { StoreContext } from "./context/StoreContext";
import { TEXT_ERROR } from "./config/constants";
import { Header } from "./components/Header";
import { Input } from "./components/Input";


export const App = observer(() => {

  const { wikiStore } = useContext(StoreContext);
  const { inputStore } = useContext(StoreContext);
  const wikipediaSearch = wikiStore.wikiData;

  const {
    fetching,
    isLoading,
    error,
  } = useFetching(async (search) => {
    const result = await GetDataService.getData(search);

    if (result) {
      console.log(result)
      wikiStore.putData(filterResult(result));
    }
    if(error) {
      inputStore.putError(true);
    }
  });

  const filterResult = (arr) => {
    const arrTitles = arr[1];
    const arrLinks = arr[3];
    const filteredResult = [];
    const arrLength = arrTitles.length;
    for (let i = 0; i < arrLength; i++) {
      filteredResult.push({
        id: i,
        title: arrTitles[i],
        link: arrLinks[i]
      })
    }
    return filteredResult;
  };


  // const handleClick = () => {
  //   wikiStore.putData([]);
  //   inputStore.putError(false);
  //   if(inputStore.searchValue) {
  //     fetching(inputStore.searchValue);
  //   } else {
  //     inputStore.putError(true);
  //   }
  // }
console.log(inputStore.error)
  return (
    <div className="App">
      <Header />
      <Input fetching={fetching}/>


{/* <button onClick={handleClick}>Push</button> */}
{inputStore.searchValue}
{wikipediaSearch.map(el => <p key={el.id}>{el.title}</p>)}
<a className="button button-primary" id='randomButton' href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Random!</a> 
    {inputStore.error && TEXT_ERROR}
    
    </div>
  );
})
