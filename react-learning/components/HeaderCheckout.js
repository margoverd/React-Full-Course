import Image from "next/image";
import "@/app/checkout/checkout-header.css";
import Link from "next/link";

const HeaderCheckout = () => {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link href="/">
            <Image
              className="logo"
              src="/images/logo.png"
              alt="Logo"
              width={177}
              height={26}
            />
            <Image
              className="mobile-logo"
              src="/images/mobile-logo.png"
              alt="logo"
              width={22}
              height={30}
            />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" href="/">
            3 items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <Image
            src="/images/icons/checkout-lock-icon.png"
            alt="lock-icon"
            width={36}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderCheckout;
