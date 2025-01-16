import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProfileParent from './components/ProfileCard/ProfileParent'
import './App.css'

function App() {

// const  ProfileName = "Nuvola"
// const  ProfileTitle = "Canine master"

  return (
    <>
     <Header />
      {/* <Profilecard ProfileName={ProfileName} ProfileTitle={ProfileTitle}/> */}
     <ProfileParent />
     <Footer />
    </>
  )
}

export default App
