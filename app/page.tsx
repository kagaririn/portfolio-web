"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Palette, MessageCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

const artworks = [
  {
    id: 1,
    src: "/images/artwork-1.jpeg",
    title: "Intimate Moments",
    description: "Romantic couple illustration with soft pink tones",
  },
  {
    id: 2,
    src: "/images/artwork-2.jpeg",
    title: "Domestic Bliss",
    description: "Cozy domestic scene with warm lighting",
  },
  {
    id: 3,
    src: "/images/artwork-3.jpeg",
    title: "Multiple Stories",
    description: "Collection of romantic scenarios",
  },
  {
    id: 4,
    src: "/images/artwork-4.jpeg",
    title: "Sleepy Romance",
    description: "Couples in pajamas with rose motifs",
  },
  {
    id: 5,
    src: "/images/artwork-5.jpeg",
    title: "Elegant Pairs",
    description: "Sophisticated couples with floral elements",
  },
  {
    id: 6,
    src: "/images/artwork-6.jpeg",
    title: "Comic Romance",
    description: "Story-driven romantic interactions",
  },
  {
    id: 7,
    src: "/images/artwork-7.jpeg",
    title: "Sweet Moments",
    description: "Tender scenes in soft pink palette",
  },
]

const pricingData = [
  { type: "Bust up", single: 30, twoChars: 54 },
  { type: "Half body", single: 50, twoChars: 90 },
  { type: "Knee up", single: 60, twoChars: 108 },
  { type: "Full Body", single: 70, twoChars: 125 },
  { type: "Sketchbook Spread (3 poses)", single: 95, twoChars: 140 },
]

const dosAndDonts = {
  dos: ["all gender, fanart, oc, ocxcanon, animal, kemonomimi, slight gore/nudity (suggestive), couple (hetero/BL/GL)"],
  donts: ["furry, scaly/dragon fanart, NSFW, mecha, heavy armor (DO ASK!! :D)"],
}

const termsOfService = [
  "Please provide reference picture in google drive for the prompt if not, describe in details.",
  "I am ok with fixing minor fixes as many times needed for free",
  "Payment after rough sketch of the prompt.",
  "Commission will take 1-4 weeks to finish after the payment.",
  "You will receive a bonus art if you commission me more than 2 times.",
  "I may delay to start your commission due to my studies or other reasons (I will inform).",
  "Payment method will be fixed through discussion.",
  "No refund after final payment. You can cancel the commission after seeing the rough sketch",
  "Please do not use commission art for commercial use or AI training.",
]

export default function Portfolio() {
  const [selectedArt, setSelectedArt] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pink-300/30 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      <FloatingElements />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-100"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Kagaririn
          </motion.h1>
          <div className="flex space-x-6">
            {["Gallery", "Pricing", "Terms", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-600 hover:text-pink-600 font-medium transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-pink-400/50 rounded-full pointer-events-none z-50 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Kagaririn
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Bringing Romance to Life Through Art
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors"
            >
              <Heart className="w-4 h-4 mr-2" />
              Couple Illustrations
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Character Design
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors"
            >
              <Palette className="w-4 h-4 mr-2" />
              Digital Art
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-300/20 rounded-full"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Artwork</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my collection of romantic illustrations and character designs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedArt(artwork.id)}
              >
                <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={artwork.src || "/placeholder.svg"}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-semibold text-lg mb-1">{artwork.title}</h3>
                      <p className="text-sm text-gray-200">{artwork.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-r from-mint-100/50 to-green-100/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Commission Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transparent pricing for all commission types</p>
          </motion.div>

          {/* Dos and Don'ts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                  <span className="text-3xl mr-2">✓</span> DOS
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {dosAndDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                  <span className="text-3xl mr-2">✗</span> DON'TS
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {dosAndDonts.donts.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="overflow-hidden bg-white shadow-xl">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center">CHARACTER PRICING</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-pink-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-800">TYPE</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">PRICE (single)</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-800">PRICE (2 chars)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((item, index) => (
                      <motion.tr
                        key={item.type}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border-b border-gray-100 hover:bg-pink-25 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-gray-800">{item.type}</td>
                        <td className="px-6 py-4 text-center text-pink-600 font-semibold">${item.single}</td>
                        <td className="px-6 py-4 text-center text-pink-600 font-semibold">${item.twoChars}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-purple-50 border-purple-200">
              <h4 className="text-xl font-bold text-purple-700 mb-3">Additional Characters</h4>
              <p className="text-gray-700">
                Additional character will be 80% of the main price for single character, for sketchbook spread,
                additional character will be 25$+ Can draw 3 characters max.
              </p>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Background</h4>
              <p className="text-gray-700">
                Single color background is free
                <br />
                Simple background is 5 USD
                <br />
                Detailed background is 13 USD
              </p>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Card className="p-6 bg-gradient-to-r from-pink-100 to-purple-100 border-0">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">HOW TO ORDER COMMISSION?</h4>
              <p className="text-lg text-gray-700">Just DM me on one of my socials!</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service Section */}
      <section id="terms" className="py-20 px-4 bg-gradient-to-r from-cyan-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Terms of Service</h2>
            <p className="text-xl text-gray-600">Please read these terms carefully before commissioning</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-4 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-center">TOS</h3>
              </div>
              <div className="space-y-4">
                {termsOfService.map((term, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-teal-50 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{term}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Ready to Commission?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's create something beautiful together. Contact me on X to discuss your project!
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open("https://x.com/Kagaririn_", "_blank")}
              >
                <MessageCircle className="mr-3 w-6 h-6" />
                Contact @Kagaririn_
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center items-center space-x-2 text-gray-500"
            >
              <Heart className="w-4 h-4 text-pink-400" />
              <span>Available for commissions</span>
              <Heart className="w-4 h-4 text-pink-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal for artwork viewing */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArt(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={artworks.find((art) => art.id === selectedArt)?.src || ""}
                alt="Selected artwork"
                width={800}
                height={800}
                className="w-full h-full object-contain rounded-lg"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                onClick={() => setSelectedArt(null)}
              >
                ×
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
