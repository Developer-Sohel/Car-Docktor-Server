import { useEffect, useState } from "react";
import { ServicesCart } from "./ServicesCart";


export const Services = () => {

    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('Services.json')
        .then(res=> res.json())
        .then(data=>setServices(data));
    },[])
  return (
    <div className="mt-8 mb-8">
        <div className="text-center space-x-4">
            <h1 className="text-2xl font-bold text-red-500"> Our Ser Area</h1>
           
            <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
        </div>
        <div className="divider"></div>
      <div className="grid grid-cols-1  lg:grid-cols-3 mx-auto  py-5 px-6 lg:w-4/5 gap-8">
      {
        services.map(service => <ServicesCart key={service._id}
            servic={service}
        
        ></ServicesCart>)
      }
      </div>
     <div className="justify-center flex">
     <button className="btn btn-outline btn-error text-red-500 ">More Services</button>
     </div>

    </div>
  )
}
