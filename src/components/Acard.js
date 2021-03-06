import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import '../cssFile/Acard.css';
import { Card, Icon, Avatar, Rate } from 'antd';

const { Meta } = Card;

class Acard extends React.Component {
    
    render() {
        return(
          <div className = "klong">
             <Card
                style={{ width: 392, marginLeft: 10, marginTop: 3}}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        style={{width: 0, hight: 0}}
                    />
                    
                }
                    actions={[ <Link to = '/wait'> BOOK    <Icon type="check" /> </Link>, <Link to = '/infoDoc'>Info  <Icon type="question" /></Link> ]}
                >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Kitpavin Chaiwong"
                    description="from Ramatipbadee"
                    style={{ width: 300, margin: 10, left: 100}}
                />
                <Rate allowHalf defaultValue={2.5} />
            </Card>
          </div>
        );
    }
}


export default Acard;