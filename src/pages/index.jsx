import Head from "next/head";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";
import { PhotoHome } from "../modules/PhotoHome/PhotoHome";
import { Program } from "../modules/Program/Program";
import { Sidebar } from "../modules/Sidebar/Sidebar";
import { Main } from "../modules/Main/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gastro Shef</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="circle">
        <Header />
        <div style={{ height: "1000px" }}>
          <Sidebar />
        </div>
        <Program />
        <PhotoHome />
        <Main />
        <Footer />
      </div>
    </>
  );
}
