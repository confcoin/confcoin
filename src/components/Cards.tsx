export function SupplyCard() {
  return (
    <div className="glass card-hover rounded-2xl p-6 max-w-md mx-auto">
      <div className="animated-gradient mb-4 h-2 rounded-full"></div>
      <h3 className="font-bold text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Token Distribution
      </h3>
      <div className="space-y-4">
        {[
          { label: "Total supply", value: "1,000,000,000", percent: "100" },
          { label: "Presale", value: "300,000,000", percent: "30" },
          { label: "Development", value: "100,000,000", percent: "10" },
          { label: "Exchange listing", value: "200,000,000", percent: "20" },
          { label: "Rewards", value: "100,000,000", percent: "10" },
          { label: "Future development", value: "300,000,000", percent: "30" },
        ].map((item) => (
          <div key={item.label} className="relative">
            <div className="flex justify-between text-sm mb-1">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div 
                className="h-full rounded-full animated-gradient"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
