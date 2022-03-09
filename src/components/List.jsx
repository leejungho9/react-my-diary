
import { Button, PageHeader, Table } from 'antd';
import Layout from './Layout';
//  List Props {
//  diarys Diary[] | null;
//  loading : boolean; 
//}
const List = ({loading, diarys}) => {
    const goAdd = () => {};
    const logout = () => {};

    return  (
      <Layout>
              <PageHeader title ={<div>내 일기장</div>}
              extra = {[<Button key="2" type="primary" onClick={goAdd}>일기 추가</Button>,
              <Button key="1" type="primary" onClick={logout}>로그아웃</Button>]}
              />        
          <Table dataSource={[]}
          columns={[
              {
                  title : '번호',
                  dataIndex : 'number',
                  key : 'number',
                  width: '10%',
                  align : 'center',
                  
              },
              {
                  title : '제목',
                  dataIndex : 'title',
                  key : 'title',
                  width: '50%',
                  align : 'center',
              },
              {
                  title : '날짜',
                  dataIndex : 'date',
                  key : 'date',
                  width: '20%',
                  align : 'center',
              },
              {
                  title : '날씨',
                  dataIndex : 'weather',
                  key : 'weather',
                  width: '20%',
                  align : 'center',
              },
          ]}
          loading = { diarys === null || loading }

          rowKey = "diaryId"
          />
      </Layout>
      );
}

export default List;