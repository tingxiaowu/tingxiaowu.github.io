import Link from "next/link";
import { courseProjects, projects } from "../content";
import { SiteFooter, SiteHeader } from "../site-components";

export default function ResearchPage() {
  return (
    <>
      <SiteHeader />
      <main className="research-page">
        <header className="page-intro">
          <p>Research</p>
          <h1>Research and selected projects</h1>
          <div>
            <p>
              My work explores interactive materials, soft sensing, digital
              fabrication, haptics, and embodied interaction. Publication and
              review status are shown directly with each project so that this
              page serves as the single record of my research output.
            </p>
            <p>
              Projects currently under review show a public summary only;
              selected images and technical details will be added after approval
              from collaborators.
            </p>
          </div>
        </header>

        <section className="research-index">
          <div className="section-line-heading"><h2>Research</h2><span>{projects.length} projects</span></div>
          <div className="research-grid">
            {projects.map((project) => (
              <article key={project.slug} className="research-tile">
                <Link href={`/research/${project.slug}`} className="research-image" aria-label={`Open ${project.shortTitle}`}>
                  <span>Image forthcoming</span>
                </Link>
                <div className="research-tile-copy">
                  <p className="work-meta">{project.year} · {project.status}</p>
                  <h3><Link href={`/research/${project.slug}`}>{project.shortTitle}</Link></h3>
                  <p className="research-authors">{project.authors}</p>
                  <p>{project.summary}</p>
                  <p className="venue-line">{project.venue}</p>
                  <Link href={`/research/${project.slug}`} className="inline-link">Details →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="coursework-index">
          <div className="section-line-heading"><h2>Coursework &amp; Earlier Projects</h2><span>Selected</span></div>
          <div className="coursework-list">
            {courseProjects.map((project) => (
              <article key={project.title}>
                <time>{project.year}</time>
                <div>
                  <h3>{project.title}</h3>
                  <p className="course-context">{project.context}</p>
                  <p>{project.summary}</p>
                  <p className="course-topics">{project.topics.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
