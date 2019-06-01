import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../cssFile/Acard.css';
import { Card, Icon, Avatar, Rate } from 'antd';
import {Link} from 'react-router-dom';

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
                actions={[ <Link to = '/wait'><div> BOOK    <Icon type="check" /> </div></Link>, <Link to = '/infoDoc'><div>Info  <Icon type="question" /></div></Link> ]}                >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="asdfasd sidufhgsdfg"
                    description="from Ramatipbadee"
                    style={{ width: 300, margin: 10, left: 100}}
                />
                <Rate allowHalf defaultValue={4.5} />
            </Card>
          </div>
        );
    }
}


export default Acard;