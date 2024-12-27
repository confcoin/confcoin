import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            CONFCOIN
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['Home', 'Movement', 'Supply', 'Get Involved'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
