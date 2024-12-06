export default function Navbar() {
    return (
        <nav className="bg-blue-500 text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
      
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">TorrentHub</span>
                </div>

                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-blue-300">Home</a>
                    <a href="#about" className="hover:text-blue-300">About Us</a>
                    <a href="#contact" className="hover:text-blue-300">Contact</a>
                </div>

                <div>
                    <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition duration-300">
                        Login
                    </button>
                </div>
            </div>

            
            <div className="md:hidden flex justify-center mt-3">
                <button className="bg-blue-700 px-4 py-2 rounded">Menu</button>
            </div>
        </nav>
    );
}
