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
      <header className="flex justify-between items-center bg-white py-6 px-6 md:px-28 shadow-sm sticky top-0 z-50">
        <div id="logo" className="flex items-center gap-2">
          <Image
            src="/terminal-bash-black.svg"
            alt="Logo do terminal do bash"
            width={35}
            height={35}
          />
          <h1 className="text-2xl font-semibold text-gray-900">
            Saulo Justiniano
          </h1>
        </div>

        <nav className="hidden md:flex gap-10 lg:gap-16 text-sm text-gray-700 items-center">
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

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-black"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu */}
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
        <section className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-28 py-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-gray-900">Software Developer</span>
            </h2>
            <p className="text-base text-gray-600 mb-6">
              Seja bem-vindo ao meu portfólio website
            </p>
            <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
              Saiba mais sobre mim
            </Button>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
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
          </div>

          <section className="flex justify-center">
            <Image
              src="/bg.png"
              alt="Ilustração de programador"
              width={500}
              height={500}
              className="w-full max-w-sm h-auto"
            />
          </section>
        </section>

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

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-36">
            {[
              'javascript',
              'typescript',
              'react',
              'nodejs',
              'nextjs',
              'python',
              'docker',
            ].map((tech) => (
              <Image
                key={tech}
                src={`/${tech}.svg`}
                alt={tech}
                width={60}
                height={60}
                // className="grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </section>

        <section className="py-20 px-6 md:px-28 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
              Sobre mim
            </h2>
            <p className="text-base text-gray-700 mb-4">
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e
              eficientes. Com experiência em diversas tecnologias, estou sempre
              buscando aprender e me aprimorar.
            </p>
            <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
              Ver meu portfólio
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="bg-gray-900 text-white py-6 px-6 md:px-28">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-center md:text-left">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="flex items-center gap-1">
                <Image
                  src="/terminal-bash-white.svg"
                  alt="Logo do terminal do bash"
                  width={16}
                  height={16}
                />
                Saulo Justiniano.
              </span>
              <span>Todos os direitos reservados.</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/saulojustiniano1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/saulojustiniano/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/saulojustiniano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
