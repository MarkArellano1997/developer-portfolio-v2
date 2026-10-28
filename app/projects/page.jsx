import ProjectsSection from "@/app/components/ProjectsSection";

export const metadata = {
  title: "Proyectos | Developer Portfolio",
  description: "Mis repositorios públicos de GitHub.",
};

export default function ProjectsPage() {
  return (
    <main className="py-8">
      <ProjectsSection />
    </main>
  );
}