import type { CSSProperties } from "react";

type IconName = "globe" | "database" | "cpu" | "box" | "layers" | "rocket";

const projects: Array<{
  number: string;
  name: string;
  description: string;
  href: string;
  color: string;
  icon: IconName;
}> = [
  { number: "01", name: "FusionWeb", description: "Multi-modal Intelligence Platform", href: "https://fusion.sjtu.edu.cn", color: "#00f0ff", icon: "globe" },
  { number: "02", name: "FOOD", description: "Food & Nutrition AI System", href: "https://food.sjtu.edu.cn", color: "#ff7a00", icon: "database" },
  { number: "03", name: "SDC", description: "Spatial Data Computing Lab", href: "https://sdc.sjtu.edu.cn", color: "#d829dd", icon: "cpu" },
  { number: "04", name: "Skeleton", description: "3D Skeleton Reconstruction", href: "https://cadar.ai", color: "#00ff88", icon: "box" },
  { number: "05", name: "3DAnno", description: "3D Annotation & Perception", href: "https://prior.ai", color: "#ff2d78", icon: "layers" },
  { number: "06", name: "TCB", description: "Trustworthy Cognitive Brain", href: "https://universee.ai", color: "#2d7bff", icon: "rocket" },
];

function ProjectIcon({ name }: { name: IconName }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "globe") return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>;
  if (name === "database") return <svg {...common}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></svg>;
  if (name === "cpu") return <svg {...common}><path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2" /><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="8" y="8" width="8" height="8" rx="1" /></svg>;
  if (name === "box") return <svg {...common}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5M12 22V12" /></svg>;
  if (name === "layers") return <svg {...common}><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></svg>;
  return <svg {...common}><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" /><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" /></svg>;
}

function ExternalLinkIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <div className="background" aria-hidden="true">
        <div className="hero-image" />
        <div className="background-shade" />
        <div className="grid-lines" />
      </div>
      <div className="glows" aria-hidden="true">
        <span className="glow glow-cyan" />
        <span className="glow glow-purple" />
        <span className="glow glow-blue" />
        <span className="glow glow-green" />
      </div>

      <div className="page-content">
        <header className="topbar" aria-label="实验室与学校标识">
          <img className="header-logo logo-sjtu" src="/logo-sjtu.png" alt="上海交通大学" />
          <img className="header-logo logo-fusion" src="/logo-fusion-v2.png" alt="智慧信息融合实验室" />
        </header>

        <section className="intro">
          <h1>
            <span>Smart Sensor Fusion Laboratory</span>
            <span className="gradient-title">智慧信息融合实验室</span>
          </h1>
        </section>

        <section className="project-grid" aria-label="实验室项目">
          {projects.map((project, index) => (
            <a key={project.number} className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" style={{ "--accent": project.color, "--delay": `${index * 80}ms` } as CSSProperties}>
              <article className="project-card">
                <div className="card-beam" />
                <div className="card-aura" />
                <div className="card-content">
                  <div className="card-top">
                    <span className="icon-box"><ProjectIcon name={project.icon} /></span>
                    <span className="project-number">{project.number}</span>
                  </div>
                  <div>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                  </div>
                  <div className="visit"><span>访问站点</span><ExternalLinkIcon /></div>
                </div>
              </article>
            </a>
          ))}
        </section>

        <footer><p>SJTU SMART SENSOR FUSION LAB · ALL RIGHTS RESERVED</p></footer>
      </div>
    </div>
  );
}
