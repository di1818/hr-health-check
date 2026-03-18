import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";

const photos = [
  { src: photo1, top: "3%", left: "2%", rotate: -12, size: 180 },
  { src: photo2, top: "18%", left: "78%", rotate: 8, size: 160 },
  { src: photo3, top: "38%", left: "5%", rotate: 6, size: 150 },
  { src: photo4, top: "55%", left: "82%", rotate: -10, size: 170 },
  { src: photo5, top: "72%", left: "8%", rotate: 14, size: 140 },
  { src: photo6, top: "85%", left: "75%", rotate: -6, size: 160 },
];

const FloatingPhotos = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {photos.map((p, i) => (
      <div
        key={i}
        className="absolute rounded-2xl overflow-hidden"
        style={{
          top: p.top,
          left: p.left,
          width: p.size,
          height: p.size * 1.3,
          transform: `rotate(${p.rotate}deg)`,
          opacity: 0.04,
        }}
      >
        <img
          src={p.src}
          alt=""
          className="w-full h-full object-cover object-top grayscale"
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

export default FloatingPhotos;
