import styled from "styled-components";
import { Colors } from "../constant";

export const Title = styled.h1`
  color: ${Colors.dark};
  text-align: center;
  padding: 0.8rem;
  font-size: 3vw;
`;

export const TotalPage = styled.h4`
  color: ${Colors.medium};
  text-align: center;
`;

export const SubTitle = styled.h4`
  color: ${Colors.dark};
  text-align: ${(props) => (props.center ? "center" : null)};
  font-size: ${(props) => (props.fontbig ? "3.3vw" : "2vw")};
`;

export const Text = styled.p`
  color: ${Colors.medium};
  font-size: 2.2vw;
  font-weight: 600;
  text-align: ${(props) => (props.center ? "center" : null)};
`;

