
import { memo, useState, useCallback } from "react";
const allColors = ['red', 'green', 'blue', 'yellow', 'orange', 'black', 'white'];

const shuffle = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Filter = memo(({ onChange }) => {
  console.log('Filter rendered!');
  return (
    <input
      type='text'
      placeholder='Filter colors...'
      onChange={(e) => onChange(e.target.value)}
    />
  );
});

const UseCallbackComponent = () =>{  
  const [colors, setColors] = useState(allColors);
  console.log(colors[0])

  const handleFilter = useCallback((text) => {
    const filteredColors = allColors.filter((color) =>
      color.includes(text.toLowerCase())
    );
    setColors(filteredColors);
  }, [colors]);


  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        <button onClick={() => setColors(shuffle(allColors))}>
          Shuffle
        </button>
        <Filter onChange={handleFilter} />
      </div>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseCallbackComponent;