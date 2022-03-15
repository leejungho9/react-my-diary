import { Link } from "react-router-dom";
import styles from './Diary.module.css'

const Diary = ({createdAt, diaryId, title, date, weather }) => (

<div className={styles.diary}> 
     <div className={styles.number}>
        <Link to={`/diary/${diaryId}`}>
            {diaryId}
        </Link>
    </div>
    <div className={styles.title}>
        <Link className={styles._link_detail_title} to={`/diary/${diaryId}`}>
            {title}
        </Link>
    </div>
    <div className={styles.created}>
           {createdAt}
    </div>
    <div className={styles.weather} >
        <Link to={`/diary/${diaryId}`} className={styles.link_detail_weather}>
            {weather}
        </Link>
    </div>

</div>)
export default Diary;