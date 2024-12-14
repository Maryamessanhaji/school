import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const bgImage = "https://cdn.pixabay.com/photo/2021/01/21/16/49/books-5937823_640.jpg";
  // const bgImage = "https://i.pinimg.com/236x/e7/3a/23/e73a232026ff37d37693d00cb2fde94b.jpg";


  return (
    <section
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
    className="flex w-full h-auto bg-cover bg-center bg-no-repeat items-center justify-center"
  >
     <div className="  bg-cover bg-center w-full h-screen">
      <div className="relative container mx-auto flex flex-col  justify-center text-center h-full px-4">
        <div className="text-right max-w-2xl">
          <h1 className="text-gray-700 text-4xl md:text-6xl font-bold leading-tight mb-6">
                  مرحباً بكم في منصتنا التعليمية
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
          نقدم لكم أفضل الموارد التعليمية المبتكرة لتعزيز مستوى تعلمكم. مع
                  منصتنا، التعليم يصبح أسهل وأكثر متعة.          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-600 text-gray-800 py-2 px-6 rounded-lg shadow-lg hover:bg-amber-500 hover:text-white transition duration-300">
                <Link to ='/courses'>
                استكشف المزيد
                </Link>
               </button>
           
          </div>
        </div>
      </div>
  
     </div>
  
   
  
</section>

    
        
      );
    }
    
 
