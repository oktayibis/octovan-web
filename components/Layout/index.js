import Head from "next/head";
import { Main, Footer } from "../../styles/LayoutStyles";
import { Title } from "../../styles/TextStyles";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Octovan Web Project</title>
        <meta name="viewport" content="inital-scale=1.0 width=device-width" />
      </Head>
      <Main>
        <Title>Octavon Web Project</Title>
        {children}
      </Main>
      <Footer>Desinged for Octavan</Footer>
    </React.Fragment>
  );
}
