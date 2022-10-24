import React from 'react';
import styled from 'styled-components';
import { exdata } from '../data';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();

  return (
    <div className="row row-cols-1 row-cols-md-5 g-4">
      {exdata.map((item) => (
        <Stbox className="col" key={item.id}>
          <Stcard className="card" onClick={() => navigate('/post')}>
            <Stcardimg
              src={item.thumbnailUrl}
              className="card-img-top"
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <div className="card-text">
                <div>{item.tag}</div>
                <div>❤23</div>
              </div>
            </div>
          </Stcard>
        </Stbox>
      ))}
    </div>
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
