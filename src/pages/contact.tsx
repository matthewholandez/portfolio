import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Matthew Holandez" />
        <link href='favicon.ico' rel='icon' type='image/x-icon' />
      </Head>
      <main className="font-thew">
        <div className="flex min-h-screen flex-col items-center justify-center gap-5">
          <h4 className="text-2xl">contact me</h4>
          <div className="flex flex-col items-center justify-center">
            <a className="text-cyan-600" href="mailto:me@matthewholandez.com">me at matthewholandez dot com</a> 
            <p>Toronto, ON</p>
          </div>
          <Link href="/" className="inline-block px-4 py-2 bg-white border border-black text-black rounded-sm">back</Link>
        </div>
      </main>
    </>
  );
}
