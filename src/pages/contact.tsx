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
      <main className="flex min-h-screen flex-col items-center justify-center font-thew">
        <h4 className="text-2xl">contact me</h4>
        <br/>
        <a className="text-cyan-600" href="mailto:me@matthewholandez.com">me at matthewholandez dot com</a> 
        <p>Toronto, ON</p>
        <br/><br/>
        <Link href="/" className="inline-block px-4 py-2 bg-white border border-black text-black rounded-sm">back</Link>
      </main>
    </>
  );
}
