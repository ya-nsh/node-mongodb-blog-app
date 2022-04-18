import React from 'react';

export default function Post({ img }) {
  return (
    <div className="post w-[400px] m-10 flex flex-col">
      <img
        className="postImg rounded-md object-cover w-[385px] h-[200px]"
        src={img}
        alt=""
      />
      <div className="postInfo flex flex-col items-center">
        <div className="postCats ">
          <span className="postCat font-bold text-xl text-[#be9656] mt-4 mr-4 cursor-pointer">
            Music
          </span>
          <span className="postCat font-bold text-xl text-[#be9656] mt-4 mr-4 cursor-pointer">
            Life
          </span>
        </div>
        <span className="postTitle text-3xl font-bold mt-5 cursor-pointer">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          quia sunt perferendis, suscipit iste omnis cumque natus blanditiis
        </span>
        <hr />
        <span className="postDate italic text-xl font-bold text-[#999999] mt-4">
          1 Hr ago
        </span>
      </div>
      <p className="postDesc text-xl text-[#444] mt-3 overflow-hidden text-ellipsis line-clamp-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
