import {
  MainDiv,
  OfferDiv,
  OfferTitle,
  PriceDiv,
  Dollar,
  Price,
  Hr,
  Prop,
  Butt,
} from "../styled-components/Offer.Styled";

const content = [
  {
    title: "Basic",
    gb: "500 GB Storage",
    user: "2 Users Allowed",
    limit: "Send up to 3 GB",
    butt: "LEARN MORE",
  },
  {
    title: "Professional",
    gb: "1 TB Storage",
    user: "5 Users Allowed",
    limit: "Send up to 10 GB",
    butt: "LEARN MORE",
  },
  {
    title: "Master",
    gb: "2 TB Storage",
    user: "10 Users Allowed",
    limit: "Send up to 20 GB",
    butt: "LEARN MORE",
  },
];

export default function Offer({ isMonth }) {
  return (
    <MainDiv>
      {content.map((item, index) => {
        const middle = index === 1;
        const first = index === 0;
        const third = index === 2;

        const backgroundColor = middle
          ? "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
          : "#FFFFFF";

        const text = middle ? "#FFFFFF" : "#6E728E";
        const buttonBackground = middle
          ? "#FFFFFF"
          : "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)";
        const buttonText = middle ? "#6D72DE" : "#FFFFFF";

        return (
          <OfferDiv
            key={Math.random()}
            bg={backgroundColor}
            pad={middle ? "54.5px" : "31px"}
          >
            <OfferTitle cl={text}>{item.title}</OfferTitle>
            <PriceDiv>
              <Dollar cl={text}>$</Dollar>
              <Price cl={text}>
                {first ? (isMonth ? "19.99" : "199.99") : null}
                {middle ? (isMonth ? "24.99" : "249.99") : null}
                {third ? (isMonth ? "39.99" : "399.99") : null}
              </Price>
            </PriceDiv>
            <Hr bg={text} />
            <Prop cl={text}>{item.gb}</Prop>
            <Hr bg={text} />
            <Prop cl={text}>{item.user}</Prop>
            <Hr bg={text} />
            <Prop cl={text}>{item.limit}</Prop>
            <Hr bg={text} />
            <Butt
              bg={buttonBackground}
              cl={buttonText}
              border={middle ? "#FFFFFF" : "#6D72DE"}
              clHover={middle ? "#FFFFFF" : "#6D72DE"}
            >
              {item.butt}
            </Butt>
          </OfferDiv>
        );
      })}
    </MainDiv>
  );
}
