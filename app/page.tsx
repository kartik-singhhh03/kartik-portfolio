import Hero from '@/components/home/Hero'
import SkillsPreview from '@/components/home/SkillsPreview'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import ContributionsPreview from '@/components/home/ContributionsPreview'
import ExperiencePreview from '@/components/home/ExperiencePreview'

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsPreview />
      <ProjectsPreview />
      <ExperiencePreview />
      <ContributionsPreview />
    </>
  )
}
