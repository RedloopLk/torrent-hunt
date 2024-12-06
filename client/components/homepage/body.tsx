import { useRef } from "react";

export default function Body() {

    const fileInputRef = useRef<HTMLInputElement | null>(null); 

    const handleButtonClick = () => {
        
        fileInputRef.current?.click(); 

    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const selectedFile = event.target.files?.[0]; 
        if (selectedFile) {
            console.log("Selected file:", selectedFile.name); 
            alert("File added"); 
        }
    
}
    return (
        <div className="flex flex-col items-center  h-screen bg-gray-100">

<div>
<div className="flex items-center justify-center h-40 text-center m-20">
    <div>
        <p className="font-bold text-4xl mb-4">
            Lorem Ipsum
        </p>
        <p className="font-serif items-center justify-center">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.
        </p>
    </div>
</div>

                </div>

           
            <div className="flex items-center w-[60%] space-x-4">

               <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden"/>
                
                <button onClick={handleButtonClick} className=" flex items-center justify-center bg-white text-white px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition">
                    <span className="text-lg font-bold text-black">+</span>
                </button>

              
                <input
                    id="search"
                    type="text"
                    placeholder="Enter torrent link..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

<button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-400 transition">
                    <span className="text-lg  text-black">Download</span>
                </button>
            </div>
        </div>
    );
}
