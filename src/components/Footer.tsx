import { Facebook, Instagram, Music } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Music, href: "#", label: "TikTok" },
  ];

  const paymentMethods = ["Visa", "Mastercard", "PayPal", "Apple Pay"];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="font-playfair text-2xl font-bold mb-2">
            Castillo Chocolates
          </h3>
          <p className="text-sm opacity-90 tracking-wider">NEW ZEALAND</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="hover:opacity-75 transition-opacity p-2"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {paymentMethods.map((method) => (
            <div
              key={method}
              className="bg-primary-foreground text-primary px-3 py-1 rounded text-xs font-medium"
            >
              {method}
            </div>
          ))}
        </div>

        <div className="text-center text-sm opacity-90 space-y-2">
          <p>© 2025, Castillo Chocolates NZ Powered by Shopify</p>
          <div className="space-x-4">
            <a href="#" className="hover:opacity-75 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;