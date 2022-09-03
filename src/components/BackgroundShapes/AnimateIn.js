import { keyframes } from "styled-components/macro";

const AnimateIn = keyframes`
0%{
    opacity: 1;
    transform: translate(0, 0) scale(1.9) rotate(0deg);
}

100%{
    opacity: 1;
    transform: translate(0, 0) scale(1.9) rotate(360deg);
}
`;

export default AnimateIn;
