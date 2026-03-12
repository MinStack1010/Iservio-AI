import React, { useState } from "react"
import { useNavigate } from 'react-router'
import {
  ArrowLeft,
  Search,
  AlertTriangle,
  TrendingUp,
  Newspaper
} from "lucide-react"

type Component = {
  name: string
  supplier: string
  spec: string
  stock: string
  riskScore: number
  signals: number
}

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image:
      "data:image/jpeg;base64,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",
    subcategories: ["Sensors", "Circuit Boards", "Navigation Systems"]
  },
  {
    id: "lubricants",
    name: "Lubricants",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800",
    subcategories: ["Aviation Oils", "Greases"]
  }
]

const components: Component[] = [
  {
    name: "Flight Control Sensor",
    supplier: "EuroElectronics",
    spec: "DO-160G",
    stock: "Medium",
    riskScore: 72,
    signals: 3
  },
  {
    name: "Pressure Sensor",
    supplier: "EuroElectronics",
    spec: "DO-160G",
    stock: "High",
    riskScore: 35,
    signals: 1
  }
]

const newsSignals = [
  {
    title: "European semiconductor shortage impacting avionics",
    source: "Reuters"
  },
  {
    title: "Factory strike at avionics supplier in Germany",
    source: "Bloomberg"
  },
  {
    title: "New EU export restrictions on microchips",
    source: "Financial Times"
  }
]

export default function Components() {
  const [view, setView] = useState("categories")
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState("")
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(
    null
  )
  console.log(selectedCategory)
  const [search, setSearch] = useState("")

  const filtered = components.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  const riskColor = (score: number) => {
    if (score > 65) return "text-red-600"
    if (score > 40) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        AI Component Monitoring
      </h1>

      {/* CATEGORY VIEW */}

      {view === "categories" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map(cat => (
            <div
              key={cat.id}
              className="border rounded-xl overflow-hidden hover:shadow-xl cursor-pointer"
              onClick={() => {
                setSelectedCategory(cat)
                setView("subcategory")
              }}
            >
              <img src={cat.image} className="h-40 w-full object-cover" />

              <div className="p-4">

                <h3 className="font-semibold text-lg">
                  {cat.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Monitor supply chain risk
                </p>

              </div>
            </div>
          ))}

        </div>
      )}

      {/* SUBCATEGORY */}

      {view === "subcategory" && (
        <div>

          <button
            className="flex items-center gap-2 mb-6"
            onClick={() => setView("categories")}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <h2 className="text-2xl font-semibold mb-6">
            {selectedCategory.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {selectedCategory.subcategories.map((s: string) => (
              <div
                key={s}
                className="border p-6 rounded-lg hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/dashboard/products/`)}
              >
                <h3 className="font-semibold">{s}</h3>
                <p className="text-sm text-gray-500">
                  AI monitoring enabled12
                </p>
              </div>
            ))}

          </div>

        </div>
      )}

      {/* COMPONENT LIST */}

      {view === "components" && (
        <div>

          <button
            className="flex items-center gap-2 mb-6"
            onClick={() => setView("subcategory")}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <h2 className="text-xl font-semibold mb-4">
            {selectedSubcategory}
          </h2>

          <div className="relative mb-6">

            <Search
              size={16}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              className="border pl-9 py-2 rounded-lg w-full"
              placeholder="Search components..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filtered.map((c, i) => (
              <div
                key={i}
                className="border rounded-xl p-5 hover:shadow-lg cursor-pointer"
                onClick={() => {
                  setSelectedComponent(c)
                  setView("detail")
                }}
              >

                <h3 className="font-semibold mb-2">
                  {c.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Supplier: {c.supplier}
                </p>

                <div className="mt-3 flex items-center gap-2">

                  <AlertTriangle size={16} />

                  <span className={`font-semibold ${riskColor(c.riskScore)}`}>
                    AI Risk {c.riskScore}
                  </span>

                </div>

                <p className="text-xs text-gray-500 mt-1">
                  Signals detected: {c.signals}
                </p>

              </div>
            ))}

          </div>

        </div>
      )}

      {/* COMPONENT DETAIL */}

      {view === "detail" && selectedComponent && (
        <div>
          <button
            className="flex items-center gap-2 mb-6"
            onClick={() => setView("components")}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <h2 className="text-2xl font-semibold mb-6">
            {selectedComponent.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* BASIC INFO */}

            <div className="border rounded-xl p-6">

              <h3 className="font-semibold mb-4">
                Component Info
              </h3>

              <p>Supplier: {selectedComponent.supplier}</p>
              <p>Specification: {selectedComponent.spec}</p>
              <p>Stock: {selectedComponent.stock}</p>

            </div>

            {/* AI RISK PANEL */}

            <div className="border rounded-xl p-6">

              <h3 className="font-semibold mb-4">
                AI Risk Analysis
              </h3>

              <div className="flex items-center gap-2 mb-3">

                <AlertTriangle />

                <span
                  className={`text-xl font-bold ${riskColor(
                    selectedComponent.riskScore
                  )}`}
                >
                  Risk Score {selectedComponent.riskScore}
                </span>

              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">

                <TrendingUp size={16} />

                Increasing risk (7 days)

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Signals detected: {selectedComponent.signals}
              </p>

            </div>

          </div>

          {/* AI SIGNALS */}

          <div className="border rounded-xl p-6 mt-8">

            <h3 className="font-semibold mb-4 flex items-center gap-2">

              <Newspaper size={18} />

              Detected Signals

            </h3>

            <div className="space-y-3">

              {newsSignals.map((n, i) => (
                <div key={i} className="border-b pb-2">

                  <p className="text-sm font-medium">
                    {n.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {n.source}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      )}
    </div>
  )
}