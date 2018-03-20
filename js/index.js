import React from "react";
import { Provider } from "react-redux";

import Navigator from "./navigation/RootSwitch";
import Store from "./redux/store";

const App = () => (
  <Provider store={Store}>
    <Navigator />
  </Provider>
);

export default App;
