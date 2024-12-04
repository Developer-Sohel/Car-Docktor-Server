import about1 from "../../../assets/images/about_us/parts.jpg";
import about2 from "../../../assets/images/about_us/person.jpg";

export const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row items-center">
     <div className="lg:w-1/2 relative">
     <img
        src={about2}
        className="lg:w-3/4 rounded-lg shadow-2xl" />
     <img
        src={about1}
        className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" /> 
     </div>
      <div className="lg:w-1/2 space-y-3 p-4">
        <h1 className="text-xl text-red-700 font-bold">About</h1>
        <h1 className="text-6xl text-black font-bold">We are qualified & of experience in this field</h1>
        <p className="py-6">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <p className="py-6">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <button className="btn btn-error text-white">Get More Info</button>
      </div>
    </div>
  </div>    
  );
};
