import React from "react";
import { Nav } from "./components";
import { Main } from "./pages";

function App() {
  return (
    <>
      <Nav />
      {/* 페이지별 라우팅 */}
      <Main />
    </>
  );
}

export default App;
