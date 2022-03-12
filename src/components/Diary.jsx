
import momnet from "moment";
import { Link } from "react-router-dom";
import styles from './Diary.module.css'

const Diary = ({diaryId, title, date, weather }) => (
<div> 
     <div>
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
        <Link to={`/diary/${diaryId}`}>
            {momnet().format('MM-DD-YYYY hh:mm a')}
        </Link>
    </div>
    <div >
        <Link to={`/diary/${diaryId}`}>
            {weather}
        </Link>
    </div>

</div>)
export default Diary;