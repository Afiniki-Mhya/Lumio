import { useState, ChangeEvent } from "react";

const QuantityDropdown = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <select
      value={quantity}
      onChange={handleQuantityChange}
      className=" w-20 bg-transparent px-4 py-2 outline-none border-b border-gray-500 "
    >
      {quantityOptions.map((num) => (
        <option key={num} value={num} className="py-1">
          {num}
        </option>
      ))}
      
    </select>
    
  );
};

export default QuantityDropdown;
