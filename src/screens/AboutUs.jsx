import React from 'react'
import backgroundImage from '../assets/about/aboutus.jpg'
import Headline from '../components/shared/Headline'
import imgProfile from '../assets/about/profile.png'
import Logo from '../assets/lamourbrutlogo.png'
import Gallery from '../components/shared/Gallery'
import GalleryPoh from '../components/shared/GalleryPoh'
import Footer from '../layout/Footer'
import './About.css'
import PhotographerList from '../components/shared/Photographers'

const Profile = () => {
  return (
    <div className="profile flex flex-col items-center h-[1600px]">
      <div>
        <div className="ml-2 mt-2 flex flex-col items-center">
          <div>
            <a href="" className="text-blue-500 underline ml-5">
              lamour brut
            </a>
            <img className="w-32 h-32" src={imgProfile} alt="" />
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <p
            style={{
              fontSize: '16px',
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

const Article = ({
  title,
  name,
  images,
  description,
  credits,
  createDate,
  links,
  linksPoh,
  linksPohNext,
  Galery,
}) => {
  return (
    <div className="article bg-white overflow-hidden">
      <Headline headlines={[title]} textSize={20} animated={false} />
      <div className="content p-4">
        <div className="article-content">
          {images.map((image, index) => (
            <img src={image} key={index} alt={`Image ${index + 1}`} />
          ))}
          <p style={{
            textAlign: 'center',
            padding: '2rem 3rem'
          }}>{description}</p>
          {links && (
            <div className="links-presse">
              {links.map((link, index) => (
                <a href={link.url} key={index}>
                  {link.title}
                </a>
              ))}
            </div>
          )}

          <div className="poh-content">
            {linksPoh && (
              <div className="links-poh">
                <p>PHOTOGRAPHES :</p>
                {linksPoh.map((link, index) => (
                  <a href={link.url} key={index}>
                    {link.name}
                  </a>
                ))}
              </div>
            )}

            {linksPohNext && (
              <div className="links-poh">
                <p>ASSISTANTS PLATEAUX :</p>
                {linksPohNext.map((link, index) => (
                  <a href={link.url} key={index}>
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>{Galery}</div>
          {/*    <div className='speos'>
            <ArticleSpeos />
          </div> */}
        </div>
      </div>
      <Headline
       headlines={[createDate]}
       textSize={16}
      animated={false} />
    </div>
  )
}

const Content = () => {
  return (
    <div className="content flex flex-col gap-12 mb-24">
      <Article
        title="PRESSE"
        createDate="#Posté le Jeudi 27 Avril 2023"
        images={[]}
        links={[
          {
            title: 'VOGUE MEXIQUE',
            url: 'https://www.vogue.mx/moda/galeria/vancouver-fashion-week-2022-como-la-plataforma-de-disenadores-responsables',
          },
          {
            title: 'FLANELLE',
            url: 'https://flanellemag.com/amour-brut-fw22-pursuit-of-happiness-at-vancouver-fashion-week/',
          },
          {
            title: 'DRESS THE PART',
            url: 'https://www.jandrewspeaks.com/2022/04/20/lamour-brut-is-brave-bold-at-vfw-f-w22/',
          },
          {
            title: 'VOGUE COREE',
            url: 'https://www.vogue.co.kr/2022/05/13/%EB%B0%B4%EC%BF%A0%EB%B2%84%ED%8C%A8%EC%85%98%EC%9C%84%ED%81%AC-2/',
          },
        ]}
      />
      <Article
        title="VANCOUVER FASHION WEEK APRIL 22"
        createDate="#Posté le Jeudi 27 Avril 2023"
        images={[]}
        description="Hello, You can find there our last collection PURSUIT OF HAPPINESS that was presented at the Vancouver Fashion Week in 2022. This collection tells the story of life, through parts of it from childhood to college, the working life and the wedding. As it is for some people the consecration of Happiness. Hope you like it,
        xoxo, L'AMOUR BRUT"
        Galery={<Gallery />}
      />
      <Article
        title="SHOOT POURSUIT OF HAPPINESS"
        createDate="#Posté le Jeudi 27 Avril 2023"
        images={[]}
        description="To tell you a bit about this shoot, we worked with our family on it and we can feel it through those photos. It is important to us to work with our friends, our brothers and sisters, and our family in one word. The most important thing is to create a respectful environment.
        Discover our photos and backstage of the Pursuit of Happiness shoot. "
        Galery={<GalleryPoh />}
        linksPoh={[
          {
            name: 'LOUIS BINET',
            url: 'https://www.instagram.com/lmbinet/',
          },
          {
            name: 'MAXIME SICARD',
            url: 'https://www.instagram.com/maxscrd/',
          },
        ]}
        linksPohNext={[
          {
            name: 'LILIAN AOUST',
            url: 'https://www.instagram.com/lilian.aoust/',
          },
          {
            name: 'OSCAR DUBOIS',
            url: 'https://www.instagram.com/oscar_dubois/',
          },
        ]}
      />
      <Article
        title="COLLABORATION WITH SPEOS PHOTOGRAPHERS"
        createDate="#Posté le Jeudi 27 Avril 2023"
        Galery={<PhotographerList />}
        images={[]}
        description="This year we had the opportunity to work with photographers from the SPEOS photo school.They all imagined their story through the theme we gave them: DRAMATURGY IN REAL LIFEDiscover the universe of each photographer through their photos and their Instagram. "
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
      <Footer />
    </div>
  )
}

export default AboutUs
