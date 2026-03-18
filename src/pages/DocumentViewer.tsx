import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { legalDocuments } from "@/content/legalDocuments";

const relatedDocuments = [
  { slug: "personal-consent", label: "Согласие на обработку ПД" },
  { slug: "privacy", label: "Политика обработки ПД" },
  { slug: "marketing-consent", label: "Согласие на рекламу" },
  { slug: "distribution-consent", label: "Согласие на распространение ПД" },
];

const DocumentViewer = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const doc = slug ? legalDocuments[slug] : null;

  if (!doc || !slug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Документ не найден.</p>
          <Link to="/" className="text-primary hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/90 backdrop-blur-xl sticky top-0 z-10">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <button
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </button>
          {doc.pdfHref ? (
            <a
              href={doc.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1.5"
            >
              PDF-версия
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:py-12">
        <article className="rounded-3xl border border-border/50 bg-card/80 p-6 shadow-sm sm:p-10">
          <div className="space-y-4 border-b border-border/50 pb-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
              Юридический документ
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{doc.title}</h1>
            {doc.subtitle ? <p className="text-base text-muted-foreground">{doc.subtitle}</p> : null}
          </div>

          <div className="mt-8 space-y-8 text-sm leading-7 text-foreground sm:text-base">
            {doc.intro?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {doc.sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-foreground/90">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="list-disc space-y-2 pl-5 text-foreground/90 marker:text-primary">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {doc.footer?.length ? (
              <section className="space-y-3 rounded-2xl bg-secondary/40 p-4 sm:p-6">
                {doc.footer.map((paragraph) => (
                  <p key={paragraph} className="text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </section>
            ) : null}
          </div>
        </article>

        <aside className="h-fit rounded-3xl border border-border/50 bg-card/60 p-5 lg:sticky lg:top-24">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Другие документы
          </h2>
          <nav className="mt-4 flex flex-col gap-3">
            {relatedDocuments.map((item) => {
              const isActive = item.slug === slug;

              return (
                <Link
                  key={item.slug}
                  to={`/docs/${item.slug}`}
                  className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-border/50 bg-background hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </main>
  );
};

export default DocumentViewer;
