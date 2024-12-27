/* ...existing code... */
export function BuyButton() {
  return (
    <button className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white rounded-full group bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300">
      <span className="absolute left-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700"></span>
      <span className="relative">Buy CONFCOIN</span>
    </button>
  );
}
