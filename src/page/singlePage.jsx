import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Menu from "../component/menu";
import { AuthContext } from "../context/authContext";
import axios from "axios";

function SinglePage() {
  const [post, setPost] = useState({});
  const location = useLocation({});
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9000/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9000/api/posts/${postId}`);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[85%] m-auto">
      <Navbar />
  
      <div className="flex mt-16 gap-x-5">
        <div className="content flex-[5]">
          <img
            className="w-[720px] h-[300px] object-cover"
            src={post?.img}
            alt=""
          />

          <div className="user flex gap-3 items-center h-[89px]">
            {post.userImg && (
              <img
                className="w-[77px] h-[77px] object-cover rounded-full mt-3"
                src={post.userImg}
                alt="Person"
              />
            )}

            <div className="userinfo text-sm">
              <span className="font-bold">{post.name}</span>
              <p>post {moment(post.date).fromNow()}</p>
            </div>

            {currentUser && currentUser.name === post.name && (
              <div className="buttons flex gap-3">
                <div className="group">
                  <Link to={`/write?edit=2`}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="cursor-pointer text-blue-500 hover:text-blue-700"
                    />
                  </Link>
                </div>

                <div className="group">
                  <Link>
                    <FontAwesomeIcon
                      onClick={handleDelete}
                      icon={faTrash}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="title-dsec mt-4">
            <h1 className="font-bold text-xl">{post.title}</h1>

            <div className="discription text-[#333] leading-7">
              {post.description}
            </div>
          </div>
        </div>
        <div className="menu flex-[2]">
          <Menu />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SinglePage;
