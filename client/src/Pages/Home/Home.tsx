import Blobs from "../../Components/Blobs"
import Header from "../../Components/Header"
import HomeMain from "../../Section/HomeMain"
import style from "./Home.module.scss"

const Home = () => {
  return (
    <main className={style.home}>
      <Header />
      <Blobs />
      <HomeMain />
    </main>
  )
}

export default Home
