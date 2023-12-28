import React from "react";
import { Select,Typography,Row,Col,Avatar,Card } from "antd";
import moment from 'moment';
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const {Text,Title} = Typography;
const {Option} = Select;
const demoImage = 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D';
const News = ({simplified}) => {
    const {data: cryptoNews } = useGetCryptoNewsQuery({newCategory : 'Cryptocurrency', count :simplified ? 5 : 12});
   // console.log(cryptoNews.data,"news");
    if(!cryptoNews) return 'Loading...';
    return (
        <Row gutter={[24,24]}>
            {/* {
                cryptoNews?.data?.map((news,i) => (
                    <Col xs={24} lg={8} key ={i}>
                        <Card hoverable className="news-card">
                            <a href={news?.url} target="blank" rel = "noreferrer">
                                  <div className="news-image-container">
                                     <Title className="news-title" level = {4} >
                                         {news?.title}
                                     </Title>
                                     <img width ='180px' height= '180px' 
                                     src={news?.thumbnail || demoImage} alt = "news"/>
                                  </div>
                                  <p>
                                    { news?.description.length > 100 ?
                                    `${news.description.substring(0,180)}...` 
                                     : news.description
                                    }
                                  </p>
                                  <div className="provider-container">
                                    <Avatar src ={news.pro}/>
                                  </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }  */}
        </Row>
    )
}

export default News;