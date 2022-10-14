import instance from "api/instance";

export const SET_CATES = "elearning/SET_CATES";

export const fetchCatesAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      method: "GET",
      params: {
        maNhom: "GP01",
      },
    });
    dispatch({
      type: SET_CATES,
      payload: res.data.content,
    });
    console.log(res, "list movie");
  } catch (error) {
    console.log("errors", error.response?.data);
  }
};
