import Head from "next/head";
import style from "@/styles/Home.module.css"
import Header from "./composants/Header";
import Contenu from "./composants/Contenu";
import Footer from "./composants/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>NAMBININA Clavien</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
      <Header />
      <br/>
      <br/>
      <Contenu />
      <br/>
      <br/>
      <Footer />
      </main>
    </>
  );
}
