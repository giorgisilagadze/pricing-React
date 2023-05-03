import { GlobalStyled } from "./styled-components/Global.Styled.js";
import Toggle from "./components/Toggle.jsx";
import Offer from "./components/Offer.jsx";
import { useState } from "react";

function App() {
  const [isMonth, setIsMonth] = useState(true);

  return (
    <>
      <GlobalStyled />
      <Toggle isMonth={isMonth} setIsMonth={setIsMonth} />
      <Offer isMonth={isMonth} />
    </>
  );
}

export default App;
