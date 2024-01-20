import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9000/api/posts${category}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="w-[85%] m-auto">
      <Navbar />

      <div className="mt-[67px]">
        <div className="flex flex-col gap-16">
          {posts.map((singlepost) => (
            <div key={singlepost.id} className="flex gap-7">
              <div>
                <img
                  src={singlepost.img}
                  alt="postimage"
                  className="w-[578px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 justify-start">
                <Link to={`/post/${singlepost.id}`}>
                  <h1 className="text-2xl font-bold">{singlepost.title}</h1>
                </Link>
                <p>{singlepost.description}</p>
                <button className="border-solid border-2 transition-all duration-300 border-teal-600 p-1 rounded-sm text-blacke w-24 hover:bg-blue-500 hover:text-white hover:border-blue-500 ">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
