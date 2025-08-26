import React, { createElement, useState } from 'react'
import { Layers, ArrowRight, NotebookPen, Palette, Target, Award, Menu, X } from 'lucide-react';
import image23 from "../assets/image/image23.jpg"
import image24 from "../assets/image/image24.jpg"
import facebook from "../assets/image/facebook.png"
import instagram from "../assets/image/instagram.png"
import tiktok from "../assets/image/tic-tac.png"
import { Link } from 'react-router-dom';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [reponse, setReponse] = useState("");
  return (
    <div className='min-h-screen bg-[#0d0d0d] w-full'>
      {/* HEADER */}
      <header  style={{ backgroundImage: `url(${image24})` }} 
  className="bg-cover bg-center h-screen">
        {/* NAVBAR */}
        <div className="flex justify-between items-center p-3">
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
        <div className="h-screen flex flex-col items-center justify-center text-center  pointer-events-none">
  <h1 className="text-3xl text-[#E63946] font-bold">Contactez-nous</h1>
  <p className="text-white text-md max-w-xl mt-4">
    Plongez avec nous dans l'univers de la conception visuelle et donnez vie à vos idées
  </p>
</div>
      </header>

      {/* CONTENU */}
     <div className='mt-10 flex flex-col lg:flex-row lg:justify-around lg:gap-8'>
      <div className='ml-10 text-white flex-col  flex lg:flex'>
        <h1 className='font-bold text-3xl'>Contact</h1>
        <p className='mt-3 mr-3 text-white text-justify text-md font-bold'>
          Vous pouvez vous contacter via ces informations ci-dessous, <br />
           Nous disponibles 24h/24 et ouvert 7j/7 
        </p>
        <div className="flex flex-col mt-5">
  <h1 className="text-white font-bold text-xl border-b-4 border-[#E63946] w-max ">
    Téléphone :
  </h1>
  <p className="text-white text-md mt-2 font-bold">
    +242 06 433 98 03 <br />
    +242 05 352 05 51
  </p>
</div>

         <div className='flex flex-col lg:flex mt-5 '>
          <h1 className='text-white font-bold text-xl border-b-4 border-[#E63946] w-max '>Email :</h1>
          <p className='text-white text-md mt-3 font-bold'>gatienngouonimba@gmail.com</p>
        </div>
         <div className='flex flex-col lg:flex mt-5 '>
          <h1 className='text-white font-bold text-xl border-b-4 border-[#E63946] w-max '>Adresse :</h1>
          <p className='text-white text-md mt-3 font-bold'>19,rue Mampouya Séverin</p>
        </div>
      </div>
      <div className='text-white mt-8 border border-[#111] rounded-lg w-auto h-auto shadow-lg shadow-[#E63946]'>
<form
  id="monForm"
  className="p-5 text-white space-y-8 max-w-3xl mx-auto"
  onSubmit={(e) => {
    e.preventDefault(); // évite le rechargement

    const formData = new FormData(e.target);
    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!nom || !prenom || !email || !message) {
      setReponse(" Veuillez remplir tous les champs");
    } else {
      setReponse(" Formulaire envoyé avec succès !");
      // 👉 Ici tu peux envoyer les données à ton backend avec fetch/axios

      // Nettoyage des champs après envoi
      e.target.reset();
    }
  }}
>
  <div className="flex flex-col lg:flex-row gap-5">
    <div className="flex flex-col w-full">
      <label htmlFor="nom" className="text-xl font-bold">Nom</label>
      <input
        id="nom"
        name="nom"
        type="text"
        className="mt-2 p-2 rounded-lg bg-[#111] border-b-2 border-gray-600
                   focus:border-[#E63946] outline-none"
      />
    </div>

    <div className="flex flex-col w-full">
      <label htmlFor="prenom" className="text-xl font-bold">Prénom</label>
      <input
        id="prenom"
        name="prenom"
        type="text"
        className="mt-2 p-2 rounded-lg bg-[#111] border-b-2 border-gray-600
                   focus:border-[#E63946] outline-none"
      />
    </div>
  </div>

  <div className="flex flex-col">
    <label htmlFor="email" className="text-xl font-bold">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      className="mt-2 p-2 rounded-lg bg-[#111] border-b-2 border-gray-600
                 focus:border-[#E63946] outline-none"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="message" className="text-xl font-bold">Message</label>
    <textarea
      id="message"
      name="message"
      rows="6"
      className="mt-2 p-2 rounded-lg bg-[#111] border-b-2 border-gray-600
                 focus:border-[#E63946] outline-none text-white resize-none"
    ></textarea>
  </div>

  {/* MESSAGE DE RÉPONSE */}
  {reponse && (
    <p
      className={`mt-3 font-bold ${
        reponse.includes("") ? "text-red-500" : "text-green-500"
      }`}
    >
      {reponse}
    </p>
  )}

  <div className="flex justify-center">
    <button
      type="submit"
      className="border border-[#E63946] px-4 py-2 text-white rounded-md
      bg-[#E63946] hover:bg-transparent transition-all duration-300"
    >
      Envoyer
    </button>
  </div>
</form>

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
