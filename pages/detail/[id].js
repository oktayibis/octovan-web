import Layout from "../../components/Layout";
import { getPaxDetails } from "../../lib/api";
function Detail(props) {

  return (
    <Layout>

      <p>{props.passanger.name}</p>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const response = await getPaxDetails(ctx.params.id);

  return {
    props: {
      passanger: response.data,
    },
  };
};

export default Detail;
