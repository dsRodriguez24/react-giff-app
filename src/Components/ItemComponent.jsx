import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifComponent } from "./GifComponent";


export const ItemComponent = ({ category }) => {
    
    const [images, setimages] = useState([]);

    const newImages = async () => {
        const newImages = await getGifs(category);
        setimages(newImages);
    };

    useEffect(() => {
        newImages();
        // getGifs(category); // PARA QUE SE PINTE SOLO LA PRIMERA VEZ
    }, [])
    


  return (
    <div>
      <h3>{category}</h3>
      <p>Resultados para la busqueda {category} ...</p>
      <div className="col-md-12 row">
        {images.map(({id, url, title}) => (
          <GifComponent 
            id={id}
            url={url}
            title={title} />
        ))}
      </div>
    </div>
  );
};