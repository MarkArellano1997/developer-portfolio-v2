/**
 * Sección "Skills" del portafolio.
 *
 * Las tecnologías listadas son únicamente aquellas respaldadas por la
 * información disponible en el proyecto:
 *   - `PROJECT.md` → lista oficial de tecnologías del portafolio.
 *   - Código real (`app/lib/github.js`, `app/globals.css`, `package.json`):
 *     Next.js, React, Tailwind CSS, Git/GitHub, Vercel.
 *
 * No se inventan niveles de dominio, certificaciones ni herramientas que no
 * aparezcan en el proyecto. Las "Áreas de aprendizaje" provienen del apartado
 * "Objetivos de aprendizaje" de `PROJECT.md` y se marcan como tales.
 */
export default function Skill() {
    const tools = [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Vercel",
    ];

    const learning = [
        "JavaScript",
        "CSS",
        "Arquitectura de proyectos",
        "React",
    ];

    return (
        <section id="skills" className="py-12">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                        Habilidades
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500">
                        Tecnologías y áreas en las que trabajo y estudio.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                            Tecnologías en uso
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-3">
                            {tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="inline-flex items-center rounded-full bg-[#F1F5F9] px-4 py-1.5 text-sm font-medium text-zinc-800"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                            Áreas de aprendizaje
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600">
                            Objetivos de aprendizaje registrados en el proyecto:
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-3">
                            {learning.map((item) => (
                                <li key={item} className="list-none">
                                    <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}