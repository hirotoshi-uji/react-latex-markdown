import React from "react" ;                                                                                                                                                          
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';
//import 'katex/dist/katex.min.css';
import './../../../node_modules/katex/dist/katex.min.css';

const _mapProps = (props) => ({
  ...props,
  escapeHtml: false,
  plugins: [
    RemarkMathPlugin
  ],
  renderers: {
    ...props.renderers,
    math: ({value}) => <BlockMath>{value}</BlockMath>,
    inlineMath: ({value}) => <InlineMath>{value}</InlineMath>
    //math: ({value}) => `math: ${value}`,
    //inlineMath: ({value}) => `inlineMath: ${value}`
  }
 });

// const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;
const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;

export default Markdown;
