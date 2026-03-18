import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";
import photo8 from "@/assets/photo-8.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

const PhotoBackground = () => (
  <div className="photo-bg-wrapper" aria-hidden="true">
    <div className="photo-bg-track">
      {[...photos, ...photos].map((src, i) => (
        <div key={i} className="photo-bg-item">
          <img src={src} alt="" loading="lazy" draggable={false} />
        </div>
      ))}
    </div>
    <div className="photo-bg-track photo-bg-track-reverse" style={{ animationDelay: "-12s" }}>
      {[...photos.slice(4), ...photos.slice(0, 4), ...photos.slice(4), ...photos.slice(0, 4)].map((src, i) => (
        <div key={i} className="photo-bg-item">
          <img src={src} alt="" loading="lazy" draggable={false} />
        </div>
      ))}
    </div>
  </div>
);

export default PhotoBackground;
