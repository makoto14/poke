import { css } from "@emotion/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import Adventure from "./pages/adventure";
import Bag from "./pages/bag";
import Battle from "./pages/battle";
import First from "./pages/first";
import Library from "./pages/library";
import Start from "./pages/start";
import { store } from "./store/store";
import { fetcher } from "./utils/fetcher";

const App: React.FC = () => {
  return (
    <div
      css={css`
        background-color: #eaeef3;
        padding: 78px 16px 16px 16px;
        min-height: 100vh;
      `}
    >
      <Provider store={store}>
        <SWRConfig value={{ fetcher: fetcher }}>
          <BrowserRouter>
            <Routes>
              <Route path={`/start`} element={<Start />} />
              <Route path={`/first`} element={<First />} />
              <Route path={`/adventure`} element={<Adventure />} />
              <Route path={`/bag`} element={<Bag />} />
              <Route path={`/battle/:id`} element={<Battle />} />
              <Route path={`/library`} element={<Library />} />
            </Routes>
          </BrowserRouter>
        </SWRConfig>
      </Provider>
    </div>
  );
};
export default App;
