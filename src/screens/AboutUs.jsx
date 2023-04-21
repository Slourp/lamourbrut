import React from 'react'
import backgroundImage from '../assets/about/bg.png'
import { StickyContainer, Sticky } from 'react-sticky'
import Headline from '../components/shared/Headline'
import imgProfile from '../assets/about/profile.png'
import Logo from '../assets/lamourbrutlogo.png'

const Profile = () => {
  return (
    <div className="profile">
      <Headline size="24px" title={'WELCOME IN OUR MIND'} />
      <div>
        <div className="ml-1 mt-2 flex justify-between">
          <div className='ml-2'>
            <a href="" className="text-blue-500 underline">
              lamour brut
            </a>
            <img
              className="w-32 h-32"
              src={imgProfile}
              alt=""
            />
          </div>
          <div>
          <img src={Logo} alt="" />
        </div>
          <p
            style={{
              fontSize: '12px',
              maxWidth: '200px',
              textAlign: 'justify',
              margin: '4rem 2rem',
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium voluptates aliquam quisquam, saepe labore
            maxime vel amet illum.
          </p>
          <span></span>

        </div>
       
      </div>
      <div className="flex items-center ml-2">
        <p className="mr-4 text-base">LIENS :</p>
        <ul className="links flex text-blue-500 underline gap-3">
          <li>
            <a href="">Our Story</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Mail</a>
          </li>
        </ul>
      </div>
      <div className="flex ml-auto mt-14 mr-2">
        <p className="visit ml-auto text-base">VISITES : 2000</p>
      </div>
      <Headline size="24px" title={'WELCOME IN OUR MIND'} />
    </div>
  )
}

const Article = () => {
  return (
    <div className="article">
      <Headline size="24px" title={'Vancouver Fashion Week'} />
      <div className="article-content">
        <div className="images"></div>
        <p className="description"></p>
        <div className="credits"></div>
      </div>
      <p className="createDate"></p>
    </div>
  )
}

const articles = [
  {
    title: '',
    images: [],
    description: '',
    credits: {
      type: '',
      people: [
        {
          name: '',
          href: '',
        },
        {
          name: '',
          href: '',
        },
        {
          name: '',
          href: '',
        },
      ],
    },
    createDate: '',
  },
  {
    title: '',
    images: [],
    description: '',
    credits: {
      type: '',
      people: [
        {
          name: '',
          href: '',
        },
        {
          name: '',
          href: '',
        },
        {
          name: '',
          href: '',
        },
      ],
    },
    createDate: '',
  },
  {
    title: '',
    images: [],
    description: '',
    credits: {
      type: '',
      people: [
        {
          name: '',
          href: '',
        },
        {
          name: '',
          href: '',
        },
        {
          name: '',
          href: '',
        },
      ],
    },
    createDate: '',
  },
]

const Content = () => {
  return (
    <div className="content flex flex-col gap-12">
      {articles.map((image, index) => (
        <div className=" min-h-[500px] bg-white  ">
          <Article
            key={index}
            title={image.title}
            images={image.images}
            description={image.description}
            credits={image.credits}
          />
        </div>
      ))}
    </div>
  )
}

const AboutUs = () => {
  return (
    <StickyContainer>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'repeat',
          minHeight: '100vh',
        }}
      >
        <h1>About us</h1>
        <div className="max-w-[1200px] mx-auto flex gap-14 mt-24 items-start">
          <div className=" bg-white  w-1/3  min-h-[400px]">
            <Profile />
          </div>
          <div className="  w-2/3 min-h-screen">
            <Content />
          </div>
        </div>
      </div>
    </StickyContainer>
  )
}

export default AboutUs
