
import { Button, PageHeader , Input, Rate } from "antd";
import styles from "./Detail.module.css"
import Layout from './Layout';
const { TextArea } = Input;

const Detail = ({ diary, back, error, deletediary  }) => {
    console.log(diary)
    return (
        <Layout>
           <PageHeader
          onBack= {back}
           title={<div> 내 일기장 </div>}
           subTitle ="오늘 하루를 되돌아보세요"
           extra={[
            <Button
            key="2"
            type="primary"
            onClick={click}
            >
            수정하기
          </Button>,
           <Button
           key="1"
           type="primary"
           onClick={clickDelete}
           >
           삭제하기
         </Button>,
         
           ]}
       />

       <div className={styles.detail}>
               <div className={styles.title}>
                    {diary.title}          
               </div>
           <div className={styles.container}>
               <div className={styles.input_weather}>
                   날씨
                    <div className={styles.weather_area}>
                      {diary.weather}   
                    </div>
               </div>
      
               <div className={styles.input_weather}>
                   만족도
                   <div className={styles.input_area}>
                   <div className={styles.input_input_feeling}>
                   <span>
                    <Rate  value={diary.feels.feel} />
                    {diary.feels.feel ? <span className="ant-rate-text">{[diary.feels.feel]}</span> : ''}
                  </span>
           
                   </div>
                   </div>
               </div>
  
           </div>

           <div className={styles.input_area}>
               <TextArea
               className={styles.input_content}
               rows={15}
               value={diary.content}    
               readOnly    
               />
           </div>
           
           <div className={styles.button_area}>
           </div>
       </div>
       </Layout>
 );

  function click() {
    // edit();
  }
  function clickDelete() {

    deletediary(diary);
  }
};
export default Detail;