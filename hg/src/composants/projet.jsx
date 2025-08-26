import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { items, galactique} from "./image"; // importe items et galactique
import facebook from "../assets/image/facebook.png"
import instagram from "../assets/image/instagram.png"
import tiktok from "../assets/image/tic-tac.png"
import { Link } from 'react-router-dom';
import { Palette, Target, Award,Menu,X   } from 'lucide-react';


export default function ProjectsCarousel() {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);
  const [selected, setSelected] = useState(null); // état pour la grille
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="bg-[#0d0d0d] min-h-screen w-full ">
      {/* Header */}
      <header className="flex flex-col lg:flex">
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
      </header>

     <div className="lg:mt-20 flex flex-col lg:flex-row lg:h-screen lg:items-center lg:gap-10 px-5">
  {/* Texte */}
  <div className="lg:w-1/2 text-center lg:text-left mt-[80px]">
  <p className="text-lg leading-relaxed text-white">
  Chez <span className="font-bold text-red-400">HG Vision Graphic</span>, 
  nous croyons que chaque idée mérite une identité unique. 
  Nous transformons vos concepts en designs modernes, créatifs 
  et impactants.
</p>

<p className="text-lg leading-relaxed text-white">
  Du <span className="font-semibold">branding</span> à l’
  <span className="font-semibold">UI/UX design</span>, en passant 
  par la communication visuelle, notre équipe vous accompagne pour 
  créer des expériences mémorables et renforcer l’image de votre marque.
</p>

<p className="text-lg leading-relaxed text-white">
  Ensemble, donnons vie à vos projets et faisons de vos ambitions 
  une réalité visuelle qui attire, inspire et fidélise.
</p>

  </div>

  {/* Image active en grand */}
  <AnimatePresence>
    <motion.div
      key={activeItem.id}
      className="mt-10 lg:mt-0 flex justify-center lg:w-1/2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={activeItem.url}
        alt="active"
        className="h-96 rounded-xl shadow-lg w-96 lg:w-[720px] lg:h-[540px] object-cover"
      />
    </motion.div>
  </AnimatePresence>
</div>

      {/* Carousel miniatures */}
      <motion.div className="w-full max-w-6xl mx-auto mt-10 overflow-hidden lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center">
        <motion.div
          ref={carouselRef}
          className="flex gap-4 cursor-grab"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                rounded-lg overflow-hidden cursor-pointer
                ${item.id === activeItem.id ? "scale-110 z-10" : "scale-90 z-0"}`}
              onClick={() => setActiveItem(item)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.url} alt={`slide-${item.id}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Grille d'images avec galactique */}
      <div className="container mx-auto p-4 mt-10">
        <div className="columns-2 md:columns-3 2xl:columns-4 gap-4">
          {galactique.map((item) => (
            <ImageItem key={item.id} item={item} setSelected={setSelected} />
          ))}
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
  );
}

// Composant ImageItem pour la grille
function ImageItem({ item, setSelected }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.figure
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      ref={ref}
      className="inline-block group w-full rounded-md relative overflow-hidden cursor-pointer dark:bg-black bg-white"
      onClick={() => setSelected(item)}
    >
      <motion.img
        layoutId={`card-${item.id}`}
        whileHover={{ scale: 1.025 }}
        src={item.url}
        alt={item.title}
        className="w-full h-full object-cover shadow-xl cursor-pointer"
      />
      <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 font-semibold bg-black/40 text-white w-full">
        <h1>{item.title}</h1>
      </div>
    </motion.figure>
    
  );
}
