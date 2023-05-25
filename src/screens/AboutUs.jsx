import React from 'react'
import backgroundImage from '../assets/about/about-us.jpg'
import Headline from '../components/shared/Headline'
import imgProfile from '../assets/about/profile.png'
import Logo from '../assets/lamourbrutlogo.png'
import Gallery from '../components/shared/Gallery'
import Footer from '../layout/Footer'
import { headline4 } from '../data/headlines'
import CarousselUnivers from '../components/Caroussel/CarousselUnivers'
import CarousselCol from '../components/Caroussel/CarousselCol'
import CarousselSl from '../components/Caroussel/CarousselSl'
import CarousselUatw from '../components/Caroussel/CarousselUatw'
import CarousselAwp from '../components/Caroussel/CarousselAwp'
import CarousselLf from '../components/Caroussel/CarousselLf'
import HeadlineVertical from '../components/shared/HeadlineVertical'
import ImgAboutUs from '../assets/about/bandeau-aboutus.png'
import './About.css'

import {
  article1,
  person7,
  person8,
} from '../components/shared/Images'

const Profile = () => {
  const handleContactUs = () => {
    window.location.href = 'mailto:contactlamourbrut@gmail.com'
  }
  return (
    <div
      className="profile flex flex-col items-center py-5 lg:h-[600px]"
      style={{ border: '7px solid black' }}
    >
      <div>
        <div className="ml-2 mt-6 flex flex-col items-center">
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

      {/* PROFILE */}
      <div className="flex items-center ml-2">
        <ul className="flex flex-col font-arial-black links flex text-lbgreen font-bold  underline gap-3 max-xs:text-[12px] max-sm:text-[15px] text-[14px] max-lg:text-[8px] text-center">
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
            <button
              type="button"
              onClick={handleContactUs}
              className="underline"
            >
              MAIL
            </button>
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

const Article = ({ title, children, createDate, repetitions }) => {
  const repeatedTitles = Array(repetitions).fill(title)
  const repeatedCreateDates = Array(repetitions).fill(createDate)

  return (
    <div className="article bg-white overflow-hidden">
      <Headline headlines={repeatedTitles} textSize={20} animated />
      {children}
      <Headline
        headlines={repeatedCreateDates}
        textSize={16}
        animated
      />
    </div>
  )
}

const Content = () => {
  return (
    <div className="content flex flex-col gap-10 mb-24">
      {/* PRESS */}
      <div className="max-xs:mt-2">
        <Article
          className="article"
          title="PRESS"
          createDate="#posted on Thursday 11th March 2023"
          repetitions={100}
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
      </div>

      <Article
        title="VANCOUVER FASHION WEEK APRIL 22"
        createDate="#posted on Friday 8th April 2022"
        repetitions={100}
      >
        <div className="mx-0-auto">
          <p className="p-4 text-article font-times-new-roman">
            Hello,
            <br /> You can find there our last collection PURSUIT OF
            HAPPINESS that was presented at the{' '}
            <a
              className="underline text-lbgreen font-times-new-roman mx-1"
              href="https://www.instagram.com/vanfashionweek/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vancouver Fashion Week
            </a>
            in 2022. This collection tells the story of life, through
            parts of it from childhood to college, the working life
            and the wedding. As it is for some people the consecration
            of Happiness.
            <br /> Hope you like it,
            <br /> xoxo, L'AMOUR BRUT
          </p>

          <div className="mx-0-auto max-xs:m-0-auto">
            <Gallery images={article1} loading="lazy" />
          </div>
        </div>
      </Article>

      <Article
        className="article"
        title="SHOOT PURSUIT OF HAPPINESS"
        createDate="#posted on Saturday 23rd April 2022"
        repetitions={100}
      >
        <div className="mx-0-auto">
          <p className="p-4 text-article font-times-new-roman">
            To tell you a bit about this shoot, we worked with our
            family on it and we can feel it through those photos. It
            is important to us to work with our friends, our brothers
            and sisters, and our family in one word. The most
            important thing is to create a respectful environment.
            Discover our photos and backstage of the Pursuit of
            Happiness shoot.
          </p>

          {/* DIV PRINCIPALE */}
          <div className="flex justify-center gap-8 my-3 max-xs:flex-col max-xs:items-center max-lg:gap-6 max-lg:text-xs">
            {/* PHOTOGRAPH */}
            <div className="flex flex-col">
              <p className="max-xs:text-[12px] font-arial-black max-lg:text-[12px]">
                PHOTOGRAPH
              </p>
              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]">
                <a
                  className="underline text-lbgreen"
                  href="https://www.instagram.com/maxscrd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MAXIME SICARD
                </a>
              </div>
            </div>
            {/* ASSISTANTS */}
            <div className="flex flex-col items-baseline">
              <p className="max-xs:text-[12px] font-arial-black max-lg:text-[12px]">
                ASSISTANTS
              </p>
              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]">
                <a
                  className="underline text-lbgreen"
                  href="https://www.instagram.com/lilian.aoust/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LILIAN AOUST
                </a>
                <a
                  className="underline text-lbgreen"
                  href="https://www.instagram.com/maxscrd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LOUISE BINET
                </a>
                <a
                  className="text-lbgreen underline"
                  href="https://www.instagram.com/oscar_dubois"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OSCAR DUBOIS
                </a>
              </div>
            </div>
            {/* MODELS */}
            <div className="flex flex-col items-baseline">
              <p className="max-xs:text-[12px] font-arial-black mx-auto max-lg:text-[12px]">
                MODELS
              </p>
              <div className="flex">
                <ul className="flex flex-col">
                  <div className="flex flex-col items-baseline font-times-new-roman max-xs:text-[12px] mx-2">
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
                  </div>
                </ul>
                <ul className="flex flex-col items-baseline max-xs:text-[12px]">
                  <div className="flex flex-col items-baseline font-times-new-roman">
                    <a
                      className="text-lbgreen underline"
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
                      className="text-lbgreen underline"
                      href="https://www.instagram.com/mak_kitah/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MAKKITÄH
                    </a>
                    <a
                      className="text-lbgreen underline "
                      href="https://www.instagram.com/ylanbougaieff/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YLAN
                    </a>
                  </div>
                </ul>
              </div>
            </div>
            {/* PLACE */}
            <div className="flex flex-col">
              <p className="max-xs:text-[12px] font-arial-black max-lg:text-[12px]">
                PLACE
              </p>
              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]">
                <a
                  className="underline text-lbgreen"
                  href="https://www.instagram.com/rouchonparis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ROUCHON {/* PARIS */}
                </a>
              </div>

              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]" />
            </div>
          </div>

          <div className="">
            <Gallery images={person7} loading="lazy" />
          </div>

          {/* DIV PRINCIPALE */}
          <div className="flex justify-center gap-8 my-3 max-xs:flex-col max-xs:items-center py-5 max-lg:gap-4 max-lg:text-xs">
            {/* PHOTOGRAPH */}
            <div className="flex flex-col">
              <p className="max-xs:text-[12px] font-arial-black max-lg:text-[12px]">
                PHOTOGRAPH
              </p>
              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]">
                <a
                  className="underline text-lbgreen"
                  href="https://www.instagram.com/lmbinet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LOUISE BINET
                </a>
              </div>
            </div>
            {/* ASSISTANTS */}
            <div className="flex flex-col items-baseline">
              <p className="max-xs:text-[12px] font-arial-black max-lg:text-[12px]">
                ASSISTANTS
              </p>
              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]">
                <a
                  className="underline text-lbgreen"
                  href="https://www.instagram.com/lilian.aoust/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LILIAN AOUST
                </a>
              </div>
            </div>
            {/* MODELS */}
            <div className="flex flex-col items-baseline">
              <p className="max-xs:text-[12px] font-arial-black mx-auto max-lg:text-[12px]">
                MODELS
              </p>
              <div className="flex">
                <ul className="flex flex-col">
                  <div className="flex flex-col items-baseline font-times-new-roman max-xs:text-[12px] mx-2">
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
                  </div>
                </ul>
                <ul className="flex flex-col items-baseline max-xs:text-[12px]">
                  <div className="flex flex-col items-baseline font-times-new-roman">
                    <a
                      className="text-lbgreen underline"
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
                      className="text-lbgreen underline"
                      href="https://www.instagram.com/mak_kitah/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MAKKITÄH
                    </a>
                    <a
                      className="text-lbgreen underline "
                      href="https://www.instagram.com/ylanbougaieff/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YLAN
                    </a>
                  </div>
                </ul>
              </div>
            </div>
            {/* PLACE */}
            <div className="flex flex-col">
              <p className="max-xs:text-[12px] font-arial-black max-lg:text-[12px]">
                PLACE
              </p>
              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]">
                <a
                  className="underline text-lbgreen"
                  href="https://www.instagram.com/rouchonparis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ROUCHON {/* PARIS */}
                </a>
              </div>

              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]" />
            </div>
            {/* MUA */}
            <div className="flex flex-col">
              <p className="max-xs:text-[12px] font-arial-black max-lg:text-[12px]">
                MUA
              </p>
              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]">
                <a
                  className="underline text-lbgreen"
                  href="https://www.instagram.com/zdoudaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LISA
                </a>
              </div>

              <div className="flex flex-col font-times-new-roman max-xs:text-[12px]" />
            </div>
          </div>

          <div className="">
            <Gallery images={person8} loading="lazy" />
          </div>
        </div>
      </Article>

      <Article
        className="article"
        title="COLLABORATION WITH SPEOS PHOTOGRAPHERS"
        createDate="#posted on Thursday 11th March 2023"
        repetitions={100}
      >
        <p className="text-justify p-4 text-article font-times-new-roman">
          This year we had the opportunity to work with photographers
          from the
          <a
            className="underline text-lbgreen font-bold m-2"
            href="https://www.instagram.com/speos_photo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SPEOS
          </a>
          photo school. They all imagined their story through the
          theme we gave them:
          <br /> DRAMATURGY IN REAL LIFE <br /> Discover the universe
          of each photographer through their photos and their
          Instagram.
        </p>

        <div className="text-center font-arial-black max-xs:py- ">
          <p className="mt-9 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            CIRCLE OF LIFE BY{' '}
            <a
              className="underline text-lbgreen font-bold font-times-new-roman"
              href="https://www.instagram.com/erakl.rakums/"
              target="_blank"
              rel="noopener noreferrer"
            >
              KAREL VALDMANN
            </a>
          </p>
          <CarousselCol />
          <p className="mt-9 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            VENUS BY{' '}
            <a
              className="underline text-lbgreen font-bold font-times-new-roman"
              href="https://www.instagram.com/terada_natsuki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TERADA NATSUKI
            </a>
          </p>
          <CarousselUnivers />
          <p className="mt-9 max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            SELFLOVE BY{' '}
            <a
              className="underline text-lbgreen font-bold font-times-new-roman"
              href="https://www.instagram.com/amirasnaerosjabali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AMIRA SNAEROS JABALI
            </a>
          </p>
          <CarousselSl />
          <p className="mt-9  max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            US AGAINST THE WOLD BY{' '}
            <a
              className="underline text-lbgreen font-bold font-times-new-roman"
              href="https://www.instagram.com/studiogarso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RAPHAEL GARSAULT
            </a>
          </p>
          <CarousselUatw />
          <p className="mt-9  max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            AFTER WASHING PARTY BY{' '}
            <a
              className="underline text-lbgreen font-bold font-times-new-roman"
              href="https://www.instagram.com/elyasaiapina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ELYA SAIAPINA
            </a>
          </p>
          <CarousselAwp />
          <p className="mt-9  max-xs:text-[15px] max-sm:text-[15px] text-[18px] max-lg:text-[10px]">
            LA FEMME BY{' '}
            <a
              className="underline text-lbgreen font-bold font-times-new-roman"
              href="https://www.instagram.com/noabayle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NOA BAYLE
            </a>
          </p>
          <CarousselLf />
        </div>
      </Article>
    </div>
  )
}

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      {/*  <div className="absolute">
        <HeadlineVertical
          headlines={headline4}
          backgroundColor="bg-lbpink"
          textColor="text-lbgreen"
          textSize={32}
          animationDuration="10s"
        />
      </div> */}

      <div
        className="bg-fixed bg-cover bg-center bg-no-repeat flex-grow"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className="absolute top-[80px] animate-diagonal"
          onAnimationEnd={() => {
            const element = document.querySelector(
              '.animate-diagonal'
            )
            if (element) {
              element.classList.add('rotate')
            }
          }}
        >
          <img
            className="max-xs:h-[90px] max-lg:h-[100px]"
            src={ImgAboutUs}
            alt=""
          />
        </div>

        <div className="flex-col mx-auto sm:flex sm:flex-row gap-3 items-start pt-24 max-w-[1200px] p-8 justify-end">
          <div className=" bg-white w-full sm:w-1/5">
            <Profile />
          </div>
          <div className="w-full sm:w-2/3">
            <Content />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
