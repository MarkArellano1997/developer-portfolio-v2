/**
 * Sección "About" del portafolio.
 *
 * Muestra una introducción profesional del desarrollador. El contenido se
 * basa en la información disponible en el proyecto (Hero y PROJECT.md):
 * - Ingeniero mecatrónico y estudiante de Desarrollo de Software en TECSUP.
 * - Apasionado por construir aplicaciones web modernas, accesibles y
 *   centradas en el usuario.
 *
 * No se inventa experiencia laboral, historial académico adicional ni
 * datos personales que no estén respaldados por el proyecto.
 */
export default function About() {
    return (
        <section id="about" className="py-12">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                        Sobre mí
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500">
                        Un poco más sobre quién detrás del portafolio.
                    </p>

                    <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-700">
                        <p>
                            Ingeniero mecatrónico y estudiante de Desarrollo de
                            Software en TECSUP. Apasionado por construir
                            aplicaciones web modernas, accesibles y centradas
                            en el usuario.
                        </p>
                        <p>
                            Combino la formación en ingeniería con el interés
                            por el desarrollo de software para crear soluciones
                            que sean claras, mantenibles y útiles para las
                            personas que las usan.
                        </p>
                        <p>
                            Actualmente enfocado en aprender y aplicar
                            JavaScript, React, Next.js y arquitectura de
                            proyectos, construyendo proyectos reales que
                            permitan seguir creciendo como desarrollador.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-4 py-1.5 text-sm font-medium text-zinc-700">
                            Ingeniería Mecatrónica
                        </span>
                        <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-4 py-1.5 text-sm font-medium text-zinc-700">
                            Desarrollo de Software
                        </span>
                        <span className="inline-flex items-center rounded-full bg-[#F1F5F9] px-4 py-1.5 text-sm font-medium text-zinc-700">
                            TECSUP
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}