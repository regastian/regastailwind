import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Lihat Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
