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
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,

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
      <Slider {...settings}>
        {posts.map((post) => (
          <StBannerList
            key={post}
            onClick={() => {
              navigate(`/post/${post.id}`);
            }}
          >
            <div>
              <img src={post.url} alt={post.title} />
            </div>
            <div>
              <div>{post.title}</div>
              <div>{post.tag}</div>
              <div>❤23</div>
            </div>
          </StBannerList>
        ))}
      </Slider>
    </StBanner>
  );
};

export default Banner;

const StBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBannerList = styled.div`
  width: 260px;
  height: 360px;
  overflow: hidden;
  background-color: #424242;
  gap: 10px;
  :hover {
    cursor: pointer;
    background-color: #f7931d;
  }
`;

const StCard = styled.div`
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

const StCardTop = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 50px;
  margin: auto;
`;

const StCardImg = styled.img`
  width: 20vh;
  height: 20vh;
  object-fit: cover;
  margin: auto;
  border: 1px solid black;
  border-radius: 15px;
`;

const StCardBottom = styled.div`
  display: flex;
  justify-content: left;
  margin: 10px auto;
  display: inline-block;
`;

const StTag = styled.div`
  border: 1px solid #e4dccf;
  color: #e4dccf;
  border-radius: 8px;
  padding: 2px;
  font-size: 13px;
  display: inline-block;
  padding: 4px;
  margin: 5px auto;
`;
const StTitle = styled.div`
  color: #e4dccf;
`;

const StLike = styled.div`
  color: #e4dccf;
`;
