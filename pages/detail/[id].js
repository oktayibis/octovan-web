import Layout from "../../components/Layout";
import { getAllPax, getPaxDetails } from "../../lib/api";

function Detail(props) {
  return (
    <Layout>
      <p>{props.character.name}</p>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const response = await getAllPax();
  return {
    paths: response.data.data.map((item) => {
      return {
        params: {
          id: item._id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const response = await getPaxDetails(ctx.params.id);
  return {
    props: {
      character: response.data,
    },
  };
};
export default Detail;
