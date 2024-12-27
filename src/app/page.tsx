import { SupplyCard } from "@/components/Cards";
import { BuyButton } from "@/components/Buttons";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            CONFCOIN
          </h1>
          <p className="text-xl md:text-2xl mb-8 glass p-6 rounded-2xl">
            A decentralized cryptocurrency ensuring transparency, security, and accountability through blockchain.
          </p>
          <BuyButton />
        </div>
      </section>

      <section id="movement" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Join the Movement
            </h2>
            <p className="text-lg md:text-xl text-center">
              By supporting CONFCOIN, you are contributing to a more inclusive and accepting world.
            </p>
          </div>
        </div>
      </section>

      <section id="supply" className="relative py-20 px-4">
        <SupplyCard />
      </section>

      <section id="get-involved" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Get Involved
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Buy CONFCOIN",
                  description: "Purchase through our website or authorized exchanges"
                },
                {
                  title: "Stay Updated",
                  description: "Follow our social media channels for the latest news"
                },
                {
                  title: "Spread the Word",
                  description: "Share CONFCOIN with your network"
                }
              ].map((item) => (
                <div key={item.title} className="glass card-hover rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
