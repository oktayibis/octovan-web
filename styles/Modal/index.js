import styled from "styled-components";
import { Colors } from "../constant";
export const ModalVisible = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  box-shadow: 6px -2px 18px 2px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  border-radius: 10px;
  width: 20em;
  height: 15em;
  top: 10vw;
  left: 30%;
`;

export const ModalContent = styled.div`
  padding: 2em;
  align-items: center;
  justify-content: center;
`;

export const ModalInput = styled.input`
  margin: 10px auto;
  padding: 10px;
  width: 90%;
  border: 1px solid;
  border-color: ${Colors.light};
  &:focus {
    background-color: ${Colors.light};
  }
`;
