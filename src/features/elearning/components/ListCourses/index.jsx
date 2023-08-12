import { Spin } from 'antd';
import React from 'react';
import styles from './style.module.css';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import ItemCourses from '../ItemCourses';

function ListCourses() {
  const listCourses = useSelector((state) => state.elearning.listCourses);
  if (!listCourses)
    return (
      <div style={{ textAlign: 'center' }}>
        <Spin size='large' />
      </div>
    );
  console.log(listCourses);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
    <div className={styles.cate}>
      <div className='title'>
        <h2>Danh sách khóa học</h2>
      </div>
      <div className='container'>
        <Slider
          {...settings}
          className={styles.slider}>
          {listCourses.map((item) => {
            return (
              <div
                key={item.maKhoaHoc}
                className={styles.item}>
                <ItemCourses item={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ListCourses;
