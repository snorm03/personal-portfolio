import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((n) => (
          <Card key={n}>
            <CardContent className="p-4">
              <img
                src={`https://source.unsplash.com/400x200/?project-${n}`}
                alt={`Project ${n}`}
                className="rounded mb-2"
              />
              <h3 className="text-xl font-bold">Project {n}</h3>
              <p className="mb-2">
                This is a brief description of project {n} showcasing design and
                functionality.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Project
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
