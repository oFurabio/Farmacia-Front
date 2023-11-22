import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="min-h-[57vh]">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App