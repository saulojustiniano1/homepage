'use client';

import { Button } from '@/components/ui/button';
import {
  Briefcase,
  FolderGit2,
  Github,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  User,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-around items-center bg-white py-6 px-6 md:px-28 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Image
            src="/terminal-bash.svg"
            alt="Logo do terminal do bash"
            width={35}
            height={35}
          />
          <h1 className="text-2xl font-semibold text-gray-900">
            Saulo Justiniano
          </h1>
        </div>

        <nav className="hidden md:flex gap-20 text-sm text-gray-700 items-center">
          <a href="#" className="flex items-center gap-1 hover:text-black">
            <Home className="w-4 h-4" /> Início
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-black">
            <User className="w-4 h-4" /> Sobre
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-black">
            <FolderGit2 className="w-4 h-4" /> Portfólio
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-black">
            <Briefcase className="w-4 h-4" /> Serviços
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-black">
            <Mail className="w-4 h-4" /> Contato
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-black"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-800">
          <a href="#" className="flex items-center gap-2">
            <Home className="w-4 h-4" /> Início
          </a>
          <a href="#" className="flex items-center gap-2">
            <User className="w-4 h-4" /> Sobre
          </a>
          <a href="#" className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4" /> Portfólio
          </a>
          <a href="#" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Serviços
          </a>
          <a href="#" className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contato
          </a>
        </div>
      )}

      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <div className="bg-gray-50 grid md:grid-cols-2 items-center gap-12">
          <section className="pl-0 md:pl-40">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              PROGRAMADOR <br />
              <span className="text-gray-400">Software Developer</span>
            </h2>
            <p className="text-base text-gray-600 mb-6">
              Seja bem-vindo ao meu portfólio website
            </p>
            <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
              Saiba mais sobre mim
            </Button>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/saulojustiniano1" target="_blank">
                <Github className="w-6 h-6 text-gray-700 hover:text-black" />
              </a>
              <a
                href="https://linkedin.com/in/saulojustiniano/"
                target="_blank"
              >
                <Linkedin className="w-6 h-6 text-gray-700 hover:text-black" />
              </a>
              <a href="https://instagram.com/saulojustiniano" target="_blank">
                <Instagram className="w-6 h-6 text-gray-700 hover:text-black" />
              </a>
            </div>
          </section>

          <section className="mt-10 md:mt-0">
            <Image
              src="/bg.png"
              alt="Ilustração de programador"
              width={600}
              height={600}
              className="w-full h-auto max-w-md mx-auto md:mx-0"
            />
          </section>
        </div>

        <section
          id="tecnologias"
          className="py-20 px-6 md:px-28 bg-white dark:bg-gray-900"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Minhas <span className="text-primary">Tecnologias</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Tecnologias que uso no dia a dia como desenvolvedor.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-48">
            <Image
              src="/javascript.svg"
              alt="JavaScript"
              width={60}
              height={60}
              // className="grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/typescript.svg"
              alt="TypeScript"
              width={60}
              height={60}
              // className="grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/react.svg"
              alt="React"
              width={60}
              height={60}
              // className="grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/nodejs.svg"
              alt="Node.js"
              width={60}
              height={60}
              // className="grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/nextjs.svg"
              alt="Next.js"
              width={60}
              height={60}
              // className="grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/python.svg"
              alt="Python"
              width={60}
              height={60}
              // className="grayscale hover:grayscale-0 transition duration-300"
            />
            <Image
              src="/docker.svg"
              alt="Docker"
              width={60}
              height={60}
              // className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </section>

        <section className="py-20 px-6 md:px-28">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sobre mim</h2>
          <p className="text-base text-gray-700 mb-4">
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            eficientes. Com experiência em diversas tecnologias, estou sempre
            buscando aprender e me aprimorar.
          </p>
          <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
            Ver meu portfólio
          </Button>
        </section>
      </main>
    </>
  );
}
