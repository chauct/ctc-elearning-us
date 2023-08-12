import instance from 'api/instance';

export const SET_LIST_COURSES = 'elearning/SET_LIST_COURSES';
export const SET_COURSE_DETAIL = 'elearning/SET_COURSE_DETAIL';
export const fetchListCourseAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc',
      method: 'GET',
      params: {
        MaNhom: 'GP01',
      },
    });
    dispatch({
      type: SET_LIST_COURSES,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log('errors', error.response?.data);
  }
};
export const fetchDetailCourseAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: '/api/QuanLyKhoaHoc/LayThongTinKhoaHoc',
        method: 'GET',
        params: {
          maKhoaHoc: id,
        },
      });
      console.log(res.data);
      dispatch({
        type: SET_COURSE_DETAIL,
        payload: res.data,
      });
      // console.log(res.data);
    } catch (error) {
      console.log('errors', error.response?.data);
    }
  };
};
