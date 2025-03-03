import styles from './home.module.css'
import { Link } from "react-router-dom"; 
import logo from "../../img/logo.png";
import LinkButton from '../layout/linkButton'
function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo(a) à <span>Alfa Venezianas!</span></h1>
      <p>Conheça nosso trabalho</p>
      <LinkButton to="/companyInformation" text="Solicitar orçamento"></LinkButton>
      <Link to={"/"}><img src={logo} alt="Logo" style={{ width: '250px' }}/></Link>
    </section>
  )
}
export default Home;
