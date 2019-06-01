import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Icon, Card } from 'antd';
import  '../cssFile/Login.css';
import HeaderLogin from './HeaderLogin';
import {Link} from 'react-router-dom';

const { Meta } = Card;
class Search extends React.Component {
    state = {
        size: 'large',
      };
    
      handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };
    render(){
        const size = this.state.size;
        return(
           
            <div className = "set">
              <div className = "login">
                <HeaderLogin/>
              </div>
              
              <Button.Group size={size}>
                <Button type="primary">
                  {/* <Icon type="left" /> */}
                  crebit/dabit
                </Button>
                <Button type="primary">
                  Internet banking
                  {/* <Icon type="right" /> */}
                </Button>
              </Button.Group>

               <Card
                style={{ width: 500, margin: 50, width: 300, marginleft: 20, hight: 500, marginTop: 20}}
                cover={
               <div>
                    <h1> 
                        130 ฿
                    </h1>
                    <h4>
                      for 3 Times
                    </h4>
               </div>
                }
                actions={[<Icon type="facebook" />, <Icon type="google" />, <div>e-mail</div>]}
            >
                <Meta
                    title="Apo"
                    description="This is the description"
                    style = {{width: 250}}
                />
            </Card>
            <Link to = './map'>
              <Button type="primary" block>
                  PAY
              </Button>
            </Link>
            
          </div>
        );
    }

}

export default Search;