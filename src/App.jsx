import React, { useReducer } from "react";
import { AppContext } from "./AppContext";
import ContentFromRoute from "./components/Pages/ContentFromRoute";
import { dataReducer } from "./Reducers/Reducers";

const initialData = {
  isAppLoading: true,
};

function App() {
  const [data, dispatch] = useReducer(dataReducer, initialData);

  return (
    <div className="App">
      <AppContext.Provider value={{ dataState: data, dataDispatch: dispatch }}>
        <ContentFromRoute />
      </AppContext.Provider>
    </div>
  );
}

export default App;
