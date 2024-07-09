import { ArrowRight, Calendar, MapPin } from "lucide-react";


export function App() {

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center">
          <img src="/Logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="bg-zinc-900 rounded-xl h-16 flex items-center justify-between px-4 shadow-shape">
          <div className="flex items-center justify-between gap-2">
            <MapPin className="text-zinc-400 size-5"/>
            <input type="text" name="" id="" placeholder="Para onde você vai?" className="bg-transparent outline-none placeholder:text-zinc-400" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <Calendar className="text-zinc-400 size-5"/>
            <input type="text" placeholder="Quando?" className="bg-transparent outline-none placeholder:text-zinc-400" />
          </div>
          <div className="w-px h-6 bg-zinc-800"/>
          <button 
            className="flex items-center justify-center gap-2 bg-lime-300 text-lime-950 font-medium rounded-lg px-5 py-2 hover:bg-lime-400">
              Continuar
              <ArrowRight className="size-5 text-lime-950"/>
          </button>
        </div>

        <p 
          className="text-zinc-500 text-sm">
            Ao planejar sua viagem pela plann.er você automaticamente concorda <br/> com nossos <a href="#" 
              className="text-zinc-300 underline">
                termos de uso
            </a> e <a href="#" className="text-zinc-300 underline">
              políticas de privacidade
            </a> 
            .
          </p>
      </div>
    </div>
    
  )
}
