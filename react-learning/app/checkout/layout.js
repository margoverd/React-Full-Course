import "./page.css";
import HeaderCheckout from "@/components/HeaderCheckout";

export default function RootLayout({ children }) {
  return (
    <div className="checkout-layout">
      <HeaderCheckout />
      {children}
    </div>
  );
}
