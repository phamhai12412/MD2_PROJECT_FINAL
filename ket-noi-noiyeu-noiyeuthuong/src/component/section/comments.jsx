import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

function CommentSection({ idpost, goilaipostcanhan }) {
  const [datause, setdatause] = useState([]);
  const [post, setpost] = useState({});
  const [updatedBinhluan, setupdatedBinhluan] = useState([]);
  const [edit_index, setedit_index] = useState(null);
  const [noidungedit, setnoidungedit] = useState("");
  const [goidatause, setgoidatause] = useState(true);
  const [goipost, setgoipost] = useState(true);
  const [noidungthem, setnoidungthem] = useState("");

  useEffect(() => {
    if (goidatause) {
      axios
        .get("http://localhost:8000/Datause")
        .then((res) => {
          setdatause(res.data);
          setgoidatause(false); // Set the flag to false after completing the API call
        })
        .catch((err) => console.log(err));
    }
  }, [goidatause]);

  useEffect(() => {
    if (goipost) {
      axios
        .get(`http://localhost:8000/post/${idpost}`)
        .then((res) => {
          setpost(res.data);
          setgoipost(false); // Set the flag to false after completing the API call
        })
        .catch((err) => console.log(err));
    }
  }, [goipost, idpost]);

  useEffect(() => {
    if (post.binhluan && datause.length > 0) {
      let capnhatcmt = post.binhluan.map((item) => {
        const { idusebl, noidung } = item;
        const user = datause.find((user) => user.id == idusebl);

        if (user) {
          const { imgUrl, usename } = user;
          return {
            idusebl,
            noidung,
            imgUrl,
            usename,
          };
        } else {
          return item;
        }
      });

      setupdatedBinhluan(capnhatcmt);
    }
  }, [post, datause]);

  const useon = localStorage.getItem("usenameonl");
  const idusenameonl = localStorage.getItem("idusenameonl");

  const xoacomment = (index) => {
    const capnhatcmt = [...updatedBinhluan];
    capnhatcmt.splice(index, 1);
    setupdatedBinhluan(capnhatcmt);

    axios
      .patch(`http://localhost:8000/post/${idpost}`, {
        binhluan: capnhatcmt,
      })
      .then((res) => {
        setgoipost(true);
        goilaipostcanhan();
        console.log("thành công");
      })
      .catch((err) => console.log(err));
  };

  const luucmtedit = (index) => {
    const capnhatcmt = [...updatedBinhluan];
    capnhatcmt[index].noidung = noidungedit;
    setupdatedBinhluan(capnhatcmt);
    setedit_index(null);
    setnoidungedit("");

    if (noidungedit == "") {
      xoacomment(index);
    } else {
      axios
        .patch(`http://localhost:8000/post/${idpost}`, {
          binhluan: capnhatcmt,
        })
        .then((res) => {
          goilaipostcanhan();
          setgoipost(true);
          console.log("thành công");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (noidungthem == "") {
      swal("Bạn chưa nhập nội dung");
    } else {
      const thembinhluan = [...post.binhluan];
      thembinhluan.unshift({ idusebl: idusenameonl, noidung: noidungthem });
      axios
        .patch(`http://localhost:8000/post/${idpost}`, {
          binhluan: thembinhluan,
        })
        .then((res) => {
          setnoidungthem("");
          setgoipost(true);
          goilaipostcanhan();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
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
              onChange={(e) => setnoidungthem(e.target.value)}
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
      <div
        id="comments"
        className="comments"
        style={{
          maxHeight: "270px",
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#888888 #F5F5F5",
        }}
      >
        <style>
          {`
          .comments::-webkit-scrollbar {
            width: 8px;
          }

          .comments::-webkit-scrollbar-thumb {
            background-color: #888888;
            border-radius: 4px;
          }

          .comments::-webkit-scrollbar-track {
            background-color: #F5F5F5;
            border-radius: 4px;
          }
        `}
        </style>
        <div className="widget-title"></div>
        <ul style={{ padding: "0px" }} className="comment-list">
          {updatedBinhluan.map((item, index) => (
            <li className="comment" key={index}>
              <div className="com-content">
                <div className="com-title">
                  <div className="com-title-meta">
                    <div>
                      <img
                        style={{
                          marginLeft: "12px",
                          width: "30px",
                          height: "auto",
                          borderRadius: "50px",
                        }}
                        src={item.imgUrl}
                        alt="hinh anh"
                      />
                    </div>
                    <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                      {item.usename}
                    </span>
                    <br />
                    {edit_index == index ? (
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="text"
                          value={noidungedit}
                          onChange={(e) => setnoidungedit(e.target.value)}
                          style={{
                            marginRight: "5px",
                            padding: "5px",
                            border: "1px solid rgb(204, 204, 204)",
                            borderRadius: "5px",
                            backgroundColor: "#210053",
                          }}
                        />
                        <button
                          onClick={() => luucmtedit(index)}
                          style={{
                            padding: "5px 10px",
                            background: "transparent",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Save
                        </button>
                      </span>
                    ) : (
                      <span style={{ fontSize: "14px" }}>
                        {item.noidung}
                        {item.usename == useon && (
                          <span>
                            <i
                              style={{
                                paddingLeft: "1em",
                                paddingRight: "1em",
                                cursor: "pointer",
                              }}
                              className="icofont-edit"
                              onClick={() => {
                                setedit_index(index);
                                setnoidungedit(item.noidung);
                              }}
                            ></i>
                            <i
                              onClick={() => xoacomment(index)}
                              style={{ cursor: "pointer" }}
                              className="icofont-delete"
                            ></i>
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                  <span className="reply">
                    <a className="comment-reply-link"></a>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CommentSection;
