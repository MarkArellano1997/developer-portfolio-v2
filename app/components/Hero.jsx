import Image from "next/image"
import Button from '@/app/components/Button'

export default function Hero() {
    return(
        <section className="flex min-h-[80vh] items-center bg-white text-[#18181B]">
            <div className="mx-auto max-w-7xl px-6">

                <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">

                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-6xl font-bold tracking-tighter text-[#18181B]">Hola, soy Marcos</h1>

                        <p className="text-3xl font-semibold text-[#2563EB]">
                            Desarrollador Web Full Stack
                        </p>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ingeniero mecatrónico y estudiante de Desarrollo de Software en TECSUP. Apasionado por construir aplicaciones web modernas, accesibles y centradas en el usuario.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <Button href="/projects" variant="primary">
                                Ver proyectos
                            </Button>

                            <Button href="#contact" variant="secondary">
                                Contactarme
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="relative h-72 w-72 overflow-hidden rounded-2xl shadow-xl md:h-96 md:w-96">
                            <Image
                                src="/images/profile.jpg"
                                alt="Foto de Marcos Arellano"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}