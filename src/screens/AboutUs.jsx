import React from 'react'
import backgroundImage from '../assets/about/about-us.jpg'
import Headline from '../components/shared/Headline'
import imgProfile from '../assets/about/profile.png'
import Logo from '../assets/lamourbrutlogo.png'
import Gallery from '../components/shared/Gallery'
import Footer from '../layout/Footer'
import { headline4 } from '../data/headlines'
import './About.css'

import {
  article1,
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
} from '../components/shared/Images'

const Profile = () => {
  const handleContactUs = () => {
    window.location.href = 'mailto:contactlamourbrut@gmail.com'
  }
  return (
    <div
      className="profile flex flex-col items-center py-5"
      style={{ border: '7px solid black' }}
    >
      <div>
        <div className="ml-2 mt-2 flex flex-col items-center">
          <div>
            <img className="w-32 h-32" src={imgProfile} alt="" />
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <p
            className="font-arial-black"
            style={{
              fontSize: '20px',
              textAlign: 'center',
              margin: '2rem',
            }}
          />
          <span />
        </div>
      </div>
      <div className="flex items-center ml-2">
        <ul className="font-arial-black links flex text-lbgreen font-bold  underline gap-3 max-xs:text-[12px] max-sm:text-[15px] text-[14px] max-lg:text-[10px]">
          <li>
            <a href="/story">OUR STORY</a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lamour_brut/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>
            <a href="" onClick={handleContactUs}>
              MAIL
            </a>
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
      <Headline headlines={[title]} textSize={20} animated />
      {children}
      <Headline headlines={[createDate]} textSize={16} animated />
    </div>
  )
}

