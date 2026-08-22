import Link from "next/link";
import { projects } from "./content";
import { ProfileCard, SiteFooter, SiteHeader } from "./site-components";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="home-page">
        <section className="home-intro" aria-label="Introduction">
          <ProfileCard />

          <div className="home-copy">
            <section id="about" className="about-section">
              <h2>About</h2>
              <p className="intro-lead">
                I am an MSc student in Engineering Design &amp; Innovation at the
                National University of Singapore and a Student Research
                Assistant in the Immersive Reality Lab.
              </p>
              <p>
                My research lies at the intersection of human–computer
                interaction, interactive materials, soft and wearable sensing,
                digital fabrication, haptics, and shape-changing interfaces. I
                am interested in how material geometry and physical behavior can
                become part of an interface—allowing soft structures to sense,
                move, and communicate.
              </p>
              <p>
                My current work spans liquid-metal tactile sensing, pneumatic
                interaction, wearable systems, and multisensory experiences in
                virtual reality. I am preparing for PhD study in HCI and related
                areas.
              </p>
            </section>

            <section className="plain-section education-section">
              <h2>Education</h2>
              <div className="plain-record">
                <span className="entity-mark nus-mark" aria-label="NUS logo">NUS</span>
                <div><h3>National University of Singapore</h3><p>MSc in Engineering Design &amp; Innovation</p><small>GPA 4.39/5.00</small></div>
                <time>2025–2027</time>
              </div>
              <div className="plain-record">
                <span className="entity-mark zju-mark" aria-label="Zhejiang University logo">ZJU</span>
                <div><h3>Zhejiang University</h3><p>Bachelor of Agricultural Sciences in Landscape Gardening</p><small>GPA 3.90/4.00</small></div>
                <time>2021–2025</time>
              </div>
            </section>

            <section className="plain-section research-experience-section">
              <h2>Research Experience</h2>
              <div className="plain-record">
                <span className="entity-mark irl-mark" aria-label="Immersive Reality Lab logo placeholder">IRL</span>
                <div><h3>Immersive Reality Lab, National University of Singapore</h3><p>Student Research Assistant</p></div>
                <time>2025–Present</time>
              </div>
              <div className="plain-record">
                <span className="entity-mark next-mark" aria-label="NEXT Lab logo">NEXT</span>
                <div><h3>NEXT Lab, Zhejiang University</h3><p>Research Intern</p></div>
                <time>2024–2025</time>
              </div>
            </section>
          </div>
        </section>

        <section className="selected-work">
          <div className="section-line-heading">
            <h2>Selected Research</h2>
            <Link href="/research">View all research and projects →</Link>
          </div>
          <div className="work-grid">
            {projects.slice(0, 4).map((project) => (
              <article key={project.slug} className="work-tile">
                <Link href={`/research/${project.slug}`} className="work-image" aria-label={`Open ${project.shortTitle}`}>
                  <span>Image forthcoming</span>
                </Link>
                <p className="work-meta">{project.year} · {project.status}</p>
                <h3><Link href={`/research/${project.slug}`}>{project.shortTitle}</Link></h3>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
