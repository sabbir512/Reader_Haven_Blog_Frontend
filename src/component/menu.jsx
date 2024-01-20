import React from "react";

function Menu() {
  const posts = [
    {
      id: 1,
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde veniam  aut nesciunt eos perspiciatis perferendis adipisci reiciendis providentimpedit corporis quod suscipit debitis doloribus vero, harum quidem deleniti, est officia molestias ",
      image:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
    },
    {
      id: 2,
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde veniam  aut nesciunt eos perspiciatis perferendis adipisci reiciendis providentimpedit corporis quod suscipit debitis doloribus vero, harum quidem deleniti, est officia molestias",
      image:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
    },
    {
      id: 3,
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde veniam  aut nesciunt eos perspiciatis perferendis adipisci reiciendis providentimpedit corporis quod suscipit debitis doloribus vero, harum quidem deleniti, est officia molestias",
      image:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
    },
    {
      id: 4,
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde veniam  aut nesciunt eos perspiciatis perferendis adipisci reiciendis providentimpedit corporis quod suscipit debitis doloribus vero, harum quidem deleniti, est officia molestias",
      image:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-2xl pb-2 mt[-13px]">Posts you may like:</h1>

      <div className="posts">
        {posts.map((singlePost) => (
          <div key={singlePost.id}>
            <img src={singlePost.image} alt="blog" className="w-[100%] h-[150px] object-cover"/>
            <h1 className="mt-6 font-bold text-xl">{singlePost.title}</h1>
            <p className="pt-2 mb-1">{singlePost.desc}</p>
            <button className="border-solid border-2 transition-all duration-300 border-teal-600 p-1 rounded-sm text-blacke w-20 hover:bg-blue-500 hover:text-white hover:border-blue-500 mb-2 text-[12px]">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
