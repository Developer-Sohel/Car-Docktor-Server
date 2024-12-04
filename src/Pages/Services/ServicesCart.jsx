import { IoArrowForwardSharp } from "react-icons/io5";
export const ServicesCart = ({servic}) => {
    const {title, img, price}=servic;
  return (
<div>
        <div>

        <div className="card bg-base-100 lg:w-[364px] h-[348px]   shadow-md">
        <figure>
            <img
            src={img}
            alt="Shoes" className="lg:h-60 w-full "/>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}!</h2>
            <div className="flex">
            <p className="text-red-500 font-bold">Price: ${price}</p>
            <p className="justify-end text-red-500 font-bold "> <IoArrowForwardSharp /> </p>
            </div>
           
        </div>
        </div>   
    </div>
</div>
    
  )
}
