import React, { Component } from 'react';
import logo from './smallPic.jpg';
import { Button } from 'antd';
import "../cssFile/Map.css";
import { AutoComplete } from 'antd';
import HeaderMap from './HeaderMap';
import {Link} from 'react-router-dom';

function onSelect(value) {
    console.log('onSelect', value);
  }
  

  class Map extends React.Component {
    state = {
        dataSource: [],
      };
      handleSearch = value => {
        this.setState({
          dataSource: !value ? [] : [value, value + value, value + value + value],
        });
      };
        
    render(){
        const { dataSource } = this.state;
        return(
            <div className = "d">
                <HeaderMap/>
                <AutoComplete
                    dataSource={dataSource}
                    style={{ width: 370, margin: 10  }}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="start"
                />
                <AutoComplete
                    dataSource={dataSource}
                    style={{ width: 370, margin: 10  }}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="finish"
                />

                <div className = "pic">
                    <img src={logo} alt='logo' />
                </div>
                
                <pre/>
                <Link to = '/'>
                    <Button type="primary" block={true}>
                        CONFIRM
                    </Button>
                </Link>
                
            </div>
        );
    }
  }


  export default Map;