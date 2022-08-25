import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  filterByCategory,
} from "../../redux/features/productsSlice";
import "../../styles/Products/Products.css";
import { Bounce } from "react-reveal";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const handleClassNameActive = (e) => {
    const listItems = Array.from(e.target.parentElement.children);
    listItems.forEach((item) => {
      item.classList.remove("active");
      e.target.classList.add("active");
    });
  };
  const filterProductsByCategory = (e, category) => {
    handleClassNameActive(e);
    dispatch(filterByCategory(category));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="products">
      <div className="container">
        <div className="products-settings">
          <h3>New Products</h3>
          <ul>
            <li
              className="active"
              onClick={(e) => filterProductsByCategory(e, "all")}
            >
              All
            </li>
            <li onClick={(e) => filterProductsByCategory(e, "mobiles")}>
              Smartphones
            </li>
            <li onClick={(e) => filterProductsByCategory(e, "watches")}>
              Watches
            </li>
            <li onClick={(e) => filterProductsByCategory(e, "headphones")}>
              Headphones
            </li>
            <li onClick={(e) => filterProductsByCategory(e, "laptops")}>
              Laptops
            </li>
            <li onClick={(e) => filterProductsByCategory(e, "cameras")}>
              Cameras
            </li>
          </ul>
        </div>
        {products.length !== 0 ? (
          <Bounce cascade left>
            <div className="products-items">
              {products.map((item) => (
                <div className="product-item" key={item._id}>
                  <img src={item.image} />
                  <div className="product-item-details">
                    <h5>{item.name}</h5>
                    <div className="prices">
                      <h6 className="newprice">${item.newprice}</h6>
                      {item.oldprice && (
                        <p className="oldprice">${item.oldprice}</p>
                      )}
                    </div>
                  </div>
                  <div className="product-item-icones">
                    <i className="fa fa-heart-o"></i>
                    <i className="fa fa-shopping-cart"></i>
                    <i className="fa fa-eye"></i>
                  </div>
                  <div className="add">
                    <button>Add To Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </Bounce>
        ) : (
          <div className="alert alert-danger mt-4">There Is No Items</div>
        )}
      </div>
    </div>
  );
}

export default Products;
