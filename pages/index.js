
import Head from "next/Head";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className="flex flex-col item-center justify-center ">
      <Head>
        <title >
            AirBnb
        </title>
      </Head>
      <Header/>
      {/* Baner */}
      
    </div>
  );
}
