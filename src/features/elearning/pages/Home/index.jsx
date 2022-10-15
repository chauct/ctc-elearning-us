import axios from "axios";
import { fetchListCourseAction } from "features/elearning/action";
import ListCourses from "features/elearning/components/ListCourses";
import Slider from "features/elearning/components/Slider";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      <ListCourses />
    </>
  );
}

export default Home;
