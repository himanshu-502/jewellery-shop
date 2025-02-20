import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Magnifier.css";
import Recommend from "../../components/Recommend.jsx";
import ImagesDisplay from "./ImagesDisplay.jsx";
import Reviews from "./Reviews.jsx";

const ProductDesc = () => {
  const { productId } = useParams();
  
  
  return (
    <div className="p-4 mt-6">
      <ImagesDisplay productId={productId}/>
      
      <div className=" py-8 mt-8"  style={{ backgroundColor: "#fff" }}>
        <div className="flex justify-center gap-8 ">
          <Recommend productId={productId} />
        </div>
      </div>

      <Reviews productId={productId}/>
    </div>
  );
};
export default ProductDesc;
