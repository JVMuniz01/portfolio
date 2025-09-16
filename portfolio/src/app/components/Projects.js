const projectList = [
  {
    title: "Projeto 1",
    description: "Descrição breve do projeto 1",
    link: "https://github.com/seu-usuario/projeto1"
  },
  {
    title: "Projeto 2",
    description: "Descrição breve do projeto 2",
    link: "https://github.com/seu-usuario/projeto2"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">
              Repositório
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
