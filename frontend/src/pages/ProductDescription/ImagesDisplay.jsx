import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/Magnifier.css";
import { features } from "../../data/DataSet.js";
import CartWishlist from "../../components/AddToCartWishlist.jsx";
import useProductStore from "../../store/ProductStore.js";
import { assurances } from "../../data/DataSet.js";

const ImagesDisplay = ({ productId }) => {
    const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [productDisplay, setProductDisplay] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { products, fetchProducts } = useProductStore();

    const lensRef = useRef(null);
    const productImgRef = useRef(null);
    const magnifiedImgRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            await fetchProducts();
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            const foundProduct = products.find((product) => product.id === Number(productId));
            setProductDisplay(foundProduct || null);
            setSelectedImage(foundProduct?.images[0] || null);
        }
    }, [products, productId]);

    useEffect(() => {
        setTimeout(() => {
            const lens = lensRef.current;
            const productImg = productImgRef.current;
            const magnifiedImg = magnifiedImgRef.current;

            if (!lens || !productImg || !magnifiedImg) return;

            const moveLens = (e) => {
                const lensWidth = lens.offsetWidth;
                const lensHeight = lens.offsetHeight;
                const productImgRect = productImg.getBoundingClientRect();

                let x = e.clientX - productImgRect.left - lensWidth / 2;
                let y = e.clientY - productImgRect.top - lensHeight / 2;

                const maxX = productImgRect.width - lensWidth;
                const maxY = productImgRect.height - lensHeight;

                x = Math.max(0, Math.min(x, maxX));
                y = Math.max(0, Math.min(y, maxY));

                setLensPosition({ x, y });

                const cx = magnifiedImg.offsetWidth / lensWidth;
                const cy = magnifiedImg.offsetHeight / lensHeight;

                magnifiedImg.style.background = `
                    url('${productImg.src}')
                    -${x * cx}px -${y * cy}px
                    / ${productImgRect.width * cx}px ${productImgRect.height * cy}px
                    no-repeat`;
            };

            const handleMouseEnter = () => setIsActive(true);
            const handleMouseLeave = () => setIsActive(false);

            lens.addEventListener("mousemove", moveLens);
            productImg.addEventListener("mousemove", moveLens);
            lens.addEventListener("mouseenter", handleMouseEnter);
            productImg.addEventListener("mouseenter", handleMouseEnter);
            lens.addEventListener("mouseleave", handleMouseLeave);
            productImg.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                lens.removeEventListener("mousemove", moveLens);
                productImg.removeEventListener("mousemove", moveLens);
                lens.removeEventListener("mouseenter", handleMouseEnter);
                productImg.removeEventListener("mouseenter", handleMouseEnter);
                lens.removeEventListener("mouseleave", handleMouseLeave);
                productImg.removeEventListener("mouseleave", handleMouseLeave);
            };
        }, 100); // Small delay to ensure elements exist
    }, [productDisplay]);

    if (!productDisplay) {
        return (
            <div className="text-center text-red-500 mt-10">
                <h1>Product Not Found</h1>
                <p>The product you're looking for does not exist.</p>
                <Link to="/" className="text-blue-500 underline">
                    Back to Main Menu
                </Link>
            </div>
        );
    }

    return (
      <>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white shadow-lg gap-6" style={{ borderRadius: "25px" }}>
            {productDisplay.images.length > 1 && (
                <div className="w-full flex flex-wrap md:w-1/6 md:flex-col gap-3 p-4">
                    {productDisplay.images.map((imgSrc, index) => (
                        <img
                            key={index}
                            src={imgSrc}
                            alt={`Thumbnail ${index + 1}`}
                            className={`cursor-pointer w-24 h-24 object-cover rounded border-2 ${
                                selectedImage === imgSrc ? "border-yellow-500" : "border-gray-300"
                            }`}
                            onClick={() => setSelectedImage(imgSrc)}
                        />
                    ))}
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="w-full md:w-1/2 product-img">
                    <img ref={productImgRef} src={selectedImage} alt={productDisplay.name} className="w-full h-auto object-cover" />
                    <div
                        ref={lensRef}
                        className={`magnifier-lens ${isActive ? "active" : ""}`}
                        style={{
                            top: `${lensPosition.y}px`,
                            left: `${lensPosition.x}px`,
                        }}
                    ></div>
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center product-img">
                    <h3 className="text-2xl font-bold text-gray-800">{productDisplay.name}</h3>
                    <p className="text-xl text-gray-600 mt-2">₹{productDisplay.price}</p>
                    <hr className="border-t border-gray-300 mt-5" />

                    <div className="flex justify-center items-center gap-6 mt-5">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <img src={feature.icon} alt={feature.title} className="h-7 mx-auto mb-4" />
                                <p className="text-sm font-medium text-gray-700">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                    <hr className="border-t border-gray-300 mt-5" />

                    <div className="mt-4 font-serif">
                        <p>{productDisplay.description}</p>
                        <div className="font-serif font-semibold p-3 mx-auto text-end text-red-500 text-1xl">By EagleView</div>
                    </div>
                    <div>
                        <CartWishlist productId={Number(productDisplay.id)} />
                    </div>
                    <div ref={magnifiedImgRef} className={`magnified-img ${isActive ? "active" : ""}`}></div>
                </div>
            </div>
        </div>
        {/*purity*/}
        <div className="bg-white py-8 mt-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif font-bold text-brown-800">The EagleView JewelTechs  Assurance</h2>
            <p className="text-gray-600 mx-auto">Crafted by Experts, Cherished by You.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 ">
            {assurances.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center ">
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-100 h-20 object-contain mb-4"
                />
                <p className="text-sm text-gray-700 font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default ImagesDisplay;
