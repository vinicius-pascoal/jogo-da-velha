"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Jogo from "./Jogo";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Começar Jogo
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop com transparência real */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />

            {/* Modal em si */}
            <motion.div
              className="relative z-10  bg-gray-800 rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // bloqueia clique dentro
            >
              <div className="text-center">
                <h1>
                  <span className="text-2xl font-bold text-white">
                    Jogo da Velha
                  </span>
                </h1>
                <div className="mt-4">
                  <Jogo />
                </div>
                <button
                  className="relative bottom-0 -right-1/3 mt-4 px-4 py-2 bg-red-500 font-semibold rounded text-black"
                  onClick={() => setOpen(false)}
                >
                  sair
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
