import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Past Projects</title>
        <meta name="description" content="Matthew Holandez" />
        <link href='favicon.ico' rel='icon' type='image/x-icon' />
      </Head>
      <main className="font-thew">
        <div className="flex min-h-screen flex-col items-center justify-center gap-5">
          <h4 className="text-2xl">past projects</h4>
          <p className="px-3 text-center">This page is under construction; in the meantime, please check out my <a className="text-cyan-600" href="https://github.com/matthewholandez">GitHub</a></p>
          <Link href="/" className="inline-block px-4 py-2 bg-white border border-black text-black rounded-sm">back</Link>
        </div>
      </main>
    </>
  );
}