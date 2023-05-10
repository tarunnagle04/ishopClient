import { useEffect, useState } from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const FeaturedProducts = () => {
  const [productDetails,setProductDetails] = useState([]);

  useEffect(() => {
      fetch(`${process.env.REACT_APP_WEB_SERVICE}/featuredproducts`).then(res => res.json())
      .then(data =>{
        setProductDetails(() => data.details);
      })
  },[])
  return (
    <>
      <p className="label2 mb-50">FEATURED PRODUCTS</p>
      <Slider {...settings} arrows={true}>
        {productDetails.map((product) => {
            return (
              <div className="featured__products__details">
                <div>
                  <img
                    width="130px"
                    height="112px"
                    src={product.image}
                    alt="Product"
                  />
                </div>
                <div className="featured__products__description">
                  <p className="label1" style={{"textAlign":"center"}}>{product.name}</p>
                  <img
                    width="100px"
                    height="40px"
                    src="https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg"
                    alt="rating"
                  />
                  <p className="label3">
                    {product.price} <span className="originalPrice">{product.oPrice}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </Slider>
    </>
  );
};
export default FeaturedProducts;
