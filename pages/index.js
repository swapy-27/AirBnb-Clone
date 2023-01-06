import Head from "next/Head";
import Baner from "../components/Baner";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className="flex flex-col item-center justify-center  ">
      <Head>
        <title>AirBnb</title>
      </Head>
      <Header />
      <Baner />
      <Footer />
    </div>
  );
}
