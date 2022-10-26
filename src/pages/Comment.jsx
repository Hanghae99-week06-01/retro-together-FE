import React from 'react';
import styled from 'styled-components';

const Comment = () => {
  return (
    <div>
      <StCommentAddBox>
        <StCominput placeholder="댓글을 입력하세요" />
        <Staddbutton>등록</Staddbutton>
      </StCommentAddBox>
      <StCommentBox>
        <StusernameBox>
          <UserName>김승재</UserName>
        </StusernameBox>
        <StComment>
          <UserComment>
            ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
            ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ ㅇㅇㅇㅇ
          </UserComment>
        </StComment>
        <ReplyBox>
          <Reply>답글작성</Reply>
        </ReplyBox>
      </StCommentBox>
    </div>
  );
};
export default Comment;

const StusernameBox = styled.div`
  border: 1px solid #e4dccf;
  border-radius: 8px;
  display: inline-block;
  margin-right: 10px;
  display: flex;
`;

const StComment = styled.div`
  outline: none;
  max-width: 900px;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #e4dccf;
  padding: 10px;
`;

const StCommentAddBox = styled.div`
  display: flex;
  justify-content: right;
  margin: 20px auto;
`;
const StCommentBox = styled.div`
  display: flex;
  justify-content: left;
  margin: 20px auto;
`;

const StCominput = styled.input`
  background-color: #e4dccf;
  outline: none;
  width: 100%;
  max-width: 900px;
  height: 60px;
  border: 0px;
  padding: 8px;
`;
const Staddbutton = styled.button`
  width: 100%;
  height: 60px;
  max-width: 80px;
  margin: auto;
  justify-content: right;
  border: 0px;
  margin-right: 0px;
`;

const UserName = styled.div`
  color: #e4dccf;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const UserComment = styled.div`
  color: #e4dccf;
`;

const Reply = styled.button`
  margin: auto;
  width: 100%;
  max-width: 80px;
  height: 40px;
  border: 0px;
  justify-content: right;
`;

const ReplyBox = styled.div`
  justify-content: right;
  margin: auto;
  display: flex;
  margin-right: 0px;
`;
