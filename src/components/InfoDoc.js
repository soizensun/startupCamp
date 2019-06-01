import React, { Component } from 'react';
import {Button} from 'antd';
import '../cssFile/InfoDoc.css';
import {  Avatar, Rate, Collapse, Icon } from 'antd';
import 'antd/dist/antd.css';
// import 'HeaderInfoDoc' from './HeaderInfoDoc';
import HeaderInfoDoc from './HeaderInfoDoc';
import {Link} from 'react-router-dom';

class InfoDoc extends React.Component {
    
    render(){
        const Panel = Collapse.Panel;

const text = `
The Doctor races to return to Earth fearing that The Master 
will return. However, the Master turns everyone on Earth 
into his own image. Little does he realize the greater 
danger that awaits him?
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
  fontSize: 17,
};
        return( 
            <div className = "main">
                <HeaderInfoDoc/>
                <div className = "avata"> 
                    <Avatar style={{ backgroundColor: '#87d068'  }} icon="user" size={64}/>
                    
                </div>  
                <div>
                    <Rate allowHalf defaultValue={2.5} />
                </div>
                <h2>
                    DR. Kitpavin Chaiwong
                </h2>
                <h3>
                    peditrician
                </h3>
                <h3>
                    (BAMS),(MBBS)
                </h3>
                <pre/>



                <div className = "set">
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                >
                    <Panel header="about" key="1" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                </Collapse>
                <Link to = './wait'>
                    <Button type="primary" block>
                        BOOK
                    </Button>
                </Link>
                
                </div>
               
            </div>
           
        );
    }
} 

export default InfoDoc;