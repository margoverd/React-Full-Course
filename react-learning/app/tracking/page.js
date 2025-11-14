import Header from "@/components/Header";
import "./page.css";
import Image from "next/image";
import Link from "next/link.js";

export default function tracking() {
  return (
    <>
      <Header />
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" href="/orders">
            View all orders
          </Link>

          <div className="delivery-date">Arriving on Monday, June 13</div>

          <div className="product-info">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>

          <div className="product-info">Quantity: 1</div>

          <Image
            className="product-image"
            src="/images/products/athletic-cotton-socks-6-pairs.jpg"
            alt="athletic-cotton-socks-6-pairs"
            width={150}
            height={150}
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
