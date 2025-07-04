import GraniteBackground from "@/components/GraniteBackground";
import Modal from "@/components/Modal";

export default function Home() {
  return (
    <GraniteBackground>
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center bg-gray-800 bg-opacity-80 p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">Jogo da Velha</h1>
          <p className="text-lg text-gray-200 mb-8">
            Um jogo clássico para dois jogadores.
          </p>
          <Modal />
        </div>
      </div>
    </GraniteBackground>
  );
}
