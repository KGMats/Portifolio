'use client'

import { useTypewriter } from './hooks/useTypewritter';
import Link from 'next/link';

export default function NotFound() {
  // CORREÇÃO 1: Mudei de "44_ERROR" para "404_ERROR"
  const typedTitle = useTypewriter("404_ERROR", 100);
  
  // CORREÇÃO 2: Removi o "O" duplicado no início da frase
  const typedMessage = useTypewriter("O objeto solicitado não foi encontrado neste universo.", 30, 1000);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4 font-mono select-none">
      
      <div className="max-w-lg w-full space-y-8 text-center md:text-left">
        
        {/* Cabeçalho do Erro */}
        <div className="border-b border-purple-900/50 pb-6 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {typedTitle}
            <span className="animate-pulse text-purple-400">_</span>
          </h1>
          <p className="text-purple-300/60 mt-2 text-sm uppercase tracking-[0.2em]">
            SYSTEM FAILURE
          </p>
        </div>

        {/* Corpo do Terminal */}
        <div className="space-y-4 text-sm md:text-base text-gray-400 font-hack h-32">
          <p>
            <span className="text-purple-500 mr-2">{'>'}</span>
            {typedMessage}
          </p>
          
          {/* Lógica condicional mantida para a segunda linha */}
          {typedMessage.length > 5 && (
             <p className="animate-fade-in opacity-0" style={{ animation: 'fadeIn 0.5s forwards 2.5s' }}>
               <span className="text-purple-500 mr-2">{'>'}</span>
               SUGESTÃO: Verifique a URL ou retorne à base.
             </p>
          )}
        </div>

        {/* Botão de Retorno */}
        <div className="pt-8 opacity-0 animate-fade-in" style={{ animation: 'fadeIn 1s forwards 3.5s' }}>

        <Link
            href="/"
            className="
            group relative inline-flex items-center px-8 py-3 overflow-hidden font-bold rounded-full 
            text-purple-400 border border-purple-500/30 transition-all duration-300
            hover:bg-purple-500/10 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
            "
        >
            <span className="relative">VOLTAR PARA A BASE</span>
            <span className="absolute right-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            →
            </span>
        </Link>

        </div>
      </div>
    </div>
  );
}
