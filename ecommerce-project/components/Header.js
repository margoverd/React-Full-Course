import Image from "next/image";
import Link from "next/link";

const Header = ({ cart }) => {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <Link href="/" className="header-link">
          <Image
            className="logo"
            src="/images/logo-white.png"
            alt="Logo"
            width={177}
            height={26}
            priority
          />

          <Image
            className="mobile-logo"
            src="/images/mobile-logo-white.png"
            alt="Mobile Logo"
            width={22.53}
            height={36}
          />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <Image
            className="search-icon"
            src="/images/icons/search-icon.png"
            alt="Search"
            width={17.5}
            height={20}
          />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" href="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" href="/checkout">
          <Image
            className="cart-icon"
            src="/images/icons/cart-icon.png"
            alt="Cart"
            width={38}
            height={33}
          />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
