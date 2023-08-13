import Head from "next/head";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matthew Holandez</title>
        <meta name="description" content="High school student, aspiring software engineer" />
        <meta name="author" content="Matthew Holandez" />
        <meta property="og:title" content="Matthew Holandez" />
        <meta property="og:description" content="High school student, aspiring software engineer" />
        <meta property="og:url" content="https://matthewholandez.com/" />
        <meta property="og:type" content="website" />
        <link href='favicon.ico' rel='icon' type='image/x-icon' />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center font-thew">
        <h1 className="text-3xl lg:text-4xl text-black font-light italic pb-2">
          Matthew Holandez
        </h1>
        <div className="flex gap-5 text-sm md:text-lg text-black font-medium pb-2">
          <Link className="text-cyan-600" href="/contact">contact</Link> 
          <Link className="text-cyan-600" href="/past">past projects</Link> 
        </div>
        <div className="flex gap-5 text-2xl">
          <a target="_blank" href="https://github.com/matthewholandez">
            <AiFillGithub /> 
          </a>
          <a target="_blank" href="https://linkedin.com/in/matthewholandez/">
            <AiFillLinkedin />
          </a>
        </div>
      </main>
    </>
  );
}
