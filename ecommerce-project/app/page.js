"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import "./page.css";

export default function Home({ cart }) {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    axios.get(`${apiUrl}/api/products`).then((response) => {
      setProducts(response.data);
    });

    // axios.get(`${apiUrl}/api/cart-items`).then((response) => {
    //   setCart(response.data);
    // });
  }, []);

  console.log(products);

  return (
    <>
      <Header cart={cart} />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={`product${index}`} className="product-container">
              <div className="product-image-container">
                <Image
                  className="product-image"
                  src={`/${product.image}`}
                  alt={product.name}
                  width={180}
                  height={180}
                />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {product.name}
              </div>

              <div className="product-rating-container">
                <Image
                  className="product-rating-stars"
                  src={`/images/ratings/rating-${
                    product.rating.stars * 10
                  }.png`}
                  alt={`Rating ${product.rating.stars}`}
                  width={100}
                  height={20}
                />
                <div className="product-rating-count link-primary">
                  {product.rating.count}
                </div>
              </div>

              <div className="product-price">
                ${(product.priceCents / 100).toFixed(2)}
              </div>

              <div className="product-quantity-container">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className="product-spacer"></div>

              <div className="added-to-cart">
                <Image
                  src="/images/icons/checkmark.png"
                  alt="Added"
                  width={20}
                  height={20}
                />
                Added
              </div>

              <button className="add-to-cart-button button-primary">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
