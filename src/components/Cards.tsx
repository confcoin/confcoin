export function SupplyCard() {
  return (
    <div className="rounded-lg border p-4 shadow hover:shadow-md">
      <h3 className="font-bold mb-2">Token Distribution</h3>
      <ul className="text-sm list-inside list-disc">
        <li>Total supply: 1,000,000,000</li>
        <li>Presale: 30%</li>
        <li>Development: 10%</li>
        <li>Exchange listing: 20%</li>
        <li>Rewards: 10%</li>
        <li>Future development: 30%</li>
      </ul>
    </div>
  );
}
