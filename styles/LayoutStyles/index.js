import styled from "styled-components";
import { Colors } from "../constant";

export const Main = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background-color: ${Colors.light};
  padding: 1%;
  border-radius: 10px;
`;

export const Footer = styled.footer`
  text-align: center;
  margin: 0 auto;
  background-color: ${Colors.medium};
  padding: 1%;
  max-width: 960px;
  margin-top: 1em;
  border-radius: 10px;
  color: ${Colors.lightText};
`;