const Content = () => {
  return (
    <div className="content flex flex-col gap-10 mb-24">
      <Article
        className="article"
        title="PRESS"
        createDate="#posted on Thursday 11th March 2023"
      >
        <ul className="font-arial-black font-bold flex gap-3 underline justify-center h-[100px] items-center max-xs:text-[6px] max-sm:text-[10px] text-[16px] max-lg:text-[11px]">
          <li>
            <a
              href="https://www.vogue.mx/moda/galeria/vancouver-fashion-week-2022-como-la-plataforma-de-disenadores-responsables"
              target="_blank"
              rel="noopener noreferrer"
            >
              VOGUE MEXIQUE
            </a>
          </li>
          <li>
            <a
              href="https://flanellemag.com/amour-brut-fw22-pursuit-of-happiness-at-vancouver-fashion-week/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FLANELLE
            </a>
          </li>
          <li>
            <a
              href="https://www.jandrewspeaks.com/2022/04/20/lamour-brut-is-brave-bold-at-vfw-f-w22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DRESS THE PART
            </a>
          </li>
          <li>
            <a
              href="https://www.vogue.co.kr/2022/05/13/%EB%B0%B4%EC%BF%A0%EB%B2%84%ED%8C%A8%EC%85%98%EC%9C%84%ED%81%AC-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VOGUE COREE
            </a>
          </li>
          <li>
            <a
              href="https://www.moncarnet-gala.fr/articles/view/L-AMOUR-BRUT"
              target="_blank"
              rel="noopener noreferrer"
            >
              GALA
            </a>
          </li>
        </ul>
      </Article>

      <Article
        title="VANCOUVER FASHION WEEK APRIL 22"
        createDate="#posted on Friday 8th April 2022"
      >
        <div>
          <Gallery images={article1} loading="lazy" />
          <p className="p-4 text-article">
            Hello,
            <br /> You can find there our last collection PURSUIT OF
            HAPPINESS that was presented at the Vancouver Fashion Week
            in 2022. This collection tells the story of life, through
            parts of it from childhood to college, the working life
            and the wedding. As it is for some people the consecration
            of Happiness.
            <br /> Hope you like it,
            <br /> xoxo, L'AMOUR BRUT
          </p>
        </div>
      </Article>
      <Article
        className="article"
        title="SHOOT PURSUIT OF HAPPINESS"
        createDate="#posted on Saturday 23rd April 2022"
      >
        <div>
          <p className="p-4 text-article">
            To tell you a bit about this shoot, we worked with our
            family on it and we can feel it through those photos. It
            is important to us to work with our friends, our brothers
            and sisters, and our family in one word. The most
            important thing is to create a respectful environment.
            Discover our photos and backstage of the Pursuit of
            Happiness shoot.
          </p>
          <div className="text-center font-arial-black p-8  max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            BY{' '}
            <a
              className="underline font-bold text-lbgreen "
              href="https://www.instagram.com/maxscrd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MAXIME SICARD
            </a>
          </div>
          <Gallery images={person7} loading="lazy" />
          <div className="text-center font-arial-black p-8  max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            BY{' '}
            <a
              className="underline font-bold text-lbgreen "
              href="https://www.instagram.com/lmbinet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LOUISE BINET
            </a>
          </div>

          <Gallery images={person8} loading="lazy" />
        </div>
        <ul className="flex justify-around p-8 font-semibold max-xs:text-[12px] max-sm:text-[15px] text-[14px] max-lg:text-[10px]">
          <li className="flex flex-col gap-1 ">
            <p className="font-arial-black   max-xs:text-[10px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
              ASSISTANTS PLATEAUX
            </p>
            <li />
            <a
              className="underline text-lbgreen "
              href="https://www.instagram.com/lilian.aoust/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LILIAN AOUST
            </a>
            <a
              className="text-lbgreen underline"
              href="https://www.instagram.com/oscar_dubois"
              target="_blank"
              rel="noopener noreferrer"
            >
              OSCAR DUBOIS
            </a>
          </li>
          <li className="flex flex-col gap-1">
            <p className="font-arial-black  max-xs:text-[10px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
              MANNEQUINS
            </p>
            <a
              className="text-lbgreen underline"
              href="https://www.instagram.com/ines_dacosta_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INES
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/ia.steph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              STEPHANE
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/aminepuisable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AMINE
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/gnurbanel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LENA
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/ylanbougaieff/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YLAN
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/delgcht/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DELPHINE
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/cmartindeline/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CELIA
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/mak_kitah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MAK KITÄH
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/rouchonparis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ROUCHON PARIS
            </a>
            <a
              className="text-lbgreen underline "
              href="https://www.instagram.com/zdoudaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MUA
            </a>
          </li>
        </ul>
      </Article>

      <Article
        className="article"
        title="COLLABORATION WITH SPEOS PHOTOGRAPHERS"
        createDate="#posted on Thursday 11th March 2023"
      >
        <p className="p-4 text-article">
          This year we had the opportunity to work with photographers
          from the SPEOS photo school.They all imagined their story
          through the theme we gave them:
          <br /> DRAMATURGY IN REAL LIFE <br /> Discover the universe
          of each photographer through their photos and their
          Instagram.
        </p>
        <div className="text-center font-arial-black p-8">
          <p className="m-5 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            CIRCLE OF LIFE BY{' '}
            <a
              className="underline text-lbgreen font-bold"
              href="https://www.instagram.com/erakl.rakums/"
              target="_blank"
              rel="noopener noreferrer"
            >
              KAREL VALDMANN
            </a>
          </p>
          <Gallery images={person1} loading="lazy" />
          <p className="m-5 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            UNIVERS BY{' '}
            <a
              className="underline text-lbgreen font-bold"
              href="https://www.instagram.com/terada_natsuki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TERADA NATSUKI
            </a>
          </p>
          <Gallery images={person5} loading="lazy" />
          <p className="m-5 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            SELFLOVE BY{' '}
            <a
              className="underline text-lbgreen font-bold"
              href="https://www.instagram.com/amirasnaerosjabali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AMIRA SNAEROS JABALI
            </a>
          </p>
          <Gallery images={person3} loading="lazy" />
          <p className="m-5 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            US AGAINST THE WOLD BY{' '}
            <a
              className="underline text-lbgreen font-bold"
              href="https://www.instagram.com/studiogarso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RAPHAEL GARSAULT
            </a>
          </p>
          <Gallery images={person4} loading="lazy" />
          <p className="m-5 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            AFTER WASHING PARTY BY{' '}
            <a
              className="underline text-lbgreen font-bold"
              href="https://www.instagram.com/elyasaiapina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ELYA SAIAPINA
            </a>
          </p>
          <Gallery images={person2} />
          <p className="m-5 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            LA FEMME BY{' '}
            <a
              className="underline text-lbgreen font-bold"
              href="https://www.instagram.com/noabayle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NOA BAYLE
            </a>
          </p>
          <Gallery images={person6} loading="lazy" />
        </div>
        <p className="text-center m-5 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
          CREDITS ECOLE:{' '}
          <a
            className="underline text-lbgreen font-bold"
            href="https://www.instagram.com/speos_photo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SPEOS
          </a>
        </p>
      </Article>
    </div>
  )
}

const AboutUs = () => {
  return (
    <div>
      <div
        className="bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center 10px', // Déplace le fond d'écran de 10 pixels vers le bas
        }}
      >
        <div className="mt-12 overflow-hidden">
          <Headline
            headlines={headline4}
            backgroundColor="bg-lbpink"
            textColor="text-lbgreen"
            textSize={32}
          />
        </div>

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
