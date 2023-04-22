import React from 'react';
import Image1 from '../../assets/home/amourbrut014.jpg';
import Image2 from '../../assets/home/amourbrut009.jpg';
import Image3 from '../../assets/home/amourbrut008.jpg';
import Image4 from '../../assets/home/amourbrut001.jpg';

const images = [Image1, Image2, Image3, Image4];

const Backstage = () => {
  return (
    <section className="bg-black p-20">
      <h2 className='text-white text-[80px]' >Backstage</h2>
      <div className="grid grid-cols-4 gap-4 items-center">
        {images.map((image, index) => (
          <div key={index} className=' flex justify-center'>
            <img src={image} alt="" className="h-full object-cover backstage-img" />
          </div>
        ))}
      </div>
      <p className='text-white mt-12'>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam
        libero, eget lacinia nisl nisl eget nisl. Sed tincidunt, nisl
      </p>
    </section>
  );
};

export default Backstage;




