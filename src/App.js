import { useEffect, useState } from "react";

import { useFetching } from "./hooks/useFetching";
import { GetDataService } from "./api/GetDataService";
import wikiStore from "./store/WikiStore";
import inputStore from "./store/InputStore";
import { observer } from "mobx-react-lite";
import { limit } from "./config/constants";

export const App = observer(() => {

  const {
    fetching,
    isLoading,
    error,
  } = useFetching(async (search) => {
    const result = await GetDataService.getData(search);

    if (result) {
      console.log(result)
      wikiStore.setData(filterResult(result));
    }
  });

  const filterResult = (arr) => {
    const arrTitles = arr[1];
    const arrLinks = arr[3];
    const filteredResult = [];
    for (let i = 0; i < limit; i++) {
      filteredResult.push({
        id: i,
        title: arrTitles[i],
        link: arrLinks[i]
      })
    }
    return filteredResult;
  };


  const handleClick = () => {
    fetching(inputStore.searchValue);
  }

  return (
    <div className="App">
      ABC

<button onClick={handleClick}>Push</button>
<input onChange={(e) => inputStore.setSearchValue(e)}></input>
{inputStore.searchValue}
{wikiStore.wikiData.map(el => <p key={el.id}>{el.title}</p>)}
<a className="button button-primary" id='randomButton' href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Random!</a> 
    </div>
  );
})
