import Link from "next/link";
import { CardContainer, CardText, CardLabel } from "../../styles/CardStyles";

function Card(props) {
  return (
    <Link href="/detail/[id]" as={`/detail/${props.id}`}>
      <CardContainer>
        <CardLabel>Pax Name:</CardLabel>
        <CardText>{props.name}</CardText>
      </CardContainer>
    </Link>
  );
}

export default Card;
