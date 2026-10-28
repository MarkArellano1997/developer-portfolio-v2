/**
 * Componente tarjeta de un solo proyecto.
 * Muestra nombre, descripción, lenguaje principal, estrellas y enlace.
 * Maneja repositorios sin descripción o sin lenguaje.
 */
export default function Project({ repo }) {
  const hasDescription = repo.description && repo.description.trim().length > 0;
  const hasLanguage = repo.language && repo.language.trim().length > 0;

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-zinc-200 bg-[#F1F5F9] p-5 shadow-sm transition hover:shadow-md hover:border-blue-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-zinc-900">
          {repo.name}
        </h3>
        <a
          href={repo.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
        >
          Ver →
        </a>
      </div>

      <p className="text-sm text-zinc-700">
        {hasDescription ? repo.description : "Sin descripción disponible."}
      </p>

      <div className="mt-auto flex items-center gap-4 text-sm text-zinc-600">
        <span className="flex items-center gap-1">
          <span
            className={`inline-block h-3 w-3 rounded-full ${
              hasLanguage ? "bg-blue-600" : "bg-zinc-300"
            }`}
            aria-hidden="true"
          />
          {hasLanguage ? repo.language : "No especificado"}
        </span>

        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-blue-500"
            aria-hidden="true"
          >
            <path d="M10.5 2.25 12 7.5l5.25.75-4 4 1 5.5L12 15.75l-2.25 3L9 13.25l-4-4 5.25-.75Z" />
          </svg>
          {repo.stars}
        </span>
      </div>
    </article>
  );
}

/**
 * Estado de carga: muestra un esqueleto mientras se obtienen los datos.
 */
export function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex animate-pulse flex-col gap-3 rounded-lg border border-zinc-200 p-5"
        >
          <div className="h-5 w-1/2 rounded bg-zinc-200" />
          <div className="h-4 w-full rounded bg-zinc-200" />
          <div className="h-4 w-3/4 rounded bg-zinc-200" />
          <div className="mt-auto flex gap-4">
            <div className="h-4 w-20 rounded bg-zinc-200" />
            <div className="h-4 w-10 rounded bg-zinc-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Estado de error: muestra el mensaje recibido del servicio.
 */
export function ProjectsError({ message, onRetry }) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 rounded-lg border border-red-200 bg-red-50 p-6 text-center"
    >
      <p className="text-sm text-red-700">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}

/**
 * Estado vacío: no hay repositorios que mostrar.
 */
export function ProjectsEmpty() {
  return (
    <p className="text-center text-sm text-gray-500">
      No hay repositorios públicos disponibles en este momento.
    </p>
  );
}