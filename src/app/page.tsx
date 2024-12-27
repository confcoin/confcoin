import Image from "next/image";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center text-center p-8 gap-4">
        <h1 className="text-3xl font-bold">CONFCOIN</h1>
        <p className="max-w-xl">
          CONFCOIN is a decentralized cryptocurrency, ensuring transparency, security,
          and accountability through blockchain.
        </p>
        {/* ...possibly a button or image... */}
      </section>

      {/* Movement Section */}
      <section id="movement" className="p-8 bg-gray-100 dark:bg-[#222] text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the Movement</h2>
        <p className="max-w-xl mx-auto">
          By supporting CONFCOIN, you are contributing to a more inclusive and accepting world.
        </p>
      </section>

      {/* Supply Section */}
      <section id="supply" className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Supply Information</h2>
        {/* ...maybe import SupplyCard here... */}
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="p-8 bg-gray-100 dark:bg-[#222] text-center">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <ul className="list-disc list-inside max-w-xl mx-auto text-left">
          <li>Buy CONFCOIN on our website or authorized exchanges.</li>
          <li>Follow us on social media to stay updated.</li>
          <li>Share CONFCOIN with friends & family.</li>
        </ul>
      </section>
    </div>
  );
}
