import { Main, Footer } from "../../styles/LayoutStyles";
import { Title } from "../../styles/TextStyles";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Main>
        <Title>Octavon Web Project</Title>
        {children}
      </Main>
      <Footer>Desinged for Octavan</Footer>
    </React.Fragment>
  );
}
