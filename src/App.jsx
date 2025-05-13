import Carrinho from "./components/Carrinho"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <div className="h-screen flex flex-col">
    <Header/>
    <main className="bg-[#F9F8FE] h-full">
      <Carrinho/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
