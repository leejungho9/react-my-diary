import Layout from "./Layout"
import {PageHeader, Button, Input, message, } from 'antd';
import styles from "./Add.module.css";
import TextArea from "antd/lib/input/TextArea";
import Feeling from "./Feeling";
import { useRef } from "react";

const Add = ({back, loading, logout, add}) => {
    const titleRef = useRef();
    const weatherRef = useRef();
    const contentRef = useRef();

    return (
         <Layout>
            <PageHeader onBack= {back}
            title={<div> Add Diary </div>}
            subTitle ="오늘 하루를 정리해보세요"
            extra={[
            <Button key="1" type="primary" onClick={logout} className={styles.button_logout}>
                로그아웃
            </Button>
            ]}
        />

        <div className={styles.add}>
                <div className={styles.input_title}>
                    제목
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <Input placeholder="Title" className={styles.input_input_title} ref={titleRef}/>
                </div>
            <div className={styles.container}>
                <div className={styles.input_weather}>
                    날씨
                    <span className={styles.required}> *</span>
                    <div className={styles.input_area}>
                        <Input placeholder="Weather" className={styles.input_input_weather} ref={weatherRef} />
                    </div>
                </div>
       
                <div className={styles.input_weather}>
                    만족도
                    <div className={styles.input_area}>
                    <div className={styles.input_input_feeling}>
                        <Feeling/>
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
                />
            </div>
            
            <div className={styles.button_area}>
                <Button size="large" loading={loading} onClick={click} className={styles.button}>
                    작성완료
                </Button>
            </div>
        </div>
        </Layout>
        );
            function click () {
                const title = titleRef.current.input.value;
                const weather = weatherRef.current.input.value;
                const content =  contentRef.current.resizableTextArea.props.value;

                if(title === undefined || weather === undefined || content === undefined) {
                    message.error(' 모든 내용을 입력해주세요')
                    return;
                } 
                add({
                    title, weather, content
                })
            }
           
}

export default Add;