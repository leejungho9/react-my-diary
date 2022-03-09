import Layout from "./Layout"
import {PageHeader, Button, Input, } from 'antd';
import styles from "./Add.module.css";
import TextArea from "antd/lib/input/TextArea";

const Add = ({back, loading, logout}) => {
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
            <div className={styles.container}>
                <div className={styles.input_title}>
                    제목
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <Input placeholder="Title" className={styles.input_input_title} />
                </div>
                <div className={styles.input_weather}>
                    날씨
                    <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                    <Input placeholder="weather" className={styles.input_input_weather} />
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
                placeholder="Comment"
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

            }
}

export default Add;