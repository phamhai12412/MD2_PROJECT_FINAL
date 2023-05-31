import React from "react";

function AllPhotos() {
  return (
    // toàn bộ ảnh đăng trong group và toàn bộ ảnh trong trang cá nhân
    <div>
      <div className="photo-title text-center border-radius-2 bg-theme p-1 mb-4">
        <h3 className="mb-0">All Uploaded Pictures</h3>
      </div>
      <div className="row g-3 g-lg-4 justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/03.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/02.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/01.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/04.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/05.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/06.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/07.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/08.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/09.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/10.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/11.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/12.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/13.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/14.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/15.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/16.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/17.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/18.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/19.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
        <div className="col">
          <div className="gallery-img">
            <img
              src="assets/images/member/20.jpg"
              alt="image"
              className="rounded"
            />
          </div>
        </div>
      </div>
      <div className="load-btn">
        <a href="#" className="lab-btn">
          Load More<i className="icofont-spinner"></i>
        </a>
      </div>
    </div>
  );
}

export default AllPhotos;
