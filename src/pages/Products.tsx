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

  CreditCard,
  Globe,
  Smartphone,
  Zap,

 
} from "lucide-react";



const products = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description:
      "Send money to anyone, anywhere within seconds. Real-time processing with support and minimal fees.",
    features: [
      "Real-time processing",
      "Low fees",
      "Instant notifications",
      "24/7 availability",
      "Bank-grade security",
    ],
    gradient: "from-piko-purple to-piko-violet",
    image: "/mockups/instantTransfer.jpg",
    tag: "Most Popular",
  },
  {
    icon: Globe,
    title: "Qr Code Payment",
    description:
      "Just open the app, scan the merchant QR code, enter the amount, and voilà! Payment done. Perfect for businesses and freelancers.",
    features: ["Competitive rates", "Easy conversion", "Batch payments"],
    gradient: "from-piko-violet to-piko-lilac",
    image: "/mockups/sendbyQR.jpg",
    tag: "Business",
  },
  {
    icon: CreditCard,
    title: "Wallet Management",
    description:
      "Perfect for secure online shopping with spending controls and real-time alerts.",
    features: [
      "Instant creation",
      "Freeze/unfreeze",
      "Spending limits",
      "Transaction alerts",
      "Expiry control",
    ],
    gradient: "from-piko-lilac to-piko-purple",
    image: "/mockups/Wallet.jpg",
    tag: "Secure",
  },
  {
    icon: Smartphone,
    title: "Mobile ATM",
    description:
      "Add cash to your wallet using a nearby cash agent. Withdraw cash from your wallet via agent.",
    features: [
      "Easy top-ups",
      "Bill payments",
      "Transaction history",
      "Budget tracking",
      "QR payments",
      "Savings goals",
    ],
    gradient: "from-piko-purple to-piko-violet",
    image: "/mockups/ATM.jpg",
    tag: "All-in-One",
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

      <Section background="white" className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-piko-black mb-6 animate-fade-up">
              Built for modern
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-piko-purple to-piko-violet">
                African finance
              </span>
            </h2>
            <p
              className="text-lg text-piko-medium-grey max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              We combine cutting-edge technology with deep local understanding
              to deliver exceptional value.
            </p>
          </div>

          
          <div className="space-y-16 md:space-y-1">
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
