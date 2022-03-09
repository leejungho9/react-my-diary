
import { useSelector } from "react-redux";
import List from "../components/List";


export default function ListContainer() {
    const diarys = useSelector(state => state.diarys.diarys);
    const loading = useSelector(state => state.diarys.loading);
    return <List diarys = {diarys} loading={loading}/>

};
