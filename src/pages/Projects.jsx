"use client"

import { useState } from "react"

const PortfolioGrid = () => {
  // Sample portfolio items - replace with your actual images
  const portfolioItems = [
    {
      id: 1,
      src: "https://via.placeholder.com/600",
      alt: "Portfolio project 1",
      category: "web",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/600",
      alt: "Portfolio project 2",
      category: "design",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/600",
      alt: "Portfolio project 3",
      category: "photography",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/600",
      alt: "Portfolio project 4",
      category: "web",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/600",
      alt: "Portfolio project 5",
      category: "design",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/600",
      alt: "Portfolio project 6",
      category: "photography",
    },
    {
      id: 7,
      src: "https://via.placeholder.com/600",
      alt: "Portfolio project 7",
      category: "web",
    },
    {
      id: 8,
      src: "https://via.placeholder.com/600",
      alt: "Portfolio project 8",
      category: "design",
    },
  ]

  const [items, setItems] = useState(portfolioItems)
  const [activeFilter, setActiveFilter] = useState("all")

  // Filter items by category
  const filterItems = (category) => {
    setActiveFilter(category)
    if (category === "all") {
      setItems(portfolioItems)
    } else {
      setItems(portfolioItems.filter((item) => item.category === category))
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Optional filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => filterItems("all")}
          className={`px-4 py-2 rounded-md ${activeFilter === "all" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
        >
          All
        </button>
        <button
          onClick={() => filterItems("web")}
          className={`px-4 py-2 rounded-md ${activeFilter === "web" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
        >
          Web
        </button>
        <button
          onClick={() => filterItems("design")}
          className={`px-4 py-2 rounded-md ${activeFilter === "design" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
        >
          Design
        </button>
        <button
          onClick={() => filterItems("photography")}
          className={`px-4 py-2 rounded-md ${activeFilter === "photography" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
        >
          Photography
        </button>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg" style={{ aspectRatio: "1/1" }}>
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold">{item.alt}</h3>
                <p className="capitalize">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioGrid

