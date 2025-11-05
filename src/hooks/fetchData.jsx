import { useEffect, useState } from 'react';
// import "./styles.css";

export default function FetchData() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  }, []);

  
  // if (isLoading) {
  //   return (
  //     <div className='App'>
  //       <h1>Cargando...</h1>
  //     </div>
  //   );
  // }

  return (
    <>
      {imageUrl ? (
        <div className='App'>
          <img src={imageUrl} alt='Imagen de perrito aleatoria' />
        </div>
      ) : (
        <>Cargando...</>
      )}
    </>
  );
}
