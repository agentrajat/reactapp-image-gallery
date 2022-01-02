import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import SearchImage from "./components/SearchImage";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo&per_page=6&pretty=true`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, [searchText]);

  return (
    <div className="container mx-auto sm:px-24 px-12">
      <div className="lg:flex lg:items-center lg:justify-between sm:flex sm:items-center sm:justify-center align-middle pb-10 mx-auto">
          <h2 className="text-2xl font-bold leading-7 text-teal-900 sm:text-3xl sm:truncate">Image Gallery App</h2>
          <SearchImage setSearchText={setSearchText} />
      </div>
      {!isLoading && images.length == 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="flex flex-wrap gap-4 mx-auto justify-center">
        {images.map(image => (
          <ImageCard className="lex-auto" key={image.id} image={image} />
        ))}
      </div>}
    </div>
  )
}