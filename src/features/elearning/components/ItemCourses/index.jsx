import { StarOutlined } from "@ant-design/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";
function ItemCourses(props) {
  const history = useHistory();

  const { tenKhoaHoc, moTa, luotXem, hinhAnh, maKhoaHoc } = props.item;

  const goToDetail = () => {
    history.push("/detail/" + maKhoaHoc);
  };
  return (
    <div onClick={goToDetail} className={styles.item}>
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
