import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Plane } from "lucide-react";
const Directions = () => {
  const directions = [
    {
      icon: Plane,
      title: "From Jolly Grant Airport (Dehradun)",
      description:
        "Jolly Grant Airport is approximately 9.5km from the resort. Take NH7 towards Rishikesh, then NH58 towards Badrinath. Turn right at Thano junction and follow the road to Chauki. The resort is located in Khasra No 20, Siron village.",
      duration: "35 minutes",
    },
    {
      icon: Car,
      title: "From Dehradun Railway Station",
      description:
        "From Dehradun Railway Station, take NH7 towards Rishikesh. Continue on NH58 towards Badrinath. At Thano junction, take a right turn and proceed towards Chauki. Follow the village road to reach The Palm Bliss Resort.",
      duration: "1 hour 30 minutes",
    },
  ];
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-alegreya  italic font-bold text-yellow-700/90 mb-4">
              Directions To{" "}
              <span className="">The Palm Bliss Resort</span>
            </h2>
            <p className="text-lg text-gray-600 font-alegreya  italic max-w-2xl mx-auto">
              Find your way to The Palm Bliss Resort in Uttarakhand with our
              detailed directions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {directions.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full bg-[#fbf7f0] border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-yellow-700/80 rounded-full flex items-center justify-center">
                        <direction.icon className="h-6 w-6 text-[#f3e9cb]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-alegreya  italic font-bold text-black">
                          {direction.title}
                        </h3>
                        <p className="text-yellow-700/90 font-semibold">
                          {direction.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {direction.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.528100022979!2d78.19983169999999!3d30.250530899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092500474fe555%3A0xdf50c97a749272d1!2sThe%20Palm%20Bliss%20Resort!5e0!3m2!1sen!2sin!4v1751433460794!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Palm Bliss Resort Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Directions;
