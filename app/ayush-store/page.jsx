"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AyushStore() {
  const products = [
    {
      name: "Organic Honey",
      img: "https://zanducare.com/cdn/shop/articles/Zanducare_-_2024-04-23T160433.165.png?v=1756200527",
      desc: "Pure, golden, and full of natural goodness — our organic honey is sourced directly from trusted beekeepers.",
    },
    {
      name: "Silbatta Masala ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWlvdn5JEaVTwLPvReJ7iDzpDiXczjc4Egq_941ElZdFgXy3K6dtwrbaDtfJQ4FySPOQ&usqp=CAU",
      desc: "Hand-ground to perfection using traditional silbatta, our masala blends bring back the authentic taste of Indian kitchens.",
    },
    {
      name: "Natural Candles",
      img: "https://www.plantbasedcandles.com/cdn/shop/files/Black_Marquina_hero_a74a28a0-7192-41fb-a2d2-8b8866ab6f87.jpg?v=1705039470&width=1500",
      desc: "Crafted with soy wax and essential oils, our candles create a peaceful, aromatic ambiance for your space.",
    },
    {
      name: "Herbal Face Pack",
      img: "https://www.iyarkai.shop/cdn/shop/files/Herbal_Pack_5.png?v=1691577559&width=1445",
      desc: "Rejuvenate your skin with our herbal face pack — enriched with natural extracts for a glowing complexion.",
    },
    {
      name: "Organic Hair Oil",
      img: "https://5.imimg.com/data5/JR/NI/MY-17068197/organic-hair-oil.jpeg",
      desc: "Strengthen and nourish your hair with our herbal oil blend made from cold-pressed natural ingredients.",
    },
    {
      name: "Organic Soap Bars",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnr6utqIx3vlrKozX5cN5hVbwHhstxWQGZ6g&s",
      desc: "Gentle on the skin and made with essential oils, our handcrafted organic soap bars cleanse, hydrate, and refresh naturally.",
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-[#f3e9cb]">
        <Image
          src="https://eduindex.org/wp-content/uploads/2021/07/1913623.jpg?w=1024"
          alt="Ayush Store Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Ayush Store – Nature’s Pure Essence
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Discover the magic of organic living with Ayush — your one-stop
            destination for honey, silbatta masala, natural candles, face packs,
            hair oils, and more.
          </p>
          <button className="bg-[#AA7021] hover:bg-[#8c5d18] text-[#f3e9cb] px-6 py-3 rounded-full text-lg font-semibold transition">
            Explore Products
          </button>
        </motion.div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        className="py-20 px-6 md:px-16"
        style={{
          background: `linear-gradient(135deg, #FBF7F0 0%, #AA7021 100%)`,
        }}
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-[#f3e9cb] drop-shadow-lg">
          Our Organic Collection
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#f3e9cb]/90 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-[#AA7021]">
                  {item.name}
                </h3>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <button className="bg-[#AA7021] hover:bg-[#8c5d18] text-[#f3e9cb] px-5 py-2 rounded-full font-medium">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
