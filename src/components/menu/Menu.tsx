import Link from "next/link";
import styles from "./menu.module.css"
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
    return (
        <div className={styles.container}>

            <h2 className={styles.subtitle}>what's hot</h2>
            <h1 className={styles.title}>Most Popular</h1>
            {/* <div className={styles.items}>
                <Link className={styles.item} href="/" >
                    
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link className={styles.item} href="/" >
                    
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link className={styles.item} href="/" >
                    
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link className={styles.item} href="/" >
                    
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.coding}`}>Coding</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link className={styles.item} href="/" >
                    
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.food}`}>Food</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
            </div> */}
            <MenuPosts withImage={false} />

            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />

            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors pick</h1>
            {/* <div className={styles.items}>
                <Link className={styles.item} href="/" >
                    <div className={styles.imageContainer} >
                        <Image  className={styles.image} src="/p1.jpeg" fill alt=""/>
                    </div>
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link className={styles.item} href="/" >
                    <div className={styles.imageContainer} >
                        <Image  className={styles.image} src="/p1.jpeg" fill alt=""/>
                    </div>
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link className={styles.item} href="/" >
                    <div className={styles.imageContainer} >
                        <Image  className={styles.image} src="/p1.jpeg" fill alt=""/>
                    </div>
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link className={styles.item} href="/" >
                    <div className={styles.imageContainer} >
                        <Image  className={styles.image} src="/p1.jpeg" fill alt=""/>
                    </div>
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.coding}`}>Coding</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
                <Link className={styles.item} href="/" >
                    <div className={styles.imageContainer} >
                        <Image  className={styles.image} src="/p1.jpeg" fill alt=""/>
                    </div>
                    <div className={styles.textContainer}  >
                        
                        <span className={`${styles.category} ${styles.food}`}>Food</span>
                        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                        <div className={styles.details}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>-10.03.2023</span>
                        </div>

                    </div>
                </Link>
            </div> */}
            <MenuPosts withImage />
        
        </div>
    );
}
 
export default Menu;