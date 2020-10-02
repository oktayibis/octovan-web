import { NavContainer } from "../../styles/LayoutStyles";
import { Button } from "../../styles/ButtonStyles";

function Nav(props) {
  return (
    <NavContainer>
      <Button onClick={props.onClickPrev} disabled={props.prevDisabled}>
        Prev
      </Button>
      <Button
        onClick={props.onClickNext}
        variant="Primary"
        disabled={props.nextDisabled}
      >
        Next
      </Button>
    </NavContainer>
  );
}

export default Nav;
