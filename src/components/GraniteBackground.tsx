import React from "react";

import noise from "../img/noise.png";
import Image from "next/image";

const GraniteBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-400">
      {/* Textura granulada (pontos) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(200,200,200,0.1)_1px,_transparent_1px)] [background-size:10px_10px] mix-blend-multiply" />
      <div className="absolute inset-0 z-0">
        <Image
          src={noise}
          alt="Granite Background"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      {/* Camada base com gradiente para profundidade */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-400 via-gray-500 to-neutral-600 opacity-60" />

      {/* Conteúdo sobre o fundo */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GraniteBackground;
