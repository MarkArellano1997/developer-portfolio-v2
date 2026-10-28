import { Suspense } from "react";
import { getRepos } from "@/app/lib/github";
import Project, {
  ProjectsLoading,
  ProjectsError,
  ProjectsEmpty,
} from "@/app/components/Project";

/**
 * Componente async que carga los repositorios desde GitHub.
 * Se envuelve en Suspense para que el estado de carga se muestre mientras
 * se obtienen los datos.
 */
async function ProjectList() {
  let repos;
  let error = null;

  try {
    repos = await getRepos();
  } catch (e) {
    error = e instanceof Error ? e.message : "Error desconocido";
  }

  if (error) {
    return <ProjectsError message={error} onRetry={handleRetry} />;
  }

  if (!repos || repos.length === 0) {
    return <ProjectsEmpty />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {repos.map((repo) => (
        <Project key={repo.htmlUrl} repo={repo} />
      ))}
    </div>
  );
}

/**
 * Botón para forzar la actualización de la caché vía la API route.
 * Usa un estado local para evitar re-render infinitos.
 */
function handleRetry() {
  // Recarga la página para obtener datos frescos (la caché se revalida
  // también por tiempo, pero esto da una alternativa inmediata).
  if (typeof window !== "undefined") {
    window.location.reload();
  }
}

/**
 * Sección de proyectos del portafolio.
 * Muestra una cabecera y la lista de repositorios cargada desde GitHub.
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900">Proyectos</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Mis repositorios públicos de GitHub, actualizados periódicamente.
            </p>
          </div>
        </div>

        <Suspense fallback={<ProjectsLoading />}>
          <ProjectList />
        </Suspense>
      </div>
    </section>
  );
}