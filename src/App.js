import React, {useState, useEffect} from 'react';
import { Layout, Select, List, Card, Typography, Image } from 'antd';
import './style.css'
const { Header, Footer, Content } = Layout;
import {fetchMostViewedArticles} from './api'
function App() {
  const { Title, Paragraph } = Typography;
  const [news, setNews] = useState([])
  useEffect(() => {
    fetchMostViewedArticles(1).then((res) => {
      console.log('res res res ', res);
      if(res.status == 'OK'){
        setNews(res.results)
      }
    })
  }, [])
  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  return (
    <>
    <Layout>
      <Header className='header'>
        <h1> NY Times App </h1> 
      </Header>
      <Content className='content' >
        <Select
          defaultValue="1"
          size="middle"
          onChange={handleChange}
          options={[
            { value: '1', label: 'One' },
            { value: '7', label: 'Seven' },
            { value: '30', label: 'Thirty' },
          ]}
          className='select'
        />
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={news}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                title={<a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                cover={
                  <Image
                    alt="Article"
                    src={item.media?.[0]?.["media-metadata"]?.[2]?.url}
                    height={200}
                    preview={false}
                  />
                }
              >
                <Paragraph><strong>{item.byline}</strong></Paragraph>
                <Paragraph>{item.abstract}</Paragraph>
                <Paragraph type="secondary">{item.published_date}</Paragraph>
              </Card>
            </List.Item>
          )}
        />
      </Content>
      <Footer >
        <span> Copyright (c) 2025 The New York Times Company.  All Rights Reserved</span>
      </Footer>
    </Layout>
    </>
  );
}

export default App;
