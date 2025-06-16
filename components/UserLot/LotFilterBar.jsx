import { useState } from "react";
import { Filter, Search, MapPin, DollarSign, Star, Car } from "lucide-react";

export default function LotFilterBar({ onFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    city: "",
    subcity: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
    onlyAvailable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleApply = () => {
    onFilter(filters);
    if (isOpen) setIsOpen(false);
  };

  const handleClear = () => {
    const clearedFilters = {
      search: "",
      city: "",
      subcity: "",
      minPrice: "",
      maxPrice: "",
      minRating: "",
      onlyAvailable: false,
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  return (
    <div className="w-full max-w-7xl mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Find Your Perfect Parking Spot
          </h2>
        </div>
        
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
        >
          <Filter className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden md:block'} bg-white rounded-2xl shadow-xl border border-gray-100 p-6 transition-all duration-300`}>
        {/* Search Bar - Full Width */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleChange}
              placeholder="Search by parking lot name or address..."
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Location Filters */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Location</h3>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="city"
                value={filters.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-black transition-all duration-200"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="subcity"
                value={filters.subcity}
                onChange={handleChange}
                placeholder="Subcity/District"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-black transition-all duration-200"
              />
            </div>
          </div>

          {/* Price Filters */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Price Range</h3>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
                placeholder="Min Price"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-black transition-all duration-200"
              />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
                placeholder="Max Price"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100  text-black transition-all duration-200"
              />
            </div>
          </div>

          {/* Rating Filter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Rating</h3>
            <div className="relative">
              <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                name="minRating"
                value={filters.minRating}
                onChange={handleChange}
                placeholder="Min Rating (0-5)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-black transition-all duration-200"
                min="0"
                max="5"
                step="0.1"
              />
            </div>
          </div>

          {/* Availability Filter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Availability</h3>
            <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <input
                type="checkbox"
                name="onlyAvailable"
                checked={filters.onlyAvailable}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 text-black focus:ring-2"
              />
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Available only</span>
              </div>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleApply}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Apply Filters
          </button>
          <button
            onClick={handleClear}
            className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-300 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}