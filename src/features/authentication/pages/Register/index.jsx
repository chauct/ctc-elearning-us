import { Button, Col, Input, Row } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./style.module.css";

import * as yup from "yup";
import { useHistory } from "react-router-dom";
import instance from "api/instance";
import Swal from "sweetalert2";

const schema = yup.object({
  taiKhoan: yup
    .string()
    .required("*Tài khoản không được bỏ trống")
    .min(6, "*Tài khoản phải lớn hơn 6 kí tự")
    .matches(
      /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
      "*Tài khoản không được có khoảng trắng và ký tự đặc biệt "
    ),
  matKhau: yup
    .string()
    .required("*Mật khẩu không được bỏ trống")
    .min(6, "*Mật khẩu phải lớn hơn 6 kí tự "),
  hoTen: yup.string().required("*Họ tên không được bỏ trống "),
  email: yup
    .string()
    .required("*Email không được bỏ trống")
    .email("*Email không đúng định dạng"),
  soDT: yup
    .string()
    .required("*Điện thoại không được bỏ trống ")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
      "Số điện thoại không hợp lệ"
    ),
});

function Register() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
    onSubmit: (values) => {
      const newUser = { ...values, maNhom: "GP01" };
      signUp(newUser);
    },
    validationSchema: schema,
  });

  const signUp = async (user) => {
    try {
      setIsLoading(true);
      const res = await instance.request({
        url: "/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: user,
      });
      Swal.fire({
        title: "Đăng kí thành công!",
        icon: "success",
        confirmButtonColor: "#1c7403",
      }).then((res) => {
        if (res.isConfirmed) {
          history.push("/login");
        }
      });
      console.log(res);
    } catch (error) {
      Swal.fire({
        title: error.response.data,
        icon: "error",
        confirmButtonColor: "#d00000",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.register}>
      <div className="container">
        <Row>
          <Col span={10}>
            <h2>Đăng kí</h2>
            <form onSubmit={formik.handleSubmit}>
              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="taiKhoan"
                className={styles.input}
                type="text"
                placeholder="Tên Tài Khoản"
              />
              {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                <span className={styles.errorText}>
                  {formik.errors.taiKhoan}
                </span>
              )}
              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="matKhau"
                className={styles.input}
                type="password"
                placeholder="Mật Khẩu"
              />
              {formik.touched.matKhau && formik.errors.matKhau && (
                <span className={styles.errorText}>
                  {formik.errors.matKhau}
                </span>
              )}

              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="hoTen"
                className={styles.input}
                type="text"
                placeholder="Họ Và Tên"
              />
              {formik.touched.hoTen && formik.errors.hoTen && (
                <span className={styles.errorText}>{formik.errors.hoTen}</span>
              )}

              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="email"
                className={styles.input}
                type="text"
                placeholder="Email"
              />

              {formik.touched.email && formik.errors.email && (
                <span className={styles.errorText}>{formik.errors.email}</span>
              )}

              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className={styles.input}
                name="soDT"
                type="text"
                placeholder="Số Điện Thoại"
              />
              {formik.touched.soDT && formik.errors.soDT && (
                <span className={styles.errorText}>{formik.errors.soDT}</span>
              )}

              <Button
                loading={isLoading}
                htmlType="submit"
                type="primary"
                className={styles.btn_signup}
              >
                Đăng Ký
              </Button>
            </form>
          </Col>
          <Col span={14}></Col>
        </Row>
      </div>
    </div>
  );
}

export default Register;
