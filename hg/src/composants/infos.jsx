import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import facebook from "../assets/image/facebook.png";
import instagram from "../assets/image/instagram.png";
import tiktok from "../assets/image/tic-tac.png";
import photoshop from "../assets/image/photoshop.png";
import illustra from "../assets/image/illustrator.png";
import image26 from "../assets/image/image26.jpg"
import { Link } from 'react-router-dom';

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [ouvrirIndex, setOuvrirIndex] = useState(null); // pour gérer quel accordéon est ouvert

  const compt = [
    { image: photoshop },
    { image: illustra }
  ];

  const accor = [
    { titre: "Gestion de projet", icon: <ChevronDown />, texte: "Capacité à gérer de A à Z une commande graphique." },
    { titre: "Respect de délais", icon: <ChevronDown />, texte: "Qualité appréciée par la clientelle." },
    { titre: "Communication visuelle", icon: <ChevronDown />, texte: "Transformer un message en image impactante" }
  ];

  return (
    <>
      <div className="min-h-screen w-full overflow-hidden bg-black">
        {/* Header */}
        <div className="flex justify-between items-center p-3">
          <h1 className="text-xl text-[#E63946] font-bold">HG Vision Graphic</h1>

          <ul className="hidden lg:flex gap-6 text-white text-md">
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/acceuil">Accueil</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/projets">Projets</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/infos">Infos</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/contact">Contact</Link></li>
          </ul>

          <div className="lg:hidden">
            {isOpen ? (
              <X className="text-white text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
            ) : (
              <Menu className="text-white text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

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

        <div className="relative h-80 w-full overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)]"></div>

        <div className="mx-auto -mt-52 w-full max-w-2xl relative z-10">
          <div className="bg-white backdrop-blur-lg border border-gray-800 p-4 w-28 h-28 mx-auto grid place-content-center rounded-full">
            <div className="w-12 h-12 translate-x-1 translate-y-1 mx-auto bg-black rounded-lg relative before:absolute before:w-full before:h-full before:bg-black/50 before:rounded-lg before:-top-2 before:-left-2"></div>
          </div>
        </div>

        <article className="text-white pt-2 w-11/12 lg:w-2/3 mx-auto text-center z-10 relative">
          <h1 className="text-center text-3xl lg:text-5xl font-medium py-3">
            Créons des expériences visuelles inoubliables
          </h1>
          <p className="text-base lg:text-lg mt-4">
            Nous sommes spécialisés dans la création graphique et le design visuel. 
            De la conception d'identités visuelles uniques à la réalisation de supports marketing percutants, 
            nous mettons notre créativité et notre expertise au service de votre image. 
            Notre objectif est de donner vie à vos idées, en combinant esthétisme, ergonomie et innovation, 
            pour offrir des expériences visuelles mémorables et impactantes à votre audience.
          </p>
        </article>
    <div className='flex lg:flex items-center justify-center mt-5 '>
         <div
  style={{ backgroundImage: `url(${image26})` }}
  className="bg-cover bg-center h-96 w-64 flex items-center justify-center rounded-2xl"
>
</div>
    </div>

      </div>

      {/* Section "Qui suis-je" */}
      <div className="h-auto w-full overflow-hidden bg-black">
        <div className=" flex flex-col items-center justify-center text-center px-5 ">
          <h1 className="font-bold text-2xl text-[#E63946]">Qui suis-je ?</h1>
          <p className="text-white text-lg mt-3 text-justify font-bold">Je m’appelle Hardy Gatien, graphiste passionné par l’univers visuel et la créativité. <br /> 
          Mon objectif est simple: <span className='text-blue-500'>"transformer vos idées en images fortes, percutantes et mémorables".</span></p> <br />
          <p className="text-white text-lg mt-3 text-justify font-bold">
            Pour la création d’identités visuelles, d’affiches, logos,  supports digitaux ou imprimés, <br />
             j’accorde une grande importance à l’originalité, à l’harmonie des couleurs et à la clarté du message. <br />
              Chaque projet est pour moi une occasion de raconter une histoire et de donner vie à une vision unique.
          </p>
          <button className="border border-[#E63946] px-4 py-2 text-white rounded-md mt-5 bg-[#E63946] hover:bg-transparent transition-all duration-300">
            <Link  to="/projets">Voir mes projets</Link>
          </button>
        </div>

        {/* Compétences */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-[#E63946] text-2xl font-bold">Mes compétences</h1>
        </div>
        <div className="p-5 mt-10 flex lg:flex justify-center items-center gap-5">
          {compt.map((compt, index) => (
            <div className='group flex lg:flex flex-col w-64 h-auto p-5 rounded-md' key={index}>
              <div><img src={compt.image} alt="" /></div>
            </div>
          ))}
        </div>

        <div className='text-white font-bold text-xl ml-6'>
          <h1>Comptétences techniques</h1>
        </div>
        {/* Accordéons */}
<div className='mt-10 border border-[#111] bg-[#111] h-auto w-100 ml-6 flex flex-col gap-4 p-3'>
  {accor.map((c, index) => (
    <div key={index} className='flex flex-col'>
      <div 
        className='flex justify-between items-center cursor-pointer p-2 bg-[#222] rounded-md'
        onClick={() => setOuvrirIndex(ouvrirIndex === index ? null : index)}
      >
        <h1 className='text-white text-xl font-bold'>{c.titre}</h1>
        <div className='text-white'>{c.icon}</div>
      </div>
      {ouvrirIndex === index && (
        <div className='mt-2 text-white p-2 bg-[#333] rounded-md'>
          <p>{c.texte}</p>
        </div>
      )}
    </div>
  ))}
</div>


        <div className="mt-10 flex lg:flex items-center justify-center">
          <ul className="text-white flex lg:flex-row gap-3 lg:gap-6 p-3">
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/acceuil">Accueil</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/projets">Projets</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/infos">Infos</Link></li>
            <li><Link className=" hover:border-b-4 hover:border-[#E63946] transition-all rounded-sm" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="bg-[#111] mt-10 flex justify-center items-center p-5">
          <h1 className="text-2xl text-[#E63946] font-bold">HG Vision Graphic</h1>
        </div>

        <div className="flex lg:flex justify-center items-center gap-3 p-5">
          <img src={facebook} alt="Facebook" className="w-6 cursor-pointer" />
          <img src={instagram} alt="Instagram" className="w-6 cursor-pointer" />
          <img src={tiktok} alt="TikTok" className="w-6 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Index;
