import type { NextPage, InferGetStaticPropsType } from "next";
import { projects } from "../public/data/projects";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import Works from "../components/Works";
import { useState } from "react";

export const getStaticProps = async () => {
  return {
    props: {
      projects,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}) => {
  const [isHeroRendered, setHeroRender] = useState(false);
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Richard Kwon | Software Developer</title>
        <meta
          name="description"
          content="A software developer looking to create fun and exciting apps and products. Always willing to learn, especially with others."
        />
        <meta name="author" content="Richard Kwon, hello@richardkwon.com" />
        <meta name="designer" content="Richard Kwon" />
        <meta name="copyright" content="Copyright 2022"></meta>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero setHeroRender={setHeroRender} />
      {isHeroRendered ? (
        <>
          <Works projectData={projects} />
          <About />
          <Footer />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
