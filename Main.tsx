import {FC, Fragment} from "react";
import styles from '../../pract/styles/Home.module.sass'

const MainLayout: FC = () => {
    return <Fragment>
        <img alt={"./curve.svg"} className={styles.curve}/>
    </Fragment>
}
export default  MainLayout