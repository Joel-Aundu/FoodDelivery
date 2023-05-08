import React from 'react';

function FoodFilter({ data, setFoods, filterType }) {
    function handleAllButtonClick() {
        setFoods([...data]); 
      }
  return (
    <div>
      <p className='font-bold text-gray-700'>Filter Type</p>
      <div className='flex justfiy-between flex-wrap'>
        <button
          onClick={() => handleAllButtonClick}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          All
        </button>
        <button
          onClick={() => filterType('burger')}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          Burgers
        </button>
        <button
          onClick={() => filterType('pizza')}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          Pizza
        </button>
        <button
          onClick={() => filterType('salad')}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          Salads
        </button>
        <button
          onClick={() => filterType('chicken')}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          Chicken
        </button>
      </div>
    </div>
  );
}

export default FoodFilter;
