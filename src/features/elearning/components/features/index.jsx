import React from 'react';
import styles from './style.module.css';
function Features() {
  return (
    <div className={styles.features}>
      <div className='container'>
        <h2>Đào tạo nghề lập trình chuyên sâu từ ZERO</h2>
        <p>
          CyberSoft kha.Featuresi thác nhu cầu tuyển dụng lập trình, kết nối việc làm tới doanh nghiệp và tích hợp các
          dự án với công nghệ mới nhất vào phương pháp đào tạo tích cực cho các học viên học xong có việc làm ngay.
          Chương trình giảng dạy được biên soạn may đo dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến
          thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng
          viên dày kinh nghiệm.
        </p>
        <button className={styles.btn}>Xem các khóa học</button>
      </div>
    </div>
  );
}

export default Features;
