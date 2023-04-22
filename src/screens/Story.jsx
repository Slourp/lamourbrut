import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Story = () => {
  return (
    <section className="py-[25vh] relative">
      <div className=' p-24'>
        <h2 className='absolute top-20 left-10 text-[160px] opacity-[.06]'>
          OUR STORY
        </h2>
        <div className=' text-center flex flex-col gap-20 uppercase text-[46px] font-arial-black '>
          <span>L’AMOUR BRUT tells the story of the opposition and the coming together of two visions.
            On the one hand, the love that wants to be light and sensual, and on the other hand, a raw exterior that is imperfect and refractory. When the imperceptible becomes obvious, we had to make it an asset, a common force that binds us in this story.
          </span>
          <span>We go where control does not act against but with madness.
            To link the useless to the aesthetic.
            In this love affair we are not two, but three, including the common love for clothing.</span>
          <span>
            L’AMOUR BRUT is also committed to sustainability and ethics.
            All our clothes are made in Portugal, which respects ethical and environmental standards. We aspire to be conscious. Aware of the consequences of the fashion industry, our materials are essentially roll ends.
          </span>
          <span>L’AMOUR BRUT celebrates all shapes, and all people.
            "We want people to be able to wear our clothes!
            Our models are everyday people, literally, we want to have models with a story, and see our clothes worn by people who recognize themselves in them."</span>
        </div >

      </div >
      <div className='flex justify-center'>
        <button onClick={() =>
          window.location.href = '/about-us'
        } className='flex items-center text-[44px] font-extrabold border-[6px] border-black uppercase p-1 px-5'>
          About us
          <HiArrowRight className='ml-4' />
        </button>
      </div>

    </section >
  );
};

export default Story;
