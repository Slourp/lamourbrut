import React from 'react'
import backgroundImage from '../assets/about/bg.png'
import { StickyContainer, Sticky } from 'react-sticky';
import Headline from '../components/shared/Headline';
const Profile = () => {
  return (
    <div className='profile'>
      <Headline
        size="24px"
        title={"Vancouver Fashion Week"}
      />
      <div>
        <div>
          <a href=''></a>
          <img src='' alt='' />
        </div>
        <div>
          <img src='' alt='' />
          <p></p>
        </div>
      </div>

      <ul className='links'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p className='visits'></p>
    </div>
  );
};

const Article = () => {
  return (
    <div className='article'>
      <Headline
        size="24px"
        title={"Vancouver Fashion Week"}
      />
      <div className='article-content'>
        <div className='images'></div>
        <p className='description'></p>
        <div className='credits'></div>
      </div>
      <p className='createDate'></p>
    </div>

  );
};


const articles = [{
  title: '',
  images: [],
  description: '',
  credits: {
    type: "",
    people: [
      {
        name: "",
        href: ""
      },
      {
        name: "",
        href: ""
      },
      {
        name: "",
        href: ""
      }
    ]
  },
  createDate: ''
},
{
  title: '',
  images: [],
  description: '',
  credits: {
    type: "",
    people: [
      {
        name: "",
        href: ""
      },
      {
        name: "",
        href: ""
      },
      {
        name: "",
        href: ""
      }
    ]
  },
  createDate: ''
},
{
  title: '',
  images: [],
  description: '',
  credits: {
    type: "",
    people: [
      {
        name: "",
        href: ""
      },
      {
        name: "",
        href: ""
      },
      {
        name: "",
        href: ""
      }
    ]
  },
  createDate: ''
}
]


const Content = () => {
  return (
    <div className='content flex flex-col gap-12'>
      {
        articles.map((image, index) => (
          <div className=' min-h-[500px] bg-white  '>
            <Article
              key={index}
              title={image.title}
              images={image.images}
              description={image.description}
              credits={image.credits}
            />
          </div>
        ))
      }
    </div >
  );
};


const AboutUs = () => {
  return (
    <StickyContainer>
      <div className='bg-image' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
      }}>




        <h1>About us</h1>
        <div className='max-w-[1200px] mx-auto flex gap-14 mt-24 items-start'>

          <div className=' bg-white  w-1/3  min-h-[600px]'>
            <Profile />
          </div>
          <div className='  w-2/3 min-h-screen'>
            <Content />
          </div>
        </div>
      </div>
    </StickyContainer>
  )
}

export default AboutUs
