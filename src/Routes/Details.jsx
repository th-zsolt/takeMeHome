import { useParams } from "react-router-dom";
import styles from './Details.module.css';
import cake from '../assets/Svgs/cake.svg';
import chartBar from '../assets/Svgs/chart-bar.svg';
import check from '../assets/Svgs/check.svg';
import puzzlePiece from '../assets/Svgs/puzzle-piece.svg';
import xCircle from '../assets/Svgs/x-circle.svg';
import List from "../components/List/List";
import Background from "../components/Background/Background";
import chevronLeft from '../assets/Svgs/chevron-left.svg'
import { Link } from "react-router-dom";

function Details({dogs}) {
    const {dogID} = useParams();

    const dogItem = dogs.find(dog => {
        return dog.objectID == dogID;
    });
 
    return (
        <>        
            <Link to={`/`}>
                <img src={chevronLeft} alt="" className={styles.backButton} />
            </Link>
            <div className={styles.page}>
                <Background style={"details"}/>

                <h1 className ={styles.name}>
                    {dogItem.name}
                </h1>

                <img src={`/src/assets/Images/${dogItem.image}`} className={styles.dogImage} />

                <span className={styles.flexContainer}>
                    <img src={cake} alt="" className={styles.icon} />
                    <p>Age:</p>
                    <p>{dogItem.age}</p>
                </span>
                
                <span className={styles.flexContainer}>
                    <img src={chartBar} alt="" className={styles.icon} />
                    <p>Size:</p>
                    <p>{dogItem.size}</p>
                </span>

                <span className={styles.flexContainer}>
                    <NoviceOwner noviceFlg={dogItem.noviceOwners} />
                </span>

                <span className={styles.flexContainer}>
                    <img src={puzzlePiece} alt="" className={styles.icon} />
                    <p>Personality:</p>
                    <List list={dogItem.pers}/>
                </span>

                <p className={styles.desc}>{dogItem.desc}</p>
            </div>
        </>
    );
}

const NoviceOwner = ({noviceFlg}) => {
    if (noviceFlg) {
        return (
            <>
                <img src={check} alt="" className={styles.icon} />
                <p className={styles.detailValue}>Good for beginner owners.</p>
            </>
        );
    } else {
        return (
            <> 
            <img src={xCircle} alt="" className={styles.icon} />
            <p className={styles.detailValue}>Recommended for experienced owners.</p>
            </>
        );
    }
};

export default Details
