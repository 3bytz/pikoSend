import React from "react";
import {
  Navbar,
  Footer,
  
  SEO,
  ProductsHero,

} from "../components";
import { ProductCard } from "../components/ProductCard";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import {

  Banknote,
  CreditCard,
  Globe,
  SendIcon,
  Smartphone,
  Zap,

 
} from "lucide-react";



const products = [
  {
    icon: Zap,
    title: "PikoSend Wallet",
    description:
      "Your main digital wallet for everyday payments. You can use it to send, receive, and store money.",
    features: [
      "Daily payments and transfers",
      "People tired of high fees",
      "Cashless convenience",
    ],
    gradient: "from-piko-purple to-piko-violet",
    image: "/mockups/instantTransfer.jpg",
    tag: "Most Popular",
  },
  {
    icon: Globe,
    title: "QR Payments (Tap & Go)",
    description:
      "You can pay or accept payments instantly by simply scanning a QR code. No cash handling. No POS machines. Just faster transactions.",
    features: ["Shops, supermarkets, petrol stations and all retail outlets", "Everyday in-person payments", "Faster checkout experiences"],
    gradient: "from-piko-violet to-piko-lilac",
    image: "/mockups/sendbyQR.jpg",
    tag: "Business",
  },
  {
    icon: CreditCard,
    title: "Multi-Wallets",
    description:
      "Create multiple wallets within your account to separate spending, savings, bill payments or group contributions. Multi-wallets help you stay organised without the need to open multiple accounts.",
    features: [
      "Budgeting and money control",
      "Separating personal and shared funds",
      "Clear financial tracking",

    ],
    gradient: "from-piko-lilac to-piko-purple",
    image: "/mockups/Wallet.jpg",
    tag: "Secure",
  },
  {
    icon: Banknote,
    title: "Human ATM (Coming Soon)",
    description:
      "A community-based agent network that will allow cash deposits and withdrawals through trusted merchants. Regulatory approvals are in progress.",
    features: [
     
    ],
    gradient: "from-piko-purple to-piko-violet",
    image: "/mockups/ATM.jpg",
    tag: "All-in-One",
  },
    {
    icon: SendIcon,
    title: "Bank Transfers",
    description:
      "With PikoSend, you can also send money directly from your PikoSend wallet to supported banks via Pesapal. Ideal for paying rent, school fees, or suppliers at low cost.",
    features: [
      "Budgeting and money control",
      "Separating personal and shared funds",
      "Clear financial tracking",

    ],
    gradient: "from-piko-lilac to-piko-purple",
    image: "/mockups/Wallet.jpg",
    tag: "Secure",
  },
];


export const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Products - PikoSend | Instant Transfers, Virtual Cards & More"
        description="Explore PikoSend's suite of financial products designed for modern Africa."
      />
      <Navbar />
      <ProductsHero />

      <Section background="white" className="py-12 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-6 animate-fade-up tracking-12">
              Simple, Affordable Payment Options Built for your 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                Everyday Use
              </span>
            </h2>
            <p
              className="text-lg text-piko-medium-grey max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
             Built to save you time, money, and stress.
            </p>
          </div>

          
          <div className="space-y-4 md:space-y-1">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} isEven={index % 2 === 0} />
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};
