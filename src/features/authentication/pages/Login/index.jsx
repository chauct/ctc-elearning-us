import { Button, Col, Input, Row } from 'antd';
import { fetchLoginAction } from 'features/authentication/action';

import { useFormik } from 'formik';
import * as yup from 'yup';

import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const schema = yup.object().shape({
  taiKhoan: yup.string().required('*Tài khoản không được bỏ trống'),

  matKhau: yup.string().required('*Mật khẩu không được bỏ trống'),
});

function Login() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: (values) => {
      const action = fetchLoginAction(values);
      dispatch(action);
      console.log({ values });
    },
    validationSchema: schema,
  });

  return (
    <div className={styles.login}>
      <div className='container'>
        <Row>
          <Col span={10}>
            <h2 className={styles.title}>Đăng nhập</h2>
            <form onSubmit={formik.handleSubmit}>
              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name='taiKhoan'
                className={styles.input}
                type='text'
                placeholder='Tên Tài Khoản'
              />
              {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                <span className={styles.errorText}>{formik.errors.taiKhoan}</span>
              )}
              <Input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name='matKhau'
                className={styles.input}
                type='password'
                placeholder='Mật Khẩu'
              />
              {formik.touched.matKhau && formik.errors.matKhau && (
                <span className={styles.errorText}>{formik.errors.matKhau}</span>
              )}

              <Button
                htmlType='submit'
                type='primary'
                className={styles.btn_signin}>
                Đăng Nhập
              </Button>
              <p className={styles.register}>
                Quý khách chưa có Tài khoản?
                <NavLink
                  className={styles.navLink}
                  to='/register'>
                  Đăng Ký
                </NavLink>
              </p>
              <a href='#'>Quên Mật khẩu?</a>
            </form>
          </Col>
          <Col span={10}>
            <div className={styles.right}>
              <img
                src='https://samar.dexignzone.com/xhtml/images/about/img2.png'
                alt=''
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
