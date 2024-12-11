import { useState } from "react";

export default function HeroSection() {
  const [torrentLink, setTorrentLink] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTorrentLink(e.target.value);
  };

  const handleDownloadClick = () => {
    alert("Download started for: " + torrentLink);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white ">
     
      <h1 className="text-6xl font-bold text-gray-800 mb-6">
        Torrent Hunt
      </h1>
      <p className="text-1xl text-gray-800 mb-6 w-[80%] text-center">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      </p>


      <div className="w-full max-w-lg">
        <div className="flex items-center border border-gray-300 rounded-full shadow-md p-2">
          <label className="flex items-center justify-center m-2 cursor-pointer">
            <input type="file" className="hidden" />
            <span className="items-center text-xl font-bold text-gray-700">+</span>
          </label>
          <input
            type="text"
            placeholder="Paste torrent link here"
            className="flex-grow outline-none px-4 py-2 text-gray-700"
            value={torrentLink}
            onChange={handleInputChange}
          />
          <button
            onClick={handleDownloadClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Download
          </button>
        </div>
      </div>

      <div className="w-screen mt-10">
        <h2 className="text-xl font-medium text-gray-800 m-4">
          Latest Movies
        </h2>
        <div className="flex overflow-x-scroll space-x-4 scrollbar-hidden">
          {["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 3", "Movie 4", "Movie 5", "Movie 3", "Movie 4", "Movie 5"].map(
            (movie, index) => (
              <div
                key={index}
                className="w-40 h-60 bg-gray-200 flex-shrink-0 rounded-lg shadow-md flex items-center justify-center text-gray-700"
              >
                {movie}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
