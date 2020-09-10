import React from 'react';
import Markdown from './Markdown';
import FetchMD from './FetchMD';

const content = `
# hogehoge
hogehoge hohogehoge  
jejejei
$$
F = ma
$$
`;


export default class Layout extends React.Component{
  render(){
    return(
      <div>
        <h1> helloworld </h1>
        <Markdown>{content}</Markdown>
        <FetchMD />
      </div>
    );
  }
}


