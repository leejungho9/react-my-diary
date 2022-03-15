import { Button, Input, PageHeader } from "antd"
import TextArea from "antd/lib/input/TextArea"
import Layout from "./Layout"
import styles from "./Edit.module.css"
import { useEffect, useRef, useState } from "react"
import { Rate, message } from 'antd';


const Edit = ({diary, back, logout, loading, error, edit }) => {
    console.log(diary);
    const titleRef = useRef();
    const weatherRef = useRef();
    const contentRef = useRef();
  
    const [state, setState] = useState({feel: diary.feel});
  
    const { feel } = state;
    
    const handleChange = (feel) => {
      setState({ feel });
     
    };

    useEffect(() => {
        if (error) {
          logout();
        }
      }, [error, logout]);
  
      return ( 
        <Layout>
            <PageHeader
             onBack= {back}
            title={<div> 일기 수정하기</div>}
            subTitle ="오늘 하루를 재정리해보세요"
            extra={[
            <Button 
                key="1" 
                type="primary" 
                onClick={logout} 
                className={styles.button_logout}>
                로그아웃
            </Button>
            ]}
        />

        <div className={styles.edit}>
                <div className={styles.input_title}>
                    제목
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <Input placeholder="Title" className={styles.input_input_title} ref={titleRef} defaultValue={diary?.title || ''}/>
                </div>
            <div className={styles.container}>
                <div className={styles.input_weather}>
                    날씨
                    <span className={styles.required}> *</span>
                    <div className={styles.input_area}>
                        <Input placeholder="Weather" className={styles.input_input_weather} ref={weatherRef} defaultValue={diary?.weather || ''}/>
                    </div>
                </div>
       
                <div className={styles.input_weather}>
                    만족도
                    <span className={styles.required}> *</span>
                    <div className={styles.input_area}>
                    <div className={styles.input_input_feeling}>
                    <span>
                        <Rate onChange={handleChange} value={feel} />
                        {feel ? <span className="ant-rate-text">{[feel ]}</span> : ''}
                    </span>
                    </div>
                    </div>
                </div>
   
            </div>

            <div className={styles.input_comment}>
                내용
                <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
                <TextArea
                className={styles.input_content}
                rows={15}
                placeholder="Content"
                ref={contentRef}
                defaultValue={diary?.content || ''}
                />
            </div>
            
            <div className={styles.button_area}>
                <Button size="large" loading={loading} onClick={click} className={styles.button}>
                    작성완료
                </Button>
            </div>
        </div>
        </Layout>
    )
    function click () {
        const title = titleRef.current.input.value;
        const weather = weatherRef.current.input.value;
        const content =  contentRef.current.resizableTextArea.props.value;
      
      
        console.log(feel);
        if(title === '' || weather === '' || content === '' || feel === ''|| feel === undefined) {
            message.error(' 모든 내용을 입력해주세요')
            return;
        } 
        
        edit({
            title, weather, content, feel
        })
    }
}

export default Edit;