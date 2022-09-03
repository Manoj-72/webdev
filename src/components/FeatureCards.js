import styled from "styled-components/macro";
import { Container } from "./Layout";
import { FlexLeft, FlexRight, FlexCenter, ImageDiv } from "./FlexSplit";
import { SubHeading, Paragraph } from "../utils/styling";

export const TriContainer = styled(Container)`
  width: 100%;
  height: auto;
  margin: 0 auto;
  justify-content: space-between;
  align-items: unset;
  padding: 0;
  ${FlexLeft}, ${FlexCenter}, ${FlexRight} {
    width: 100%;
    margin: 0;
    @media ${(props) => props.theme.mediaQueries.medium} {
      width: 30%;
    }
  }
  img {
    width: 300px;
    margin: 20px auto;
    @media ${(props) => props.theme.mediaQueries.medium} {
      width: 80%;
    }
  }
  ${FlexRight} {
    width: 20%;
    padding: 0;
  }
  ${FlexLeft} {
    transform: none;
    @media ${(props) => props.theme.mediaQueries.medium} {
      transform: translate(0, -180px);
    }
  }
  div {
    padding: 20px 0;
    text-align: center;
    ${SubHeading} {
      font-size: 30px;
      font-weight: normal;
      text-transform: none;
    }

    @media ${(props) => props.theme.mediaQueries.medium} {
      padding: 20px;
    }
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 65%;
    margin: 60px auto 0 auto;
    padding: 0;
  }
`;

const FeatureCards = (props) => {
  return (
    <TriContainer>
      <FlexLeft>
        <ImageDiv>
          <SubHeading>{props.h1}</SubHeading>
          <Paragraph>{props.p1}</Paragraph>
          <img
            alt={props.src1}
            src={require(`../images/landing/${props.src1.toLowerCase()}.jpg`)}
          />
        </ImageDiv>
      </FlexLeft>
      <FlexCenter>
        <ImageDiv>
          <SubHeading>{props.h2}</SubHeading>
          <Paragraph>{props.p2}</Paragraph>
          <img
            alt={props.src2}
            src={require(`../images/landing/${props.src2.toLowerCase()}.jpg`)}
          />
        </ImageDiv>
      </FlexCenter>
      <FlexRight />
    </TriContainer>
  );
};

export default FeatureCards;
