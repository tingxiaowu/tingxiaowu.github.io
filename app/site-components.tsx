const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3zM4 7l8 6 8-6" /></svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.5h8l4 4v15H6zM14 2.5v5h5M9 12h6M9 16h6" /></svg>
);

export function SiteHeader() {
  return (
    <header className="academic-header">
      <Link href="/" className="site-name">Tingxiao Wu</Link>
      <nav aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/research">Research</Link>
        <a href="/Wu_Tingxiao_CV.docx" download>CV</a>
        <a href="mailto:e1539360@u.nus.edu">Email</a>
      </nav>
    </header>
  );
}

export function ProfileCard() {
  return (
    <aside className="profile-column" aria-label="Profile">
      <div className="profile-photo" role="img" aria-label="Portrait placeholder">
        <div className="profile-silhouette" aria-hidden="true"><i /><span /></div>
        <small>Portrait placeholder</small>
      </div>
      <h1>Wu Tingxiao</h1>
      <p className="profile-role">MSc Student &amp; Student Research Assistant</p>
      <p className="profile-affiliation">Engineering Design &amp; Innovation<br />National University of Singapore</p>
      <div className="profile-contact">
        <a href="mailto:e1539360@u.nus.edu"><MailIcon /> Email</a>
        <a href="/Wu_Tingxiao_CV.docx" download><FileIcon /> Curriculum Vitae</a>
      </div>
      <div className="profile-meta">
        <p><strong>Location</strong><span>Singapore</span></p>
        <p><strong>Research areas</strong><span>HCI · Interactive Materials · Soft Sensing · Haptics · Digital Fabrication</span></p>
      </div>
    </aside>
  );
}

export function SiteFooter() {
  return (
    <footer className="academic-footer">
      <p>© 2026 Tingxiao Wu</p>
      <p><a href="mailto:e1539360@u.nus.edu">e1539360@u.nus.edu</a> · Singapore</p>
    </footer>
  );
}
import Link from "next/link";
