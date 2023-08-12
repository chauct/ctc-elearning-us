import { Dropdown, Menu } from "antd";
import { LOGIN_ACTION } from "features/authentication/action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./style.module.css";
function Header() {
  const profile = useSelector((state) => state.auth.profile);

  const history = useHistory();
  const dispatch = useDispatch();
  const goToHome = () => {
    history.push("/");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  const goToProfile = () => {
    history.push("/profile");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch({
      type: LOGIN_ACTION,
      payload: null,
    });
    goToHome();
  };
  const menu = (
    <Menu
      items={[
        {
          key: "2",
          label: <span onClick={goToProfile}>Thông tin tài khoản</span>,
        },
        {
          key: "3",
          label: <span onClick={handleLogout}>Đăng xuất</span>,
        },
      ]}
    />
  );
  const renderUserInfo = () => {
    if (profile) {
      return (
        <Dropdown overlay={menu} placement="bottom" arrow>
          <span className={styles.profile}>Hi, {profile.hoTen}</span>
        </Dropdown>
      );
    }
    return (
      <button onClick={goToLogin} className={styles.btn_login}>
        Đăng nhập
      </button>
    );
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
            {renderUserInfo()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
