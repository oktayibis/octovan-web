import styled from "styled-components";
import { Colors } from "../constant";

export const Main = styled.div`
  max-width: 960px;
  margin: 3% auto;
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

export const NavContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 6vw;
  object-fit: contain;
`;

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: auto auto;
  grid-gap: 6%;
  align-items: center;
  margin: 1%;
`;
