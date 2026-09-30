import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preparing secure checkout",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function PreparingCheckoutPage() {
  return (
    <main className="checkout-preparing dark-section">
      <div className="checkout-preparing-mark" aria-hidden="true">F.</div>
      <div className="checkout-preparing-spinner" aria-hidden="true" />
      <p className="section-number">Checkout</p>
      <h1>Connecting to Paystack.</h1>
      <p>Please keep this tab open. Your payment options will appear here shortly. If it takes more than 30 seconds, return to Forge and try again.</p>
    </main>
  );
}
