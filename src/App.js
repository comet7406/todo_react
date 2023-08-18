import { Reset } from "styled-reset";
import MainLayout from "./components/MainLayout/MainLayout";
import { Global } from "@emotion/react";
import * as S from "./styles/commons";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <MainLayout>
        <Routes>
          <Route path= "/today" />
          <Route path= "/upcoming" />
          <Route path= "/calendar" />
          <Route path= "/stickywall" />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
