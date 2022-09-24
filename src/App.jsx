import React, { useReducer } from "react";
import ContentFromRoute from "./components/Base/ContentFromRoute";
import { AppContext } from "./AppContext";
import { dataReducer } from "./Reducers/Reducers";

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
