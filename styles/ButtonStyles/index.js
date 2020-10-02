import styled from "styled-components";
import { Colors } from "../constant";

export const Button = styled.div`
  display: ${(props) => (props.disabled ? "none" : null)};
  background-color: ${Colors.medium};
  color: wheat;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border-color: ${Colors.light};
  max-width: 100px;
  text-align: center;
  letter-spacing: 4px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.dark};
  }
`;
