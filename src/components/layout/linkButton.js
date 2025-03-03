import styles from './linkButton.module.css'
import {Link} from 'react-router-dom'

function LinkBottom({to, text}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )

}

export default LinkBottom;