
import { Button, PageHeader, Table } from 'antd';
import { useEffect } from 'react';
import Layout from './Layout';
import Diary from './Diary'
import styles from './List.module.css';
const List = ({ diarys, loading, goAdd, logout,error, diaryId, }) => {

    useEffect(()=> {
        if(error) {
            logout();
        }
    },[error, logout]);
    
    return  (
        <Layout>
              <PageHeader title ={<div>내 일기장</div>}
              extra = {[
              <Button key="2" type="primary" onClick={goAdd}>일기 추가</Button>,
              <Button key="1" type="primary" onClick={logout}>로그아웃</Button>]}
              />        
          <Table  dataSource={diarys}
         columns={[
             { title : '일기 목록',
             dataIndex : 'diary',
             key : 'diary',
             render : (text, record) => <Diary {...record}/>
            },
            ]}

            rowKey="diaryId"
            pagination={false}
            className={styles.table}
            />
      </Layout>
        
        );
        
        
        
}

export default List;