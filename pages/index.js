import Link from "next/link";
import Axios from "axios";
import Layout from "../components/Layout";
import { getPaxPerPage } from "../lib/api";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../components/Card";

function HomePage(props) {
  const [pageNo, setPageNo] = React.useState(0);
  const router = useRouter();

  useEffect(() => {
    const { pathname, query } = router;
    console.log("path", pathname);
    console.log("query,", query);
    console.log("page", pageNo);
  }, [pageNo]);

  return (
    <Layout>
      <button onClick={() => setPageNo(pageNo + 1)}>+</button>
      {props.list ? (
        props.list.map((item) => <Card name={item.name} id={item._id} />)
      ) : (
        <h2>Loading</h2>
      )}
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  console.log("contex", ctx);
  const response = await getPaxPerPage(0);

  return {
    props: {
      list: response.data.data,
      totalPage: response.data.totalPages,
    },
  };
};

export default HomePage;
