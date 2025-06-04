import React from 'react';
import './App.css';
import PricingCard from './components/PricingCard';

function App() {
  // Sample pricing plan data
  const pricingPlans = [
    {
      plan: "Basic",
      price: "$9.99/mo",
      features: [
        "Up to 5 users",
        "10GB storage",
        "Basic support",
        "Email notifications"
      ],
      isFeatured: false
    },
    {
      plan: "Pro",
      price: "$19.99/mo",
      features: [
        "Up to 20 users",
        "50GB storage",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      isFeatured: true
    },
    {
      plan: "Enterprise",
      price: "$49.99/mo",
      features: [
        "Unlimited users",
        "500GB storage",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager"
      ],
      isFeatured: false
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold mb-8">Pricing Plans</h1>
        <div className="flex !flex-row sm:flex-row gap-6 justify-center items-center sm:items-stretch max-w-6xl mx-auto px-4">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              isFeatured={plan.isFeatured}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
