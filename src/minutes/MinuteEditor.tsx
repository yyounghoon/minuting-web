import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import styled from '@emotion/styled';

interface IEditor{
  contents: string;
  setContents: (_: string) => void;
}

function MinuteEditor({contents, setContents}: IEditor) {
    const editorRef = useRef<any>();
  
    // const handleClick = (e: any) => {
    //   if(e.target.id === 'bold')
    //     editorRef.current.getInstance().exec('bold');
    //   else if(e.target.id === 'undo')
    //     editorRef.current.getInstance().exec('undo');
    //   else
    //     editorRef.current.getInstance().exec('redo');
    //   const curText = editorRef.current.getInstance().getHTML();
    //   setText(curText);
    // };
    const handleFocus = () => {
      console.log('focuse!');
    }
  
    const colorSyntaxOptions = {
      preset: ['#181818', '#ababab', '#393939']
    };
  
    const newContainer = document.createElement('div');
    const ul = document.createElement('ul');
    ul.innerHTML = `<li>first child</li><li>second child</li><li>third child</li>`;
    ul.addEventListener('click', (e: any) => {
      const [start, end] = editorRef.current.getInstance().getSelection();
  
      editorRef.current.getInstance().replaceSelection(`[@test](test)`, [start[0], start[1] - 1], end);
      editorRef.current.getInstance().eventEmitter.emit('closePopup');
    });
    newContainer.appendChild(ul);
  
    const widgetClick = () => {
      console.log('111111')
      const [start, end] = editorRef.current.getInstance().getSelection();
      
      editorRef.current.getInstance().replaceSelection(`[@test](test)`, [start[0], start[1] - 1], end);
    }
  
    const onKeyHandler = (et: any, ev: any) => {
      if(ev.key === '@'){
        // editorRef.current.getInstance().insertText('hihi');
        const popup = document.createElement('ul');
        popup.innerHTML = '클릭 해보세요';
        popup.style.width = '200px';
        popup.style.height = '100px';
        popup.style.backgroundColor = 'tomato';
        popup.addEventListener('click', widgetClick);
  
        editorRef.current.getInstance().addWidget(popup);
      }
    }

    const handleChange = () => {
      const curContents = editorRef.current.getInstance().getHTML();
      setContents(curContents);
    }
  
    const reWidgetRule = /\[(@\S+)\]\((\S+)\)/;
  
    return (
      <Container>
        <Editor
          initialValue={contents}
          onChange={handleChange}
          previewStyle="tab"
          height="400px"
          initialEditType="wysiwyg"
          hideModeSwitch={true}
          useCommandShortcut={true}
          ref={editorRef}
          onFocus={handleFocus}
          plugins={[[colorSyntax, colorSyntaxOptions]]}
          language="ko-KR"
          toolbarItems={[
            ['heading', 'bold'],
            ['ul', 'ol', 'task'],
            ['code', 'codeblock'],
            [{
              name: 'myItem',
              tooltip: 'myItem',
              command: 'undo',
              text: '◀️',
              className: 'toastui-editor-toolbar-icons',
              style: {backgroundImage: 'none', color: 'blue'}
            },
            {
              name: 'myItem2',
              tooltip: 'myItem2',
              command: 'redo',
              text: '▶️',
              className: 'toastui-editor-toolbar-icons',
              style: {backgroundImage: 'none', color: 'red'}
            },
            {
              name: 'myPopup',
              tooltip: 'myPopup',
              text: '🍿',
              className: 'toastui-editor-toolbar-icons',
              style: {backgroundImage: 'none', color: 'black'},
              popup: {
                className: 'popupNode',
                body: newContainer,
                style: {width: 'auto'}
              }
            },
          ]
          ]}
          onKeyup={onKeyHandler}
          widgetRules={[
            {
              rule: reWidgetRule,
              toDOM(text: string) {
                const rule = reWidgetRule;
                const matched = text.match(rule);
                const span = document.createElement('span');
                if(!matched) return span;
                span.innerHTML = `<a class='widget-anchor' href='${matched[2]}'>${matched[1]}</a>`;
                return span;
              }
            }
          ]}
        />
        {/* <button onClick={handleClick} id='bold'>make bold</button>
        <button onClick={handleClick} id='undo'>undo</button>
        <button onClick={handleClick} id='redo'>redo</button> */}
      </Container>
    )
}

export default MinuteEditor;

const Container = styled.div`
  width: 100%;
  height: 500px;
`;