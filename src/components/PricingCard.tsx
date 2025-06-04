import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div 
      className={`
        flex flex-col p-6 rounded-lg shadow-md 
        transition-shadow duration-300
        hover:shadow-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500
        sm:max-w-xs w-full
        ${isFeatured ? 'border-2 border-blue-500' : 'border border-gray-200'}
      `}
      tabIndex={0}
    >
      {/* Plan Type */}
      <h3 className="text-xl font-bold text-gray-900">{plan}</h3>
      
      {/* Price */}
      <p className="mt-2 text-3xl font-extrabold text-gray-900">{price}</p>
      
      {/* Divider */}
      <hr className="my-4 border-gray-200" />
      
      {/* Features List */}
      <ul className="mt-2 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Divider */}
      <hr className="my-4 border-gray-200" />
      
      {/* Subscribe Button */}
      <button
        className={`
          mt-4 w-full py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          ${isFeatured 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
        `}
      >
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
