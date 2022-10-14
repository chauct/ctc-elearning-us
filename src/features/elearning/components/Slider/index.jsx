import { Button, Carousel, Input } from "antd";

import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./style.module.css";
const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       background: "linear-gradient(90deg, #ef470d, #ffb800)",
//     }}
//   />
// );
function Slider() {
  const onSearch = (value) => console.log(value);
  return (
    <>
      <Carousel className={styles.carousel} autoplay>
        <div className={styles.item}>
          <img
            src="https://demo.themeies.com/elearning-react/static/media/2.efb46ae2.jpg"
            alt=""
          />
          <div className={styles.caption}>
            <h1>Welcome to</h1>
            <p>Elearning</p>
            <div className={styles.btn_search}>
              <Input placeholder="Tìm kiếm ..." />
              <button>
                <SearchOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src="https://demo.themeies.com/elearning-react/static/media/3.17bc8862.jpg"
            alt=""
          />
          <div className={styles.caption}>
            <h1>Welcome to</h1>
            <p>Elearning</p>
            <div className={styles.btn_search}>
              <Input placeholder="Tìm kiếm ..." />
              <button>
                <SearchOutlined />
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
