import React from 'react';

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  ingredients?: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, ingredients }) => {
  return (
    <div className="my-3 text-left">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="font-oswald text-lg text-[#F6F2E6] uppercase tracking-wide">{name}</h3>
        <div className="flex-grow border-b-2 border-dotted border-gray-500 mx-2"></div>
        <p className="font-oswald text-lg text-[#FFD756]">${price}</p>
      </div>
      {ingredients && (
        <p className="font-georgia text-sm text-gray-400 italic mt-1">
          {ingredients.join(', ')}
        </p>
      )}
      {description && (
        <p className="font-georgia text-sm text-gray-300 mt-1">{description}</p>
      )}
    </div>
  );
};

export default MenuItem;