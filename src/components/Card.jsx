import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //;
  // console.log(posts);
  return (
    <Stbox className="col" key={post.id}>
      <Stcard
        className="card"
        onClick={() => {
          navigate(`/post/${post.id}`);
        }}
      >
        <Stcardimg src={post.url} className="card-img-top" alt={post.title} />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <div className="card-text">
            <div>{post.tag}</div>
            <div>❤23</div>
          </div>
        </div>
      </Stcard>
    </Stbox>
  );
};

export default Card;

const Stcard = styled.div`
  background-color: #2c3639;
  color: #e4dccf;
  cursor: pointer;
`;

const Stcardimg = styled.img`
  margin: 8px auto;
  border-radius: 12px;
  overflow: hidden;
  height: 23vh;
  width: 23vh;
  object-fit: cover;
`;

const Stbox = styled.div`
  width: 100%;
  max-width: 30vh;
`;
