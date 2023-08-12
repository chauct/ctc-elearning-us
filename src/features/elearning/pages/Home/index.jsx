import { fetchListCourseAction } from 'features/elearning/action';
import ListCourses from 'features/elearning/components/ListCourses';
import Slider from 'features/elearning/components/Slider';
import Features from 'features/elearning/components/features';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();

  const fetchListCourse = async () => {
    dispatch(fetchListCourseAction);
  };

  useEffect(() => {
    fetchListCourse();
  }, []);

  return (
    <>
      <Slider />
      <Features />
      <ListCourses />
    </>
  );
}

export default Home;
