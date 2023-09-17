
import Header from '@/components/molecules/HeaderMolecule'
import NavbarMolecule from '@/components/molecules/NavbarMolecule'
import IntroMolecule from '@/components/molecules/IntroMolecule'
import FooterMolecule from '@/components/molecules/FooterMolecule'

export default function Home() {

  return (
    <>

      <Header title="StudyMate" description="Welcome to StudyMate. Your online tutoring site."/>      

      <NavbarMolecule />
      
      <main style={{ marginTop: '80px' }} className='w-full'>
        
        <IntroMolecule />

      </main>

      <FooterMolecule />
      
    </>
  )
}