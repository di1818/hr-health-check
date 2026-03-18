import { useEffect, useState } from "react";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

interface FloatingPhoto {
  id: number;
  src: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  direction: number; // angle in degrees
  rotation: number;
}

function generatePhoto(id: number): FloatingPhoto {
  const src = photos[id % photos.length];
  const side = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
  let x: number, y: number, direction: number;

  switch (side) {
    case 0: x = Math.random() * 100; y = -15; direction = 150 + Math.random() * 60; break;
    case 1: x = 110; y = Math.random() * 100; direction = 200 + Math.random() * 60; break;
    case 2: x = Math.random() * 100; y = 110; direction = -60 + Math.random() * 60; break;
    default: x = -15; y = Math.random() * 100; direction = -20 + Math.random() * 60; break;
  }

  return {
    id,
    src,
    x,
    y,
    size: 120 + Math.random() * 100,
    duration: 35 + Math.random() * 25,
    delay: id * 8 + Math.random() * 5,
    direction,
    rotation: -15 + Math.random() * 30,
  };
}

const FloatingPhotos = () => {
  const [items] = useState<FloatingPhoto[]>(() =>
    Array.from({ length: 8 }, (_, i) => generatePhoto(i))
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((p) => {
        const rad = (p.direction * Math.PI) / 180;
        const dist = 130; // % travel distance
        const tx = Math.cos(rad) * dist;
        const ty = Math.sin(rad) * dist;

        return (
          <div
            key={p.id}
            className="absolute rounded-2xl overflow-hidden"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size * 1.3,
              opacity: 0.04,
              transform: `rotate(${p.rotation}deg)`,
              animation: `floatPhoto ${p.duration}s ${p.delay}s linear infinite`,
              ["--tx" as string]: `${tx}vw`,
              ["--ty" as string]: `${ty}vh`,
            }}
          >
            <img
              src={p.src}
              alt=""
              className="w-full h-full object-cover object-top grayscale"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingPhotos;
