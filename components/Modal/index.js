import {
  ModalContainer,
  ModalContent,
  ModalInput,
  ModalVisible,
} from "../../styles/Modal";
import { RowContainer } from "../../styles/LayoutStyles";
import { Button } from "../../styles/ButtonStyles";
function Modal(props) {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalInput type="text" value={props.value} onChange={props.setValue} />
        <RowContainer>
          <Button variant="Primary" onClick={props.handleChange}>
            Değiştir
          </Button>
          <Button onClick={props.setVisible}>İptal</Button>
        </RowContainer>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
