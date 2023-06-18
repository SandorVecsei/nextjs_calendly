import Head from 'next/head';
import dynamic from 'next/dynamic';

const Calendly = dynamic(() => import('../components/calendly'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Homepage</title>
      </Head>
      <Calendly />
    </div>
  );
}
