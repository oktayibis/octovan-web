import Link from "next/link";

import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <Link href="/detail">
        <a>Hakkında</a>
      </Link>
    </Layout>
  );
}

export default HomePage;
