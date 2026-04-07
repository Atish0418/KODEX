// pages/Home.jsx
import Hero from '../components/home/Hero'
import StatsCard from '../components/home/StatsCard'
import CategoryCard from '../components/home/CategoryCard'
import ProductList from '../components/home/ProductList'
import FeatureCard from '../components/home/FeatureCard'

const Home = () => {
  return (
    <div className="text-white">

      <Hero />

      {/* STATS */}
      <div className="grid grid-cols-4 gap-6 mb-10 ">
        <StatsCard icon="ri-shopping-bag-line" value="0" label="Cart Items" color="bg-[#C8F400]/10 text-[#C8F400]" />
        <StatsCard icon="ri-line-chart-line" value="$0.00" label="Cart Value" color="bg-blue-500/10 text-blue-400" />
        <StatsCard icon="ri-star-line" value="5" label="Top Products" color="bg-yellow-500/10 text-yellow-400" />
        <StatsCard icon="ri-price-tag-3-line" value="6" label="Categories" color="bg-purple-500/10 text-purple-400" />
      </div>

      {/* CATEGORIES */}
      <h2 className="mb-4 font-semibold font-body">Shop by Category</h2>

      <div className="grid grid-cols-4 gap-2 mb-10">
        {["Electronics", "Clothing", "Furniture", "Home", "Sports", "Accessories"].map((cat, i) => (
          <CategoryCard key={i} name={cat} />
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 gap-6 mb-10">
        <ProductList title="⭐ Top Rated" />
        <ProductList title="⚡ New Arrivals" />
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-3 gap-6 mb-20">
        <FeatureCard icon="ri-flashlight-line" title="Fast Delivery" desc="Same-day delivery" color="text-[#C8F400]" />
        <FeatureCard icon="ri-shield-check-line" title="Secure Payments" desc="100% encrypted" color="text-blue-400" />
        <FeatureCard icon="ri-price-tag-3-line" title="Best Prices" desc="Price-match guarantee" color="text-green-400" />
      </div>

    </div>
  )
}

export default Home