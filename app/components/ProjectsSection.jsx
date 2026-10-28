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
async function ProjectList({ limit }) {
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

  const displayedRepos = Number.isInteger(limit) && limit > 0
    ? repos.slice(0, limit)
    : repos;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {displayedRepos.map((repo) => (
        <Project key={repo.htmlUrl} repo={repo} />
      ))}
    </div>
  );
}

/**
 * BotÃƒÂ³n para forzar la actualizaciÃƒÂ³n de la cachÃƒÂ© vÃƒÂ­a la API route.
 * Usa un estado local para evitar re-render infinitos.
 */
function handleRetry() {
  // Recarga la pÃƒÂ¡gina para obtener datos frescos (la cachÃƒÂ© se revalida
  // tambiÃƒÂ©n por tiempo, pero esto da una alternativa inmediata).
  if (typeof window !== "undefined") {
    window.location.reload();
  }
}

/**
 * SecciÃƒÂ³n de proyectos del portafolio.
 * Muestra una cabecera y la lista de repositorios cargada desde GitHub.
 */
export default function ProjectsSection({ limit }) {
  return (
    <section id="projects" className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900">Proyectos</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Mis repositorios pÃƒÂºblicos de GitHub, actualizados periÃƒÂ³dicamente.
            </p>
          </div>
        </div>

        <Suspense fallback={<ProjectsLoading />}>
          <ProjectList limit={limit} />
        </Suspense>

        {Number.isInteger(limit) && limit > 0 && (
          <div className="mt-10 flex justify-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2"
            >
              Ver todos los proyectos &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
