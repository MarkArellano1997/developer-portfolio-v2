// Servicio para obtener repositorios públicos de GitHub.
// USA la API pública (sin autenticación) del usuario MarkArellano1997.
//
// Estrategia de caché:
//   - Se cachea la respuesta durante 1 hora (3600s) mediante `unstable_cache`
//     de Next.js, compatible con la versión 16.x instalada.
//   - El revalidador evita que la caché se quede obsoleta sin sobrecargar la API.
//
// Manejo de errores:
//   - Se capturan errores de red, respuestas no OK (404, 429, 5xx) y JSON inválido.
//   - Se lanzan errores descriptivos que el componente puede renderizar de forma amigable.

import { unstable_cache } from "next/cache";

const GITHUB_USER = "MarkArellano1997";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`;

/**
 * Obtiene la lista de repositorios públicos del usuario desde la API de GitHub.
 * Devuelve un array normalizado de objetos con los campos que usa el portafolio.
 *
 * @returns {Promise<Array<Object>>} Lista de repositorios normalizados.
 * @throws {Error} Si la red falla, la respuesta no es OK o el JSON es inválido.
 */
async function fetchReposFromGitHub() {
  const response = await fetch(GITHUB_API_URL, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "developer-portfolio",
    },
  });

  if (!response.ok) {
    // 429 = rate limit, 404 = usuario no encontrado, 5xx = error del servidor.
    const code = response.status;
    if (code === 404) {
      throw new Error(`GitHub: usuario ${GITHUB_USER} no encontrado (404).`);
    }
    if (code === 429) {
      throw new Error("GitHub: límite de requests alcanzado (429). Inténtalo más tarde.");
    }
    if (code >= 500) {
      throw new Error(`GitHub: error del servidor (${code}). Inténtalo más tarde.`);
    }
    throw new Error(`GitHub: respuesta inesperada del servidor (${code}).`);
  }

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("GitHub: respuesta con formato JSON inválido.");
  }

  // GitHub puede devolver un objeto de error (por ejemplo, si el usuario no existe)
  // en lugar de un array. Detectamos ese caso y lo tratamos como error.
  if (!Array.isArray(data)) {
    throw new Error("GitHub: la respuesta no es una lista de repositorios válida.");
  }

  return data.map(normalizeRepo);
}

/**
 * Normaliza un objeto de repo de GitHub al formato que usa el portafolio.
 * - name: nombre del repositorio.
 * - description: descripción o null si no hay.
 * - language: lenguaje principal o null si no se especifica.
 * - stars: número de estrellas.
 * - htmlUrl: enlace al repositorio.
 * - updatedAt: fecha de última actualización (ISO).
 * - isFork: true si es un fork (para filtrar opcionalmente).
 */
function normalizeRepo(repo) {
  return {
    name: repo?.name ?? "Repositorio sin nombre",
    description: repo?.description ?? null,
    language: repo?.language ?? null,
    stars: typeof repo?.stargazers_count === "number" ? repo.stargazers_count : 0,
    htmlUrl: repo?.html_url ?? "#",
    updatedAt: repo?.updated_at ?? null,
    isFork: Boolean(repo?.fork),
  };
}

/**
 * Obtiene los repositorios cacheados durante 1 hora.
 * `unstable_cache` es la API de caché de Next.js 16 para datos fetcheados.
 */
export const getRepos = unstable_cache(fetchReposFromGitHub, ["github-repos"], {
  tags: ["github-repos"],
  revalidate: 3600,
});