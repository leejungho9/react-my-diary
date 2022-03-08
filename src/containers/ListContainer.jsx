import { Button, PageHeader, Table } from "antd";
import Layout from "../components/Layout";

export default function ListContainer() {
    const goAdd = () => {};
    const logout = () => {};

    return (
            <Layout>
                <PageHeader title ={<div>내 일기장</div>}
                extra = {[<Button key="2" type="secondary" onClick={goAdd}>일기 추가</Button>,
                <Button key="1"type="secondary" onClick={logout}>로그아웃</Button>]}
                />        
            <Table dataSource={[]} columns={[
            {
                title : '번호',
                dataIndex : 'number',
                key : 'number',
                width: '10%',
                align : 'center',
                render : () => <div>Book</div>
                
            },
            {
                title : '제목',
                dataIndex : 'title',
                key : 'title',
                width: '50%',
                align : 'center',
                render : () => <div>Title</div>
            },
            {
                title : '날짜',
                dataIndex : 'date',
                key : 'date',
                width: '20%',
                align : 'center',
                render : () => <div>Date</div>
            },
            {
                title : '날씨',
                dataIndex : 'weather',
                key : 'weather',
                width: '20%',
                align : 'center',
                render : () => <div>weather</div>
            },



            ]}/>
            </Layout>
        );
        function click() {
            
        
    }
}