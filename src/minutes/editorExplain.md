## MinuteEditor.tsx

- Toast UI Editor를 사용합니다.
- handleFocus : 에디터에 포커싱 되었을 때 동작하는 함수
- colorSyntaxOptions: 에디터에 있는 컬러 피커에 기본적으로 제공할 컬러들을 지정할 수 있습니다. (배열에 넣어주면 됩니다.)
- colorSyntaxOptions: TUI는 기본적으로 jsx 파일을 통한 요소 추가가 불가능해서 DOM을 조작하여 요소를 만들어주어야 합니다.
  - 해당 요소는 에디터에서 팝콘 버튼을 누르면 나타나는 팝업에 대한 요소입니다.
- onKeyHandler: 에디터에서 특정 키를 입력할 경우 동작하도록 하는 이벤트로서 현재는 '@'를 누르면 팝업 창이 나타납니다.
  - 해당 팝업창 또한 DOM 조작을 통해 생성해야 합니다.
  - 팝업 이벤트를 달아두긴 했는데 현재는 동작하지 않습니다. (이벤트 자체가 감지되지 않는 버그)
- widgetClick: onKeyHandler로 나타나는 팝업을 클릭할 때 동작하도록 하기 위한 함수입니다.
  - 정상적으로 동작한다면 "[@test](test)" 라는 문구가 나타납니다. 이는 뒤에 설명할 "reWidgetRule"을 통해 링크로 변경됩니다.
- handleChange: 에디터의 내용을 저장, 변경하기 위한 이벤트
- reWidgetRule: "[@value](value)"와 같이 입력하면 아래 에디터의 규칙에 의해 링크로 변경됩니다.
- 에디터 내부
  - initialValue: 에디터에 나타날 초기값
  - onChange: 에디터 데이터 변경시 동작할 이벤트 함수
  - hideModeSwitch: 위지윅과 마크다운 모드 변경에 필요한 탭 버튼을 표시 할 것인가에 대한 설정
  - useCommandShortcut: 에디터에 나타나는 아이콘을 커스텀하여 추가할 것인가에 대한 설정
  - plugins: 에디터에 추가할 플러그인 정의
  - toolbarItems: 기본적으로 제공되는 것들과 커스텀 아이콘 추가에 대한 설정
    - 배열로 구분할 경우 에디터 상단 바에 구분선으로 처리됩니다.
      커스텀 아이콘의 경우 클래스명을 "'toastui-editor-toolbar-icons'"로 해주면 됩니다.
  - widgetRules: 에디터에서 사용될 규칙을 정의할 수 있습니다. 정규 표현식을 통해 처리가 가능합니다.

## MinuteTitle.tsx

- 해당 문서의 제목 설정을 위한 컴포넌트

## pages/minuteList/[id].tsx

- Viewer: TUI에서 제공하는 HTML 문서를 화면에 위지윅으로 보여주는 뷰어 컴포넌트
- 서버에서 받아온 데이터를 initialValue에 담아주면 됩니다.
