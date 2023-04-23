import React from 'react'
import backgroundImage from '../assets/about/bg.png'

import Headline from '../components/shared/Headline'
import imgProfile from '../assets/about/profile.png'
import Logo from '../assets/lamourbrutlogo.png'
import Gallery from '../components/shared/Gallery'

const Profile = () => {
  return (
    <div className="profile">
      <div>
        <div className="ml-1 mt-2">
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

    </div>
  )
}


const Article = ({
  title,
  images,
  description,
  credits,
  createDate,
}) => {
  return (
    <div className="article bg-white overflow-hidden">
      <Headline headlines={[title]} textSize={16} animated={false} />
      <div className="content p-4">
        <div className="article-content">
          <p className="description mb-6">
            {description}
          </p>
          <Gallery />
          <div className="credits flex gap-4 mt-6">
            <a href="" className="text-blue-500 underline">
              test
            </a>
            <a href="" className="text-blue-500 underline">
              test
            </a>
            <a href="" className="text-blue-500 underline">
              test
            </a>
            <a href="" className="text-blue-500 underline">
              test
            </a>
            <a href="" className="text-blue-500 underline">
              test
            </a>
            <a href="" className="text-blue-500 underline">
              test
            </a>

          </div>
        </div>
      </div>
      <Headline headlines={[title]} textSize={16} animated={false} />
    </div>
  )
}


const Content = () => {
  return (
    <div className="content flex flex-col gap-12 mb-24">
      <Article
        title="Lorem ipsum dolor sit amet consectetur"
        images={[]}
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsa perferendis fugit voluptate inventore ipsam libero exercitationem quod iste, porro blanditiis error sequi, tempora amet itaque earum optio enim dolore."
      />
      <Article
        title="Lorem ipsum dolor sit amet consectetur"
        images={[]}
        description="Lorem  ipsam libero exercitationem quod iste, p"
      />
      <Article
        title="Lorem ipsum dolor sit amet consectetur"
        images={[]}
        description="Lorem  ipsam libero exercitationem quod iste, p"
      />
      <Article
        title="Lorem ipsum dolor sit amet consectetur"
        images={[]}
        description="Lorem  ipsam libero exercitationem quod iste, p"
      />
    </div>
  )
}

const AboutUs = () => {
  return (
    <div>
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
    </div>
  )
}

export default AboutUs
