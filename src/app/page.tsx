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
  User,
} from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <header className="flex justify-between items-center bg-white py-6 px-8 md:px-28 shadow-sm sticky top-0 z-50">
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
        <nav className="hidden md:flex gap-6 text-sm text-gray-700 items-center">
          <a
            href="#"
            className="flex text-sm text-gray-900 items-center gap-1 hover:text-black"
          >
            <Home className="w-4 h-4" /> Início
          </a>
          <a
            href="#"
            className="flex text-sm text-gray-900 items-center gap-1 hover:text-black"
          >
            <User className="w-4 h-4" /> Sobre
          </a>
          <a
            href="#"
            className="flex text-sm text-gray-900 items-center gap-1 hover:text-black"
          >
            <FolderGit2 className="w-4 h-4" /> Portfólio
          </a>
          <a
            href="#"
            className="flex text-sm text-gray-900 items-center gap-1 hover:text-black"
          >
            <Briefcase className="w-4 h-4" /> Serviços
          </a>
          <a
            href="#"
            className="flex text-sm text-gray-900 items-center gap-1 hover:text-black"
          >
            <Mail className="w-4 h-4" /> Contato
          </a>
        </nav>
      </header>

      <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12 font-sans">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <section className="pl-52">
            <p className="text-sm text-gray-600 mb-2">Olá pessoas,</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              EU SOU UM <br /> PROGRAMADOR
            </h2>
            <p className="text-gray-600 mb-6">
              Seja bem-vindo ao meu portfólio website
            </p>
            <Button className="px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800">
              Saiba mais sobre mim
            </Button>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/saulojustiniano1" target="_blank">
                <Github className="w-6 h-6 text-gray-700 hover:text-black" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <Linkedin className="w-6 h-6 text-gray-700 hover:text-black" />
              </a>
              <a href="https://instagram.com/saulojustiniano" target="_blank">
                <Instagram className="w-6 h-6 text-gray-700 hover:text-black" />
              </a>
            </div>
          </section>

          <section>
            <Image
              src="/bg1.jpg"
              alt="Ilustração de programador"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </section>
        </div>
      </main>
    </>
  );
}
