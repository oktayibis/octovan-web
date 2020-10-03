import styled from "styled-components";
import { Colors } from "../constant";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 80%;
  padding: 1%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  height: 6vh;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.lightText};
    border: 1px solid;
    border-color: ${Colors.medium};
  }
`;

export const CardText = styled.h3`
  color: ${Colors.dark};
  margin-left: 5%;
  font-size: 1rem;
`;

export const CardLabel = styled.span`
  color: ${Colors.medium};
`;
