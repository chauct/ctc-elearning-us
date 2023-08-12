import instance from 'api/instance';
import Swal from 'sweetalert2';
import { history } from 'app/App';
export const LOGIN_ACTION = 'auth/LOGIN_ACTION';

export const THONG_TIN_TAI_KHOAN = 'auth/THONG_TIN_TAI_KHOAN';

export const fetchLoginAction = (user) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: '/api/QuanLyNguoiDung/DangNhap',
        method: 'POST',
        data: user,
      });
      const profile = { ...res.data };
      delete profile.accessToken;

      localStorage.setItem('token', res.data.accessToken);
      dispatch({
        type: LOGIN_ACTION,
        payload: profile,
      });
      Swal.fire({
        title: 'Đăng nhập thành công!',
        icon: 'success',
        confirmButtonColor: '#1c7403',
      }).then((res) => {
        if (res.isConfirmed) {
          history.goBack();
        }
      });
    } catch (error) {
      Swal.fire({
        title: error.response.data.content,
        icon: 'error',
        confirmButtonColor: '#d00000',
      });
    }
  };
};
export const fetchThongTinTaiKhoanAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: '/api/QuanLyNguoiDung/ThongTinTaiKhoan',
      method: 'POST',
    });

    dispatch({
      type: THONG_TIN_TAI_KHOAN,
      payload: res.data,
    });
  } catch (error) {
    console.log('errors', error.response?.data);
  }
};
