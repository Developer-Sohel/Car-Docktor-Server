import bannar1 from '../../../assets/images/banner/5.jpg'
import bannar2 from '../../../assets/images/banner/2.jpg'
import bannar3 from '../../../assets/images/banner/3.jpg'
import bannar4 from '../../../assets/images/banner/4.jpg'


export const Bannar = () => {
  return (
    <div className="carousel w-full md:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={bannar1}
      className="w-full rounded-lg" />
    <div className="absolute left-5 right-5  bottom-0 flex -translate-y-1/2 transform justify-end gap-6
    ">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

    <div className="absolute left-0  bottom-0  h-full flex rounded-lg bg-gradient-to-r from-[#151515]
     to-[rgba(21, 21,21,0)]">
     <div className='text-white space-y-6 md:pl-16 w-1/3 md:py-16 p-5'>
      <h1 className='md:text-6xl text-3xl font-bold w-[463px] ]'>Affordable Price For Car Servicing</h1>
      <p className='md:w-[522px] w-[470px]'>There are many variations of passages of  available, but the majority
         have suffered alteration in some form</p>

         <div className='gap-6 flex'>
          <button className="btn btn-active btn-primary">Discover More</button>
          <button className="btn btn-outline btn-warning">Latest Project</button>
         </div>
     </div>
    </div>

 

  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={bannar2}
      className="w-full rounded-lg" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute left-0  bottom-0  h-full flex rounded-lg bg-gradient-to-r from-[#151515]
     to-[rgba(21, 21,21,0)]">
     <div className='text-white space-y-6 md:pl-16 w-1/3 md:py-16 p-5'>
      <h1 className='md:text-6xl text-3xl font-bold w-[463px] ]'>Affordable Price For Car Servicing</h1>
      <p className='w-[522px] '>There are many variations of passages of  available, but the majority
         have suffered alteration in some form</p>

         <div className='gap-6 flex'>
          <button className="btn btn-active btn-primary">Discover More</button>
          <button className="btn btn-outline btn-warning">Latest Project</button>
         </div>
     </div>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
   
    <img
      src={bannar3}
      className="w-full rounded-lg" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-6">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute left-0  bottom-0  h-full flex rounded-lg bg-gradient-to-r from-[#151515]
     to-[rgba(21, 21,21,0)]">
     <div className='text-white space-y-6 md:pl-16 w-1/3 md:py-16 p-5'>
      <h1 className='md:text-6xl text-3xl font-bold w-[463px] ]'>Affordable Price For Car Servicing</h1>
      <p className='w-[522px] '>There are many variations of passages of  available, but the majority
         have suffered alteration in some form</p>

         <div className='gap-6 flex'>
          <button className="btn btn-active btn-primary">Discover More</button>
          <button className="btn btn-outline btn-warning">Latest Project</button>
         </div>
     </div>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={bannar4}
      className="w-full rounded-lg" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 rounded-md transform justify-end gap-6">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute left-0  bottom-0  h-full flex rounded-lg   bg-gradient-to-r from-[#151515]
     to-[rgba(21, 21,21,0)]">
     <div className='text-white space-y-6 md:pl-16 w-1/3 md:py-16 p-5'>
      <h1 className='md:text-6xl text-3xl font-bold w-[463px] ]'>Affordable Price For Car Servicing</h1>
      <p className='w-[522px] '>There are many variations of passages of  available, but the majority
         have suffered alteration in some form</p>

         <div className='gap-6 flex'>
          <button className="btn btn-active btn-primary">Discover More</button>
          <button className="btn btn-outline btn-warning">Latest Project</button>
         </div>
     </div>
    </div>
  </div>
</div>
  )
}
