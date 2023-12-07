import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css"

const CardList = () => {
    return (
        <div className={styles.container}>
            CardList
            <Pagination />
        </div>
    );
}
 
export default CardList;