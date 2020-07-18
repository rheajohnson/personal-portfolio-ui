import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

const FadeInUp = styled.div`
  animation: 2s ${keyframes`${fadeInUp}`};
`;

export default FadeInUp;
