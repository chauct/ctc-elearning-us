import axios from "axios";
import ListCourses from "features/elearning/components/ListCourses";
import Slider from "features/elearning/components/Slider";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    try {
      const res = await axios({
        url: "https://elearningnew.cybersoft.edu.vn//api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
        method: "GET",
        params: {
          MaNhom: "GP01",
        },
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIxNC8wMi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzYzMzI4MDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NjQ4MDQwMH0.e3UrKdKqwFislz0cqribEEthuaW4HOuD4xwr1CTRQwg",
        },
      });
      dispatch({
        type: "SET_LIST_COURSES",
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      console.log("errors", error.response?.data);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <Slider />
      <ListCourses />
    </>
  );
}

export default Home;
