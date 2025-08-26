import React, { useState } from 'react'
import { Layers } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { Palette, Target, Award,Menu,X   } from 'lucide-react';
import image35 from "../assets/image/image35.jpg";
import image33 from "../assets/image/image33.jpg";
import image4 from "../assets/image/image4.jpg";
import image6 from "../assets/image/image6.jpg";
import image13 from "../assets/image/image13.jpg";
import image8 from "../assets/image/image8.jpg";
import image14 from "../assets/image/image14.jpg"
import facebook from "../assets/image/facebook.png"
import instagram from "../assets/image/instagram.png"
import tiktok from "../assets/image/tic-tac.png"
import { Link } from 'react-router-dom';

export default function () {
    const card=[
        {
            titre:"Identité visuelle & \n Branding",
            icon:<Layers/>,
            text:"Creation de logos palettes de couleurs, \n chartes graphiques.",
            text2:"En savoir plus",
        },
         {
            titre:"Direction artitique",
            icon:<NotebookPen />,
            text:"Donner une cohérence visuelle à un projet.",
            text2:"En savoir plus",
        },
        {
            titre:"Créativité & Originalité",
            icon:<Palette />,
            text:"Proposer des designs uniques qui se démarquent",
            text2:"En savoir plus",
        },
    ]

    const view=[
        {
            image:image14,
            titre:" WEBSA",
            text2:"En savoir plus",
        },
        {
            image:image4,
            titre:"FLUNO",
            text2:"En savoir plus",
        },
        {
            image:image6,
            titre:"Branding fluno",
            text2:"En savoir plus",
        },
        {
            image:image13,
            titre:"EFJ",
            text2:"En savoir plus",
        }
    ]
   const [isOpen, setIsOpen] = useState(false);

    
  return (
    <div className='bg-[#0d0d0d] min-h-screen w-full'>
        <header className="bg-[#0d0d0d] min-h-screen">
      {/* NAVBAR */}
      <div className="flex justify-between items-center p-2 ">
        {/* LOGO */}
        <h1 className="text-xl text-[#E63946] font-bold">HG Vision Graphic</h1>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex gap-6 text-white text-md">
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/acceuil">Accueil</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/projets">Projets</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/infos">Infos</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/contact">Contact</Link></li>
        </ul>

        {/* BURGER (MOBILE) */}
        <div className="lg:hidden">
          {isOpen ? (
            <X className="text-white text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="text-white text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="lg:hidden bg-[#111] shadow-lg">
          <ul className="flex flex-col gap-4 text-white text-md p-4">
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/acceuil">Accueil</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/projets">Projets</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/infos">Infos</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
        <div className='lg:p-[50px] p-[-80px]'></div>
      {/* HERO SECTION */}
      <div className="lg:mt-20 flex flex-col lg:flex-row lg:h-screen mt-[50px]">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0  h-full object-cover ">
          <img src={image35} alt="" className="rounded-lg " />
        </div>

        {/* TEXTE */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-start px-5">
          <h2 className="text-xl font-bold text-[#E63946]">Hello, je suis Hardy</h2>
          <h3 className="text-white mt-3 font-bold text-2xl">Graphic Designer</h3>
          <p className="mt-3 text-white max-w-md">
            Je donne vie à vos idées avec des <br /> représentations claires et modernes.
          </p>
          <div className="mt-10">
            <button className="border border-[#E63946] px-6 py-2 text-white rounded-md bg-[#E63946] hover:bg-transparent transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1">
              <Link  to="/contact">Contact moi</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
        <div className='p-[100px]'></div>
        <div className='grid lg:flex lg:gap-5 justify-center items-center gap-3 lg:mt-[80px] -mt-[80px]'>
            {
                card.map((card, index)=>(
                    <div key={index} className='group flex flex-col border border-[#333533] w-64 h-auto p-5 bg-[#333533] hover:bg-[#E63946] rounded-md'>
                       <div className='flex lg:flex text-[#E63946] group-hover:text-white transition-colors duration-300'>
                        {card.icon}
                        </div>
                    <div className='text-justify text-white mt-3 font-bold group-hover:text-white'>
                         {card.titre}
                    </div>
                    <div className='text-white mt-5 group-hover:text-white'>
                         {card.text}
                    </div>
                    <div className='mt-3 text-[#E63946] flex lg:flex group-hover:text-white gap-2'>
                         <Link  to="/infos">{card.text2}</Link>
                         <Link  to="/infos"><ArrowRight size={20} className='mt-1'/></Link>
                    </div>
        </div>

                ))
            }
        </div>
        <div className="bg-[#111] py-10 text-white">
  <div className="max-w-6xl mx-auto text-center">
    {/* Nombre d'années d'expérience */}
    <div className="text-5xl font-bold text-red-600">12</div>
    <p className="text-lg mb-10">Années d'experiences</p>

    {/* Grid pour les stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-[#222] p-6 rounded-lg">
        <div className="text-2xl font-bold text-red-600">60+</div>
        <p>Clients</p>
      </div>
      <div className="bg-[#222] p-6 rounded-lg">
        <div className="text-2xl font-bold text-red-600">97%</div>
        <p>Clients Satisfaits</p>
      </div>
      <div className="bg-[#222] p-6 rounded-lg">
        <div className="text-2xl font-bold text-red-600">32+</div>
        <p>Projets terminés</p>
      </div>
      <div className="bg-[#222] p-6 rounded-lg">
        <div className="text-2xl font-bold text-red-600">20</div>
        <p>Achievements</p>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-5 gap-4">
  <div className="text-white flex flex-col gap-2">
    <h1 className="text-xl font-bold">Projets principaux</h1>
    <p className="text-sm lg:text-base">
       Explorez nos projets principaux et trouvez celui qui vous inspire.
    </p>
  </div>

  <button className="border border-[#E63946] px-4 py-2 text-white rounded-md bg-[#E63946] hover:bg-transparent transition-all duration-300">
   <Link  to="/projets">Tout voir</Link>
  </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
  {view.map((item, index) => (
    <div key={index} className="flex flex-col">
      {/* Card avec image */}
      <div className="bg-[#222] shadow-lg rounded-lg overflow-hidden w-full sm:w-64">
        <div className="flex justify-center items-center p-5">
          <img
            src={item.image}
            alt={`image-${index}`}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
      <h1 className="text-white text-lg ml-3 mt-2 text-start font-bold">{item.titre}</h1>
      <div className='mt-3 text-[#E63946] flex lg:flex group-hover:text-white gap-2'>
        <p><Link  to="/infos">{item.text2}</Link></p>
         <Link  to="/infos"><ArrowRight size={20} className='mt-1'/></Link>
        </div>
    </div>
  ))}
</div>

<div className="bg-[#111]  mt-10 p-5 ">
  <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-20">
    {/* Texte */}
    <div className="text-center lg:text-left lg:flex flex-col">
      <h1 className="text-white text-2xl lg:text-3xl font-bold">
        Travailons ensemble sur votre <br /> prochain projet
      </h1>
      <p className='text-white text-sm mt-4'>De la conception à la réalisation, nous vous aidons <br /> à concrétiser vos projets avec efficacité et créativité</p>
    </div>

    {/* Bouton */}
    <div>
       <button className="border border-[#E63946] px-6 py-2 text-white rounded-md bg-[#E63946] hover:bg-transparent transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1">
              <Link  to="/contact">Contact </Link>
            </button>
    </div>
  </div>
</div>

<div className='mt-10 flex lg:flex items-center justify-center'>
  <ul className='text-white flex gap-3 p-3 lg:flex lg:gap-6' >
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/acceuil">Accueil</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/projets">Projets</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/infos">Infos</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/contact">Contact</Link></li>
                </ul>
</div>

<div className='bg-[#111] mt-10 flex lg:flex justify-center items-center p-5'>
<div className=''>
  <h1 className='text-2xl text-[#E63946] font-bold p-1'>HG Vision Graphic</h1>
</div>
</div>

<div className='p-5'></div>
<div  className='flex lg:flex justify-center items-center gap-3 p-5'>
   <img src={facebook} alt="" className='w-6' />
   <img src={instagram} alt="" className='w-6' />
   <img src={tiktok} alt="" className='w-6' />
</div>
    </div>
  )
}
