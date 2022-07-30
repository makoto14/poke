import { css } from "@emotion/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import Main from "./pages/Main";
import Page from "./pages/Page";
import { store } from "./store/store";
import { fetcher } from "./utils/fetcher";

const App: React.FC = () => {
  return (
    <div
      css={css`
        background-color: #eaeef3;
        padding: 78px 16px 16px 16px;
        min-height: 100%;
      `}
    >
      <Provider store={store}>
        <SWRConfig value={{ fetcher: fetcher }}>
          <BrowserRouter>
            <Routes>
              <Route path={`/main`} element={<Main />} />
              <Route path={`/page`} element={<Page />} />
            </Routes>
          </BrowserRouter>
        </SWRConfig>
      </Provider>
    </div>
  );
};
export default App;
