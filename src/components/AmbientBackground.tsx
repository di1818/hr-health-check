const AmbientBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    {/* Solid dark base */}
    <div className="absolute inset-0 bg-background" />

    {/* Single subtle warm accent — top right */}
    <div
      className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.035]"
      style={{
        background: "radial-gradient(circle, hsl(38 92% 55%), transparent 70%)",
        filter: "blur(80px)",
      }}
    />

    {/* Film grain texture */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  </div>
);

export default AmbientBackground;
