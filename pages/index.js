import dynamic from 'next/dynamic';

const Calendly = dynamic(() => import('../components/calendly'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="home">
      <Calendly />
    </div>
  );
}
