
import { Button, PageHeader, Table } from 'antd';
import { useEffect } from 'react';
import Layout from './Layout';
import moment from "moment";



const List = ({diarys, loading, goAdd, logout,error}) => {

    useEffect(()=> {
        if(error) {
            logout();
        }
    },[error, logout]);



    return  (
      <Layout>
              <PageHeader title ={<div>내 일기장</div>}
              extra = {[<Button key="2" type="primary" onClick={goAdd}>일기 추가</Button>,
              <Button key="1" type="primary" onClick={logout}>로그아웃</Button>]}
              />        
          <Table  dataSource={diarys}
          columns={[
              
              {
                  title : '제목',
                  dataIndex : 'title',
                  key : 'title',
                  width: '58%',
                  align : 'center',
    
              },
              {
                  title : '날짜',
                  key : 'date',
                  width: '22%',
                  align : 'center',
                 
                 render : () =>   moment().format('MM-DD-YYYY hh:mm a')

              },
          
              {
                  title : '날씨',
                  dataIndex : 'weather',
                  key : 'weather',
                  width: '20%',
                  align : 'center',
              },
              
          ]}
           loading = {  loading }
           
          />
          
      </Layout>
        
      );

    
}

export default List;