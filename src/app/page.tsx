import { SupplyCard } from "@/components/Cards";
import { BuyButton } from "@/components/Buttons";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Future of Finance", image: "/crypto1.jpg" },
    { title: "Secure Transactions", image: "/crypto2.jpg" },
    { title: "Global Community", image: "/crypto3.jpg" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="top" className="min-h-screen">
      {/* Hero Section with Slider */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="floating mb-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 rainbow-text">
              CONFCOIN
            </h1>
            <p className="text-2xl md:text-3xl glass-morphism p-8 rounded-3xl">
              A decentralized cryptocurrency ensuring transparency, security, and accountability through blockchain.
            </p>
          </div>
          
          {/* Floating Cards Carousel */}
          <div className="relative h-64 mt-16">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 card-3d glass-morphism rounded-2xl p-6 
                  ${index === currentSlide ? 'opacity-100 transform-none' : 
                    'opacity-0 translate-x-full'}`}
              >
                <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                {/* Add image here if you have them */}
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <BuyButton />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Security First", icon: "🛡️" },
            { title: "Lightning Fast", icon: "⚡" },
            { title: "Global Access", icon: "🌍" },
            { title: "Smart Contracts", icon: "📜" },
            { title: "Low Fees", icon: "💎" },
            { title: "24/7 Trading", icon: "🔄" }
          ].map((feature) => (
            <div key={feature.title} 
                 className="glass-morphism gradient-border rounded-2xl p-6 card-3d">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Supply Section with Enhanced Card */}
      <section id="supply" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-10"></div>
        <SupplyCard />
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-morphism rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center rainbow-text">
              Join Our Ecosystem
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Trade",
                  description: "Buy and sell CONFCOIN on major exchanges",
                  icon: "💱"
                },
                {
                  title: "Stake",
                  description: "Earn rewards by staking your tokens",
                  icon: "🏦"
                },
                {
                  title: "Build",
                  description: "Develop on our platform",
                  icon: "🛠️"
                }
              ].map((item) => (
                <div key={item.title} 
                     className="glass-morphism gradient-border rounded-xl p-8 card-3d text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { value: "100K+", label: "HOLDERS" },
            { value: "$50M+", label: "MARKET CAP" },
            { value: "24/7", label: "SUPPORT" },
            { value: "0.001s", label: "LATENCY" }
          ].map((stat) => (
            <div key={stat.label} 
                 className="glass-morphism rounded-xl p-6 text-center floating">
              <div className="text-3xl font-bold rainbow-text">{stat.value}</div>
              <div className="text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
