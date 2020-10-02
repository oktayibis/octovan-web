import styled from "styled-components";
import { Colors } from "../constant";

export const Title = styled.h1`
  color: ${Colors.dark};
  text-align: center;
  padding: 10px;
`;

export const TotalPage = styled.h4`
  color: ${Colors.medium};
  text-align: center;
`;

export const SubTitle = styled.h4`
  color: ${Colors.dark};
  text-align: ${(props) => (props.center ? "center" : null)};
  font-size: ${(props) => (props.fontbig ? "2rem" : null)};
`;

export const Text = styled.p`
  color: ${Colors.medium};
  font-size: 1em;
  font-weight: 600;
  text-align: ${(props) => (props.center ? "center" : null)};
`;

