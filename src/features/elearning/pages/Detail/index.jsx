import { Col, Rate, Row } from "antd";
import { fetchDetailCourseAction } from "features/elearning/action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import styles from "./style.module.css";
function Detail() {
  const dispatch = useDispatch();

  const match = useRouteMatch();
  const id = match.params.id;

  const detail = useSelector((state) => state.elearning.courseDetail);
  console.log(detail, "detail");
  const fetchDetailCourse = async () => {
    dispatch(fetchDetailCourseAction(id));
  };
  useEffect(() => {
    fetchDetailCourse();
  }, []);
  return (
    <div className={styles.detail}>
      <div className="container">
        <Row>
          <Col span={16}>
            <div className={styles.img}>
              <img src={detail.hinhAnh} alt="" />
            </div>
            <div className={styles.content}>
              <h2>{detail.tenKhoaHoc}</h2>
              <p>{detail.moTa}</p>
              <div className={styles.info}></div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.create}>
              <img src="https://joeschmoe.io/api/v1/random" alt="" />
              <h3>{detail.nguoiTao.hoTen}</h3>
              <p>Người tạo</p>
              <div className={styles.icon}>
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-linkedin"></i>
                <i class="bx bxl-youtube"></i>
              </div>
            </div>
            <div className={styles.booking}>
              <p>Ngày tạo: {detail.ngayTao} </p>

              <p>Lượt xem: {detail.luotXem}</p>
              <p>
                Đánh giá:
                <span>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                </span>
              </p>
              <p>Số học viên: {detail.soLuongHocVien}</p>

              <button>Đăng kí</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Detail;
