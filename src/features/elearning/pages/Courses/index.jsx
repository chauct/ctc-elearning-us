import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import styles from "./style.module.css";
import ListCourses from "features/elearning/components/ListCourses";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCourseAction } from "features/elearning/action";
function Courses() {
  const dispatch = useDispatch();
  const fetchListCourse = async () => {
    dispatch(fetchListCourseAction);
  };
  useEffect(() => {
    fetchListCourse();
  }, []);
  return (
    <div className={styles.course}>
      <div className={styles.nav}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Khóa học</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <ListCourses />
    </div>
  );
}

export default Courses;
