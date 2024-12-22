import { useState, useMemo } from "react";

// useMemo

const UseMemoComponent = () =>{

  const [count, setCount] = useState(0);
  const [items] = useState(generateItems(300));
  
  const selectedItem = useMemo(() => items.find((item) => item.id === count), [count, items,]);

  function generateItems(count) {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        isSelected: i === count - 1,
      });
    }
    return items;
  }

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );


};
export default UseMemoComponent;