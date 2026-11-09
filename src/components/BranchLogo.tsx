import React from "react";

interface BranchLogoProps {
  className?: string;
  size?: number;
}

/**
 * BranchLogo Component
 * Ramo botânico estilizado com folhas e nós florais em tons roxos, violetas e pretos.
 */
export const BranchLogo: React.FC<BranchLogoProps> = ({ className = "w-7 h-7", size }) => {
  return (
    <svg
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      width={size}
      height={size}
      aria-label="Logo Ramo do Pantanal"
    >
      <defs>
        {/* Gradiente principal do caule do ramo */}
        <linearGradient id="branchStemGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#581C87" />
          <stop offset="40%" stopColor="#9333EA" />
          <stop offset="80%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#F3E8FF" />
        </linearGradient>

        {/* Gradiente das folhas do ramo */}
        <linearGradient id="branchLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="35%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>

        <linearGradient id="branchLeafGradAlt" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D8B4FE" />
          <stop offset="45%" stopColor="#7E22CE" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </linearGradient>

        {/* Brilho neon roxo */}
        <filter id="branchGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#C084FC" floodOpacity="0.75" />
        </filter>
      </defs>

      {/* Caule principal curvilíneo do ramo */}
      <path
        d="M6 48 C14 42, 21 32, 28 22 C34 14, 40 8, 48 5"
        stroke="url(#branchStemGrad)"
        strokeWidth="3.6"
        strokeLinecap="round"
        filter="url(#branchGlow)"
      />

      {/* Ramificação secundária inferior */}
      <path
        d="M17 35 C14 31, 10 29, 6 29"
        stroke="#A855F7"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Ramificação secundária média */}
      <path
        d="M28 22 C32 19, 38 20, 42 23"
        stroke="#A855F7"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Folha 1 - Base Esquerda */}
      <g transform="translate(6, 29) rotate(-35)">
        <path
          d="M0 0 C-4 -8, -12 -8, -14 0 C-12 8, -4 8, 0 0 Z"
          fill="url(#branchLeafGrad)"
          stroke="#C084FC"
          strokeWidth="0.8"
        />
        <line x1="0" y1="0" x2="-12" y2="0" stroke="#F3E8FF" strokeWidth="0.6" opacity="0.8" />
      </g>

      {/* Folha 2 - Base Direita */}
      <g transform="translate(20, 32) rotate(40)">
        <path
          d="M0 0 C4 -8, 13 -8, 15 0 C13 8, 4 8, 0 0 Z"
          fill="url(#branchLeafGradAlt)"
          stroke="#C084FC"
          strokeWidth="0.8"
        />
        <line x1="0" y1="0" x2="13" y2="0" stroke="#F3E8FF" strokeWidth="0.6" opacity="0.8" />
      </g>

      {/* Folha 3 - Centro Esquerda */}
      <g transform="translate(23, 26) rotate(-45)">
        <path
          d="M0 0 C-4 -9, -14 -9, -16 0 C-14 9, -4 9, 0 0 Z"
          fill="url(#branchLeafGrad)"
          stroke="#E9D5FF"
          strokeWidth="0.9"
        />
        <line x1="0" y1="0" x2="-14" y2="0" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.9" />
      </g>

      {/* Folha 4 - Centro Direita */}
      <g transform="translate(35, 20) rotate(50)">
        <path
          d="M0 0 C4 -8, 13 -8, 15 0 C13 8, 4 8, 0 0 Z"
          fill="url(#branchLeafGradAlt)"
          stroke="#C084FC"
          strokeWidth="0.8"
        />
        <line x1="0" y1="0" x2="13" y2="0" stroke="#F3E8FF" strokeWidth="0.6" opacity="0.8" />
      </g>

      {/* Folha 5 - Superior Esquerda */}
      <g transform="translate(34, 15) rotate(-30)">
        <path
          d="M0 0 C-3 -7, -11 -7, -13 0 C-11 7, -3 7, 0 0 Z"
          fill="url(#branchLeafGrad)"
          stroke="#E9D5FF"
          strokeWidth="0.8"
        />
        <line x1="0" y1="0" x2="-11" y2="0" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.9" />
      </g>

      {/* Folha 6 - Superior Direita */}
      <g transform="translate(42, 11) rotate(35)">
        <path
          d="M0 0 C3 -6, 10 -6, 12 0 C10 6, 3 6, 0 0 Z"
          fill="url(#branchLeafGradAlt)"
          stroke="#C084FC"
          strokeWidth="0.8"
        />
      </g>

      {/* Broto Terminal Superior (Ponta do Ramo) */}
      <path
        d="M48 5 C49 2, 52 3, 53 5 C52 7, 49 7, 48 5 Z"
        fill="#FFFFFF"
        stroke="#C084FC"
        strokeWidth="0.9"
        filter="url(#branchGlow)"
      />
      <circle cx="49" cy="4.5" r="1.6" fill="#F3E8FF" />

      {/* Nó floral bioluminescente sutil */}
      <circle cx="28" cy="22" r="1.8" fill="#F3E8FF" />
      <circle cx="17" cy="35" r="1.5" fill="#E9D5FF" />
    </svg>
  );
};

export default BranchLogo;
