import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProfileParent from './components/ProfileCard/ProfileParent'
import FamilyTree from './components/FamilyTree/Grandparent'
import './App.css'

function App() {

// const  ProfileName = "Nuvola"
// const  ProfileTitle = "Canine master"

  return (
    <>
     <Header />
      {/* <Profilecard ProfileName={ProfileName} ProfileTitle={ProfileTitle}/> */}
     <ProfileParent />
     {/* When App.tsx is rendered, it includes ProfileParent. */}
     <FamilyTree />
     <Footer />
    </>
  )
}

export default App
