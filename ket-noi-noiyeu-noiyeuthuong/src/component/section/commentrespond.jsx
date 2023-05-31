import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const CommentRespond = ({ idpost }) => {
  const idusenameonl = localStorage.getItem("idusenameonl");

  const [noidungthem, setnoidungthem] = useState("");
  const [baipost, setpost] = useState({});
  const [goipost, setgoipost] = useState(true);

  useEffect(() => {
    if (goipost) {
      axios
        .get(`http://localhost:8000/post/${idpost}`)
        .then((res) => {
          setpost(res.data);
          setgoipost(false);
        })
        .catch((err) => console.log(err));
    }
  }, [goipost, idpost]);

  const handleMessageChange = (e) => {
    setnoidungthem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (noidungthem === "") {
      swal("Bạn chưa nhập nội dung");
    } else {
      const thembinhluan = [...baipost.binhluan];
      thembinhluan.unshift({ idusebl: idusenameonl, noidung: noidungthem });
      axios
        .patch(`http://localhost:8000/post/${idpost}`, {
          binhluan: thembinhluan,
        })
        .then((res) => {
          setpost((prevBaipost) => ({
            ...prevBaipost,
            binhluan: thembinhluan,
          }));
          setnoidungthem("");
        })
        .catch((err) => console.log(err));
    }
  };

  const goivedatapost = () => {
    setgoipost(true);
  };

  return (
    <div id="respond" className="comment-respond">
      <div className="add-comment">
        <div className="widget-title"></div>
        <form
          style={{
            paddingBottom: "12px",
            paddingTop: "0px",
            marginBottom: "1px",
          }}
          onSubmit={handleSubmit}
          id="commentform"
          className="comment-form"
        >
          <textarea
            style={{ padding: "3px 4px 2px 18px" }}
            rows="1"
            type="text"
            id="item04"
            name="message"
            value={noidungthem}
            onChange={handleMessageChange}
            placeholder="Your Message"
          ></textarea>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "rgb(0, 123, 255)",
              color: "rgb(255, 255, 255)",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentRespond;
