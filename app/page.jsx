import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Skill from '@/app/components/Skill'
import ProjectsSection from '@/app/components/ProjectsSection'
import Contact from '@/app/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Skill />

      <ProjectsSection limit={10} />

      <Contact />
    </main>
  );
}
