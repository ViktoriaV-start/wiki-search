import { useContext } from "react";

import { useFetching } from "./hooks/useFetching";
import { GetDataService } from "./api/GetDataService";
import { observer } from "mobx-react-lite";
import { StoreContext } from "./context/StoreContext";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Content } from "./components/Content";
import { Information } from "./components/Information";


export const App = observer(() => {

  const { wikiStore } = useContext(StoreContext);
  const { inputStore } = useContext(StoreContext);

  const {
    fetching,
    isLoading,
    error,
  } = useFetching(async (search) => {
    const result = await GetDataService.getData(search);

    if (result) {
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

  return (
    <div className="App">
      <Header />
      <Form fetching={fetching}/>
      <div className="container content">
        <Content />
      </div>
      <Information isLoading={isLoading} />   
    </div>
  );
})
