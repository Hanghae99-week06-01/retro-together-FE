import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = ({ post }) => {
  const navigate = useNavigate();

  return (
    <StCard key={post.id}>
      <StCardContainer>
        <StCardBox
          className="card"
          onClick={() => {
            navigate(`/post/${post.id}`);
          }}
        >
          <StCardWrap className="card-body">
            <StCardImg
              src={post.url}
              className="card-img-top"
              alt={post.title}
            />
            <StCardText>
              <h4>{post.title}</h4>
              <div>{post.tag}</div>
              <div>❤</div>
            </StCardText>
          </StCardWrap>
        </StCardBox>
      </StCardContainer>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StCardContainer = styled.div`
  max-width: 100%;
`;

const StCardBox = styled.div`
  width: 260px;
  height: 360px;
  overflow: hidden;
  background-color: #424242;
  :hover {
    cursor: pointer;
    background-color: #f7931d;
  }
`;

const StCardWrap = styled.div`
  margin: 0;
  padding: 0;
`;

const StCardImg = styled.img`
  max-height: 20vh;
  object-fit: cover;
`;

const StCardText = styled.div`
  padding: 20px;
`;
