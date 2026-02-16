import { act } from 'react';
import { useEffect, useState } from 'react';
// import "./styles.css";

export default function FetchData() {
  const [isLoading, setIsLoading] = useState(false);
  // const [imageUrl, setImageUrl] = useState(null);

  const [listImages, setListImages] = useState([]);

  // const  urlRandomDogImages = 'https://dog.ceo/api/breeds/image/random'
  // const urlRandomImages =  'https://picsum.photos/200/300'

  const [actualPage, setActualPage] = useState(1);

  const fetchImagesFromUrl = (pageNumber, limit) => {
    setIsLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((list) => {
        setIsLoading(false);
        setListImages([...list]);
      });
  };

  useEffect(() => {
    fetchImagesFromUrl(actualPage, 100);
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            const prevPage = actualPage - 1;
            setActualPage(prevPage);
            fetchImagesFromUrl(prevPage, 100);
          }}
          disabled={actualPage === 1}
        >
          Anterior Pagina
        </button>
        <button
          onClick={() => {
            const nextPage = actualPage + 1;
            setActualPage(nextPage);
            fetchImagesFromUrl(nextPage, 100);
          }}
        >
          Siguiente Pagina
        </button>
      </div>

      {isLoading ? (
        <>Cargando...</>
      ) : (
        <>
          <div>Pagina {actualPage}</div>
          <ol>
            {listImages.map((el, i) => {
              return (
                <li key={i}>
                  {el.id} {el.author} {el.width} {el.height}
                  {
                    <img
                      src={el.download_url}
                      alt=''
                      style={{ height: '50px' }}
                    />
                  }
                </li>
              );
            })}
          </ol>
        </>
      )}
      {/* {isLoading ? 
        <></>:
        <div className='App'>
          <img src={'https://picsum.photos/id/103/2592/1936'} alt=''/>
        </div>
      } */}
    </>
  );
}
