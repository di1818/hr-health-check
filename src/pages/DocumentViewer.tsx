import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const docs: Record<string, { title: string; file: string }> = {
  "personal-consent": {
    title: "Согласие на обработку персональных данных",
    file: "/docs/personal-consent.pdf",
  },
  privacy: {
    title: "Политика обработки персональных данных",
    file: "/docs/privacy.pdf",
  },
  "marketing-consent": {
    title: "Согласие на получение рекламных материалов",
    file: "/docs/marketing-consent.pdf",
  },
};

const DocumentViewer = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const doc = slug ? docs[slug] : null;

  if (!doc) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Документ не найден</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-xl px-4 py-3 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад
        </button>
        <h1 className="text-sm font-medium text-foreground truncate">{doc.title}</h1>
      </header>
      <iframe
        src={doc.file}
        title={doc.title}
        className="flex-1 w-full border-0"
      />
    </div>
  );
};

export default DocumentViewer;
