export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Soft circle — символ безопасности и доверия */}
      <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="8" fill="white" opacity="0.15" />
      <circle cx="20" cy="20" r="3" fill="white" />
      <text
        x="46"
        y="19"
        fill="white"
        fontFamily="monospace"
        fontSize="13"
        letterSpacing="2"
        fontWeight="400"
      >
        ОЛЬГА
      </text>
      <text
        x="46"
        y="33"
        fill="white"
        fontFamily="monospace"
        fontSize="9"
        letterSpacing="3"
        fontWeight="400"
        opacity="0.5"
      >
        ПСИХОЛОГ
      </text>
    </svg>
  );
};