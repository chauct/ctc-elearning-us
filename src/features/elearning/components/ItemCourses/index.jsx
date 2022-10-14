import { StarOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import styles from "./style.module.css";
function ItemCourses(props) {
  const { tenKhoaHoc, moTa, luotXem, hinhAnh } = props.item;
  return (
    <div className={styles.item}>
      <div className={styles.thumbnail}>
        <img src={hinhAnh} alt="" />
      </div>
      <div className={styles.detail}>
        <div className={styles.info}>
          <h2>{tenKhoaHoc}</h2>
          <p>{moTa.substr(0, 100) + "..."}</p>
        </div>
        <div className={styles.flex}>
          <div className={styles.views}>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <i class="bx bx-star"></i>
            <span>{luotXem} lượt xem</span>
          </div>
          <button className={styles.btn_detail}>chi tiết</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCourses;
