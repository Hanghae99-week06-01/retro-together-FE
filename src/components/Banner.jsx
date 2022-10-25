import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __getPostThunk } from '../redux/modules/postsSlice';

const Banner = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StBanner>
      <Stoutline>
        <Slider {...settings}>
          {posts.map((post) => (
            <Stcard
              key={post.key}
              onClick={() => {
                navigate(`/post/${post.id}`);
              }}
            >
              <Stcardtop>
                <Stcardimg src={post.url} alt={post.title} />
              </Stcardtop>
              <Stcardbottom>
                <Sttitle>{post.title}</Sttitle>
                <Sttag>{post.tag}</Sttag>
                <StLike>❤23</StLike>
              </Stcardbottom>
            </Stcard>
          ))}
        </Slider>
      </Stoutline>
    </StBanner>
  );
};

export default Banner;

const StBanner = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
`;

const Stoutline = styled.div``;

const Stcard = styled.div`
  padding: 12px;
  background-color: #2c3639;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 310px;
  max-width: 300px;
  color: #576f72;
  cursor: pointer;
`;

const Stcardtop = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 50px;
  margin: auto;
`;

const Stcardimg = styled.img`
  width: 20vh;
  height: 20vh;
  object-fit: cover;
  margin: auto;
  border: 1px solid black;
  border-radius: 15px;
`;

const Stcardbottom = styled.div`
  display: flex;
  justify-content: left;
  margin: 10px auto;
  display: inline-block;
`;

const Sttag = styled.div`
  border: 1px solid #e4dccf;
  color: #e4dccf;
  border-radius: 8px;
  padding: 2px;
  font-size: 13px;
  display: inline-block;
  padding: 4px;
  margin: 5px auto;
`;
const Sttitle = styled.div`
  color: #e4dccf;
`;

const StLike = styled.div`
  color: #e4dccf;
`;
