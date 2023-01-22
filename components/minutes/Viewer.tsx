import { Viewer } from '@toast-ui/react-editor'
import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

interface viewrProp{
    initialValue: string;
  }
  
function LoadViewer({initialValue}:viewrProp) {
return <>
    <Viewer initialValue={initialValue}></Viewer>
</>
}
export default LoadViewer