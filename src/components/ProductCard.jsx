export default function ProductCard({ product }) {
  return (
    <div
      className="
        bg-white shadow rounded-xl p-4 flex flex-col items-center
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
      "
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-52 object-contain mb-4"
      />

      <h2 className="font-semibold text-center mb-2">
        {product.title.substring(0, 50)}...
      </h2>

      <p className="text-gray-700 mb-3">${product.price} USD</p>

      <button
        className="
          bg-black text-white px-4 py-2 rounded-md
          hover:bg-neutral-800 transition-all duration-300
        "
      >
        View Details
      </button>
    </div>
  );
}
