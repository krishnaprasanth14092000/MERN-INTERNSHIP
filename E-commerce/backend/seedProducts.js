import mongoose from "mongoose";
import Product from "./models/Product.js";
import dotenv from "dotenv";

dotenv.config();

const sampleProducts = [
  // Audio Products
  {
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: "29999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
    description: "Industry-leading noise cancellation with 30-hour battery life. Premium comfort with touch sensor controls and speak-to-chat technology.",
    category: "Audio"
  },
  {
    name: "JBL Charge 5 Bluetooth Speaker",
    price: "12999",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=400&fit=crop",
    description: "Powerful portable speaker with IP67 waterproof rating. 20 hours playtime with built-in power bank to charge your devices.",
    category: "Audio"
  },
  {
    name: "Apple AirPods Pro (2nd Gen)",
    price: "24999",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=400&fit=crop",
    description: "Active noise cancellation with adaptive transparency. Spatial audio with dynamic head tracking for immersive sound experience.",
    category: "Audio"
  },
  {
    name: "Bose SoundLink Revolve+",
    price: "18999",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=400&fit=crop",
    description: "360-degree sound with deep, loud and immersive coverage. Water-resistant design with 16-hour battery life.",
    category: "Audio"
  },
  {
    name: "Sennheiser HD 660S Headphones",
    price: "45999",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=400&fit=crop",
    description: "Open-back audiophile headphones with reference-class sound quality. Perfect for critical listening and professional audio work.",
    category: "Audio"
  },

  // Accessories
  {
    name: "Logitech MX Master 3S Mouse",
    price: "8999",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=400&fit=crop",
    description: "Advanced wireless mouse with ultra-precise scrolling. 8K DPI sensor with quiet clicks and 70-day battery life.",
    category: "Accessories"
  },
  {
    name: "Keychron K8 Mechanical Keyboard",
    price: "7999",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=400&fit=crop",
    description: "Wireless mechanical keyboard with hot-swappable switches. RGB backlight with Mac and Windows compatibility.",
    category: "Accessories"
  },
  {
    name: "Anker PowerCore 26800mAh",
    price: "4999",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=400&fit=crop",
    description: "Ultra-high capacity portable charger. Charges iPhone 15 over 5 times. Triple USB ports for simultaneous charging.",
    category: "Accessories"
  },
  {
    name: "Apple Magic Trackpad",
    price: "11900",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=400&fit=crop",
    description: "Multi-touch surface with Force Touch technology. Wireless and rechargeable with seamless Mac integration.",
    category: "Accessories"
  },
  {
    name: "Razer DeathAdder V3 Gaming Mouse",
    price: "6999",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=400&fit=crop",
    description: "Ergonomic gaming mouse with 30K DPI sensor. 90-hour battery life with HyperSpeed wireless technology.",
    category: "Accessories"
  },
  {
    name: "Corsair K95 RGB Platinum XT",
    price: "18999",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=400&fit=crop",
    description: "Premium mechanical gaming keyboard with Cherry MX switches. Per-key RGB lighting and dedicated macro keys.",
    category: "Accessories"
  },

  // Storage
  {
    name: "Samsung T7 Portable SSD 2TB",
    price: "24999",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop",
    description: "Ultra-fast external SSD with up to 1,050 MB/s transfer speeds. Compact design with password protection and AES 256-bit encryption.",
    category: "Storage"
  },
  {
    name: "WD Black SN850X NVMe SSD 1TB",
    price: "12999",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
    description: "PCIe Gen4 NVMe SSD with up to 7,300 MB/s read speeds. Perfect for gaming and content creation with heatsink included.",
    category: "Storage"
  },
  {
    name: "Seagate Expansion 4TB External HDD",
    price: "8999",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop",
    description: "Massive 4TB storage capacity for backup and file storage. USB 3.0 connectivity with plug-and-play setup.",
    category: "Storage"
  },
  {
    name: "SanDisk Extreme Pro 128GB SD Card",
    price: "3999",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=400&fit=crop",
    description: "Professional-grade SD card with up to 200 MB/s read speeds. Perfect for 4K video recording and high-resolution photography.",
    category: "Storage"
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/ecom-backend-inte");
    console.log("Connected to MongoDB");
    
    await Product.deleteMany({});
    console.log("Cleared existing products");
    
    await Product.insertMany(sampleProducts);
    console.log("Sample products added successfully!");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
}

seedProducts();