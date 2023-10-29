import React from "react";
import Show from "@/components/Show";
import Sidebar from "@/components/sidebar";
import CardSidebar from "@/components/CardSidebar";
import TapPartial from "@/components/TabPartial";


export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      My Post: {params.slug}
      <TapPartial />
      <div className="flex">
        
        <div className="w-1/5 bg-red-700">
          <Sidebar />
        </div>

        <div className="w-3/5 bg-blue-500">
          <Show />
        </div>

        <div className="w-1/5 bg-green-500">
          <CardSidebar />
        </div>
        
        
      </div> 
  </div>
  );
}
