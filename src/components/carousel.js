import Imagen1 from '../assets/imagenes/carousel/imagen1.jpg'
import Imagen2 from '../assets/imagenes/carousel/imagen2.jpg'
import Imagen3 from '../assets/imagenes/carousel/imagen3.jpg'
import Imagen4 from '../assets/imagenes/carousel/imagen4.jpg'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CarouselComponents (){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <div className="max-w-full mx-auto ">
            <Carousel 
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={2000}    
            >
                
                <div className='w-full h-[600px]'>
                    <img className='w-full' src={Imagen1}></img>
                </div>
                
                <div className='w-full h-[600px]'>
                    <img className='w-full' src={Imagen2}></img>
                </div>
                
                <div className='w-full h-[600px]'>
                    <img className='w-full' src={Imagen3}></img>
                </div>

                <div className='w-full h-[600px]'>
                    <img className='w-full' src={Imagen4}></img>
                </div>
                
            </Carousel>
</div>
    )
}

export default CarouselComponents;