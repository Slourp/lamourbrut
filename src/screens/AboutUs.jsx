import React from 'react'
import backgroundImage from '../assets/about/aboutus2.jpg'
import Headline from '../components/shared/Headline'
import imgProfile from '../assets/about/profile.png'
import Logo from '../assets/lamourbrutlogo.png'
import Gallery from '../components/shared/Gallery'

import Footer from '../layout/Footer'
import './About.css'

import {
  article1,
  article2,
  person1,
  person2,
  person3,
  person4,
  person5,
} from '../components/shared/Images'

const Profile = () => {
  return (
    <div className="profile flex flex-col items-center  py-5">
      <div>
        <div className="ml-2 mt-2 flex flex-col items-center">
          <div>
            <a
              href=""
              className="text-blue-500 font-bold text-[25px] underline ml-5"
            >
              lamour brut
            </a>
            <img className="w-32 h-32" src={imgProfile} alt="" />
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <p
            style={{
              fontSize: '18px',

              textAlign: 'center',
              margin: '2rem',
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium voluptates aliquam quisquam, saepe labore
            maxime vel amet illum.
          </p>
          <span />
        </div>
      </div>
      <div className="flex items-center ml-2">
        <p className="mr-4 text-base">LIENS :</p>
        <ul className="links flex text-blue-500 underline gap-3">
          <li>
            <a href="/story">Our Story</a>
          </li>
          <li>
            <a href="https://www.instagram.com/lamour_brut/?hl=fr">
              Instagram
            </a>
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
        {/*         <p className="visit ml-auto text-base">VISITES : 2000</p>
         */}{' '}
      </div>
    </div>
  )
}

const Article = ({ title, children, createDate }) => {
  return (
    <div className="article bg-white overflow-hidden">
      <Headline headlines={[title]} textSize={20} animated={false} />
      {children}
      <Headline
        headlines={[createDate]}
        textSize={16}
        animated={false}
      />
    </div>
  )
}

const Content = () => {
  return (
    <div className="content flex flex-col gap-12 mb-24">
      <Article
        title="PRESSE"
        createDate="#Posté le Jeudi 27 Avril 2023"
      >
        <ul className="flex gap-12 underline justify-center h-[100px] items-center">
          <li>
            <a href="https://www.vogue.mx/moda/galeria/vancouver-fashion-week-2022-como-la-plataforma-de-disenadores-responsables">
              VOGUE MEXIQUE
            </a>
          </li>
          <li>
            <a href="https://flanellemag.com/amour-brut-fw22-pursuit-of-happiness-at-vancouver-fashion-week/">
              FLANELLE
            </a>
          </li>
          <li>
            <a href="https://www.jandrewspeaks.com/2022/04/20/lamour-brut-is-brave-bold-at-vfw-f-w22/">
              DRESS THE PART
            </a>
          </li>
          <li>
            <a href="https://www.vogue.co.kr/2022/05/13/%EB%B0%B4%EC%BF%A0%EB%B2%84%ED%8C%A8%EC%85%98%EC%9C%84%ED%81%AC-2/">
              VOGUE COREE
            </a>
          </li>
        </ul>
      </Article>
      <Article
        title="VANCOUVER FASHION WEEK APRIL 22"
        createDate="#Posté le Jeudi 27 Avril 2023"
      >
        <div>
          <Gallery images={article1} />
          <p className='p-4'>
            Hello, You can find there our last collection PURSUIT OF
            HAPPINESS that was presented at the Vancouver Fashion Week
            in 2022. This collection tells the story of life, through
            parts of it from childhood to college, the working life
            and the wedding. As it is for some people the consecration
            of Happiness. Hope you like it, xoxo, L'AMOUR BRUT
          </p>
        </div>
      </Article>
      <Article
        title="SHOOT POURSUIT OF HAPPINESS"
        createDate="#Posté le Jeudi 27 Avril 2023"
      >
        <div>
          <Gallery images={article2} />
          <p className='p-4'>
            To tell you a bit about this shoot, we worked with our
            family on it and we can feel it through those photos. It is
            important to us to work with our friends, our brothers and
            sisters, and our family in one word. The most important
            thing is to create a respectful environment. Discover our
            photos and backstage of the Pursuit of Happiness shoot.
          </p>
        </div>
      </Article>
      <Article
        title="COLLABORATION WITH SPEOS PHOTOGRAPHERS"
        createDate="#Posté le Jeudi 27 Avril 2023"
      >
        <div>
          <p>CIRCLE OF LIFE BY KAREL VALDMANN</p>
          <Gallery images={person1} />
          <p>UNIVERS BY TERADA NATSUKI</p>
          <Gallery images={person2} />
          <p>SELFLOVE BY AMIRA SNAEROS JABALI</p>
          <Gallery images={person3} />
          <p>US AGAINST THE WOLD BY RAPHAEL GARSAULT</p>
          <Gallery images={person4} />
          <p>AFTER WASHING PARTY BY ELYA SAIAPINA</p>
          <Gallery images={person5} />
          <p className='p-4'>
            This year we had the opportunity to work with photographers
            from the SPEOS photo school.They all imagined their story
            through the theme we gave them: DRAMATURGY IN REAL
            LIFEDiscover the universe of each photographer through their
            photos and their Instagram.
          </p>
        </div>
      </Article>
    </div>
  )
}

const AboutUs = () => {
  return (
    <div>
      <div
        className="bg-image'"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'repeat',

        }}
      >
        <div className="flex-col mx-auto sm:flex sm:flex-row gap-14 items-start pt-24 max-w-[1200px] p-8">
          <div className=" bg-white  w-full sm:w-1/3">
            <Profile />
          </div>
          <div className="w-full sm:w-2/3 min-h-screen">
            <Content />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
