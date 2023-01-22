import { Viewer } from '@toast-ui/react-editor'
import React from 'react';

interface viewrProp{
    contents: string;
  }
  
function LoadViewer({contents}:viewrProp) {
return <>
<Viewer
initialValue={contents}
/></>
}
export default LoadViewer