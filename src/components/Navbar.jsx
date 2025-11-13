export default function Navbar({ search, setSearch }) {
    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm sticky top-0 z-50">

            <div className="flex items-center gap-2 text-xl font-semibold">
                <span className="text-2xl">🛒</span>
                <span>Web3 Shopping Cart</span>
            </div>

            <div className="hidden sm:flex items-center relative">
                <span className="absolute left-4 text-gray-500 text-lg">
                    🔍
                </span>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
      border pl-11 pr-4 py-3 rounded-full w-72 shadow-sm
      focus:outline-none focus:ring-2 focus:ring-black/30 
      transition-all
    "
                />
            </div>


        </nav>
    );
}
