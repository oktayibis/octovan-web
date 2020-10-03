import styled from "styled-components";
import { Colors } from "../constant";

export const Button = styled.div`
  display: ${(props) => (props.disabled ? "none" : null)};
  background-color: ${(props) =>
    props.variant === "Primary" ? Colors.primary : Colors.medium};
  color: ${Colors.lightText};
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border-color: ${Colors.secondary};
  max-width: 100px;
  text-align: center;
  letter-spacing: 4px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.variant === "Primary" ? "#ff9a3c" : Colors.dark};
  }
`;
export const EditButton = styled.button`
  padding: 5px;
  margin-left: 10px;
  background-color: ${Colors.medium};
  border: none;
  color: white;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.dark};
  }
`;
