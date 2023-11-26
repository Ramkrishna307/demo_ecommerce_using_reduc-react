import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from "react-router-dom";
const ProductComponent = () => {
//  const product=useSelector((state)=>state.allproducts.products)
//  const allProducts = useSelector((state) => state.allproducts);
//  

const products = useSelector((state) => state.allproducts.products);
const renderList = products.map((product) => {
  const { id, title, image, price, category } = product;
  return (
    // <div className="four wide column" key={id}>
    //   {/* <Link to={`/product/${id}`}> */}
    //     <div className="ui link cards">
    //       <div className="card">
    //         <div className="image">
    //           <img src={image} alt={title} />
    //         </div>
    //         <div className="content">
    //           <div className="header">{title}</div>
    //           <div className="meta price">$ {price}</div>
    //           <div className="meta">{category}</div>
    //         </div>
    //       </div>
    //     </div>
    //   {/* </Link> */}
    // </div>

    <div className="four wide column" key={id}>
         <Link to={`/product/${id}`}>
        <div className="ui card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta">
              <span className="price">$ {price}</span>
            </div>
            <div className="meta">{category}</div>
          </div>
          <div className="extra content">
            {/* Additional content or actions can be added here */}
          </div>
        </div>
          </Link>
      </div>
  );
});
return <>{renderList}</>;
}

export default ProductComponent