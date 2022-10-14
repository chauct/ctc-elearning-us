import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./style.module.css";
function Header() {
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.flex}>
            <div onClick={goToHome} className={styles.logo}>
              Elearning
            </div>
            <div className={styles.navbar}>
              <ul>
                <li>
                  <NavLink to="/">Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink to="/course">Khóa học</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/event">Sự kiện </NavLink>
                </li>
                <li>
                  <NavLink to="/info">Thông tin</NavLink>
                </li>
              </ul>
            </div>
            <button className={styles.btn_login}>Đăng nhập</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
