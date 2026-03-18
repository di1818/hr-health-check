const AmbientBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-background" />

    {/* Animated orbs */}
    <div
      className="absolute w-[600px] h-[600px] rounded-full blur-[120px] animate-float"
      style={{
        top: "5%",
        left: "-5%",
        background: "radial-gradient(circle, hsl(38 92% 55% / 0.06), transparent 70%)",
      }}
    />
    <div
      className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
      style={{
        top: "40%",
        right: "-8%",
        background: "radial-gradient(circle, hsl(220 60% 50% / 0.05), transparent 70%)",
        animation: "float 8s ease-in-out infinite reverse",
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full blur-[90px]"
      style={{
        bottom: "10%",
        left: "20%",
        background: "radial-gradient(circle, hsl(38 80% 55% / 0.04), transparent 70%)",
        animation: "float 10s ease-in-out 2s infinite",
      }}
    />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(38 92% 55% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(38 92% 55% / 0.3) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Noise grain overlay */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }}
    />

    {/* Top vignette */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
  </div>
);

export default AmbientBackground;
