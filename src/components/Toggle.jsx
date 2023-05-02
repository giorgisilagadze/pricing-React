import { useState } from "react";
import {
  Title,
  Container,
  Annually,
  Month,
  ToggleDiv,
  Circle,
} from "../styled-components/Toggle.Styled";

export default function Toggle() {
  const [isMonth, setIsMonth] = useState(true);

  return (
    <>
      <Title>Our Pricing</Title>
      <Container>
        <Annually opc={isMonth ? ".5" : "1"}>Annually</Annually>
        <ToggleDiv onClick={() => setIsMonth(!isMonth)}>
          <Circle mLeft={isMonth ? "23px" : null} />
        </ToggleDiv>
        <Month opc={isMonth ? "1" : ".5"}>Monthly</Month>
      </Container>
    </>
  );
}
