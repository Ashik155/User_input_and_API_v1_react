import React  from "react";
import "./imagelist.css"
import ImageCard from "./ImageCard";

const ImageList = (props) =>{

  const finalDiv =  props.images.map((image)=>{
        return <ImageCard image={image} key={image.id}/>
    })

    return (
        <div className='image-list'>{finalDiv}</div>
        
    )
}

export default ImageList;