import React from "react";
import styled, { keyframes, css } from "styled-components/macro";
import { COLORS } from "../utils/styling";

export const SlideOut = keyframes`
    0%{
    transform: translate(70%,0) rotate(0deg)
    }
    20%{
        transform: translate(80%,0) matrix(1.00,0.00,0.050,1.00,0,0);
    }
    100%{
        transform:translate(97%,0)  matrix(1.00,0.00,0.00,1.00,0,0);
    }
`;

export const SlideIn = keyframes`
    0%{
        transform: translate(100%,0)  matrix(1.00,0.00,0.00,1.00,0,0);
    }
    20%{
        transform: translate(90%,0) matrix(1.00,0.00,0.050,1.00,0,0);
    }
    100%{
        transform: translate(70%,0)
    }
`;

export const SlideFull = keyframes`
0%{
    transform: translate(92%,0)  matrix(1.00,0.00,0.00,1.00,0,0);
}
70%{
    transform: matrix(1.00,0.00,0.050,1.00,0,0);
}
100%{
    background-color: #3A3A43;
    transform: translate(0,0) matrix(1.00,0.00,0.00,1.00,0,0)
}
`;

export const Block = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.deepBlue};
  position: fixed;
  top: 0;
  right: 0;
  display: ${(props) =>
    props.postionAnim === "full" ? css`block;` : css`none;`};
  animation: ${(props) =>
    props.positionAnim === "side"
      ? css` none;`
      : props.positionAnim === "full"
      ? css`
          ${SlideFull} 1.2s forwards ease-out
        `
      : css`
          ${SlideIn} .8s forwards ease-out
        `};

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    display: block;
    animation: ${(props) =>
      props.positionAnim === "side"
        ? css`
            ${SlideOut} .8s forwards ease-out
          `
        : props.positionAnim === "full"
        ? css`
            ${SlideFull} 1.2s forwards ease-out
          `
        : css`
            ${SlideIn} .8s forwards ease-out
          `};
  }
`;

export const ScrollCont = styled.div`
  transform: rotate(90deg);
  position: absolute;
  left: 15%;
  bottom: 250px;
  height: 30px;
  color: white;
  transition: opacity 0.5s 0.3s;
  p {
    display: inline-block;
    padding: 0;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    display: block;
  }
`;

export const Line = styled.div`
  width: 150px;
  height: 1px;
  background-color: white;
  display: inline-block;
  margin: 0 30px 3px 0;
`;

export default class RightBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "half",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (window.pageYOffset >= 500 && windowBottom + 100 < docHeight) {
      this.setState({
        position: "side",
      });
    } else if (windowBottom + 100 >= docHeight) {
      this.setState({
        position: "full",
      });
    } else {
      this.setState({
        position: "half",
      });
    }
  }

  render() {
    const { position } = this.state;
    return (
      <Block positionAnim={position}>
        <ScrollCont
          style={
            position === "side" || position === "full"
              ? {
                  transition: "opacity  .3s",
                  opacity: "0",
                }
              : { opacity: "1" }
          }
        >
          <Line />
          <p>Scroll Down</p>
        </ScrollCont>
      </Block>
    );
  }
}
