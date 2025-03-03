import { Link } from "react-router-dom";
import Container from "./container";
import styles from './navbar.module.css'
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to={"/"}><img src={logo} alt="Logo" style={{ width: '75px' }}/></Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to={"/"}>Home</Link></li>
          <li className={styles.item}><Link to={"/companyInformation"}>Orçamentos</Link></li>
          <li className={styles.item}><Link to={"/projects"}>Projetos</Link></li>
          <li className={styles.item}><Link to={"/company"}>Empresa</Link></li>
          <li className={styles.item}><Link to={"/contact"}>Contato</Link></li>
        </ul>       
      </Container>
    </nav>
  );
}
export default Navbar;
