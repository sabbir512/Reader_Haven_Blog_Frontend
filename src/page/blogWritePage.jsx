import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

function BlogWritePage() {
  const [value, setValue] = useState("");
  return (
    <div className="w-[85%] m-auto">
      <Navbar />
      <div className="write flex mt-12 gap-6">
        <div className="content flex-[5]">
          <input
            type="text"
            placeholder="Title"
            className="border-2 border-blue-400 border-solid mb-2 w-[100%]"
          />
          <div className="h-[300px]">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className={`h-[100%] `}
            />
          </div>
        </div>
        <div className="menu flex-[2] flex flex-col gap-5">
          <div className="flex flex-col border-2 border-solid border-gray-500 p-4">
            <p className="bg-blue-300 p-1 rounded-sm w-[73px] text-center mb-1 cursor-pointer">
              Publish
            </p>
            <span className="mb-1">
              <b>Status:</b> Draft
            </span>

            <span className="mb-1">
              <b>Visibility:</b> Public
            </span>

            <input
              type="file"
              id="file"
              name="file"
              style={{ display: "none" }}
            />
            <label
              htmlFor="file"
              className="border-2 border-solid border-teal-300 w-[87px] text-[12px] text-center cursor-pointer mb-1"
            >
              Upload Image
            </label>

            <div className="flex  gap-3">
              <button className="bg-blue-300 p-1 rounded-sm w-[43%] text-sm">
                Save as a draft
              </button>
              <button className="bg-blue-300 p-1 rounded-sm w-[73px] text-sm">
                Update
              </button>
            </div>
          </div>

          <div className="border-2 border-solid border-gray-500 p-4">
            <h1>Catagory</h1>
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-1 items-center ">
                <input
                  type="radio"
                  name="catagory"
                  value="art"
                  id="art"
                  className="cursor-pointer"
                />
                <label htmlFor="art" className="cursor-pointer">
                  Art
                </label>
              </div>

              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="catagory"
                  value="business"
                  id="business"
                  className="cursor-pointer"
                />
                <label htmlFor="business" className="cursor-pointer">
                  Business
                </label>
              </div>

              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="catagory"
                  value="technology"
                  id="technology"
                  className="cursor-pointer"
                />
                <label htmlFor="technology" className="cursor-pointer">
                  Technology
                </label>
              </div>

              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="catagory"
                  value="food"
                  id="food"
                  className="cursor-pointer"
                />
                <label htmlFor="food" className="cursor-pointer">
                  Food
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogWritePage;
