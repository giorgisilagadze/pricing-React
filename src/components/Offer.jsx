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

export default function Offer({ isMonth, setIsMonth }) {
  return (
    <MainDiv>
      {content.map((item, index) => {
        return (
          <OfferDiv
            key={Math.random()}
            bg={
              index === 1
                ? "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
                : "#FFFFFF"
            }
            pad={index === 1 ? "54.5px" : "31px"}
          >
            <OfferTitle cl={index === 1 ? "#FFFFFF" : "#6E728E"}>
              {item.title}
            </OfferTitle>
            <PriceDiv>
              <Dollar cl={index === 1 ? "#FFFFFF" : "#6E728E"}>$</Dollar>
              <Price cl={index === 1 ? "#FFFFFF" : "#6E728E"}>
                {index === 0 ? (isMonth ? "19.99" : "199.99") : null}
                {index === 1 ? (isMonth ? "24.99" : "249.99") : null}
                {index === 2 ? (isMonth ? "39.99" : "399.99") : null}
              </Price>
            </PriceDiv>
            <Hr bg={index === 1 ? "#FFFFFF" : "#6E728E"} />
            <Prop cl={index === 1 ? "#FFFFFF" : "#6E728E"}>{item.gb}</Prop>
            <Hr bg={index === 1 ? "#FFFFFF" : "#6E728E"} />
            <Prop cl={index === 1 ? "#FFFFFF" : "#6E728E"}>{item.user}</Prop>
            <Hr bg={index === 1 ? "#FFFFFF" : "#6E728E"} />
            <Prop cl={index === 1 ? "#FFFFFF" : "#6E728E"}>{item.limit}</Prop>
            <Hr bg={index === 1 ? "#FFFFFF" : "#6E728E"} />
            <Butt
              bg={
                index !== 1
                  ? "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
                  : "#FFFFFF"
              }
              cl={index === 1 ? "#6D72DE" : "#FFFFFF"}
              border={index === 1 ? "#FFFFFF" : "#6D72DE"}
              clHover={index === 1 ? "#FFFFFF" : "#6D72DE"}
            >
              {item.butt}
            </Butt>
          </OfferDiv>
        );
      })}
    </MainDiv>
  );
}
