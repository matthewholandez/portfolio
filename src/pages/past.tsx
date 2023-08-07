import Head from "next/head";
import Link from "next/link"

export default function Past() {
  return (
    <>
      <Head>
        <title>Past Projects</title>
        <meta name="description" content="Matthew Holandez" />
        <link href='favicon.ico' rel='icon' type='image/x-icon' />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center font-thew">
        <h4 className="text-2xl">past projects</h4>
        <br/>
        <p>This page will be completed in due time. For now, check out my <a className="text-cyan-600"href="https://github.com/matthewholandez" target="_blank">GitHub</a></p>
        <br/>
        <Link href="/" className="inline-block px-4 py-2 bg-white border border-black text-black rounded-sm">back</Link>

      </main>
    </>
  );
}
