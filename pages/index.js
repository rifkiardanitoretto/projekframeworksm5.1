import LandingPage from "../components/home"
import Layout from "../components/Layout"
// import Skill from "../components/skill"
export default function Home() {
  return (
    <Layout title="Home">
    <div>
        <LandingPage/>
        <div className="container">

        {/* <Skill/> */}
        </div>
    </div>
    </Layout>
  )
}
