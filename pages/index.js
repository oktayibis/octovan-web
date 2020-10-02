import Link from "next/link";
import Axios from "axios";
import Layout from "../components/Layout";
import { getPaxPerPage } from "../lib/api";
import { useRouter } from "next/router";
import Card from "../components/Card";
import Nav from "../components/Navigation";
import { TotalPage } from "../styles/TextStyles";

function HomePage(props) {
  const router = useRouter();
  const { query } = router;

  // If page loading initially, we assaign as a page 1
  const pageNo = parseInt(query.page) || 1;

  return (
    <Layout>
      {props.list.map((item) => (
        <Card key={item._id} name={item.name} id={item._id} />
      ))}
      <TotalPage>
        Pages: {pageNo} / {props.totalPage}
      </TotalPage>
      <Nav
        onClickNext={() => {
          router.push(`?page=${pageNo + 1}`);
        }}
        onClickPrev={() => {
          router.push(`?page=${pageNo - 1}`);
        }}
        prevDisabled={pageNo === 1 ? true : false}
      />
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const page = parseInt(ctx.query.page);
  const response = await getPaxPerPage(page);
  return {
    props: {
      list: response.data.data,
      totalPage: response.data.totalPages,
    },
  };
};

export default HomePage;
