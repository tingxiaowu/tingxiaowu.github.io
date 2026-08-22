import { notFound } from "next/navigation";
import Link from "next/link";
import { projectBySlug, projects } from "../../content";
import { SiteFooter, SiteHeader } from "../../site-components";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main className="project-page">
        <Link className="back-link" href="/research">← Back to research</Link>
        <header className="project-header">
          <div className="project-status-line"><span>{project.year}</span><span>{project.status}</span><span>{project.venue}</span></div>
          <h1>{project.title}</h1>
          <p className="project-authors">{project.authors}</p>
          <div className="topic-list">{project.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
        </header>

        <div className="project-hero-placeholder" role="img" aria-label="Project image placeholder">
          <p>Project image will be added after co-author approval</p>
        </div>

        <div className="project-body">
          <aside>
            <p><strong>Status</strong><span>{project.status}</span></p>
            <p><strong>Venue</strong><span>{project.venue}</span></p>
            <p><strong>Year</strong><span>{project.year}</span></p>
            {project.link && <a className="detail-button" href={project.link} target="_blank" rel="noreferrer">View preprint ↗</a>}
          </aside>
          <div className="project-narrative">
            <section>
              <p className="section-kicker">Abstract</p>
              <p className="project-abstract">{project.abstract}</p>
            </section>
            <section>
              <p className="section-kicker">Research contributions</p>
              <ul className="contribution-list">{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section>
              <p className="section-kicker">Visual materials</p>
              <div className="project-gallery">
                {project.imageLabels.map((label, index) => (
                  <div key={label} className="gallery-placeholder" role="img" aria-label={`${label} placeholder`}>
                    <span>{String(index + 1).padStart(2, "0")}</span><p>{label}</p><small>Image pending public-release approval</small>
                  </div>
                ))}
              </div>
            </section>
            {project.status !== "Preprint" && (
              <p className="review-note"><strong>Public preview.</strong> This project is currently under review or evaluation. Results are provisional, and selected technical details and figures are withheld until publication.</p>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
