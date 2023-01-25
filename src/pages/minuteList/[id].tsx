import React from "react";
// import { Viewer } from '@toast-ui/react-editor'
import { useRouter } from "next/router";

const tmp = '<p>안녕하세요</p>\n<h2>제목입니다.</h2>'

function Detail() {
  const router = useRouter();
  return (
    <>
      {/* <Viewer
        initialValue={tmp}
      />
      <p>클릭한 회의록 id = {router.query.id}</p> */}
    </>
  )
}

export default Detail;