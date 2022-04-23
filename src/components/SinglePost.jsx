import React from 'react';
import { Link } from 'react-router-dom';

export default function SinglePost() {
  return (
    <div className="singlepost flex-[9]">
      <div className="singlePostWrapper p-5 pr-0">
        <img
          className="singlePostImg w-full h-[300px] object-cover rounded-md"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Frosty mountain"
        />
        <h1 className="singlePostTitle text-center m-3 text-3xl">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit float-right text-xl">
            <i className="singlePostIcon ml-2 cursor-pointer far fa-edit"></i>
            <i className="singlePostIcon ml-2 cursor-pointer  far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo mb-5 flex justify-between text-xl text-[#be9656]">
          <span>
            Author:
            <b className="singlePostAuthor ml-1">
              <a className="link" href="/posts?username=Safak">
                User1
              </a>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc text-[#666] text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
}
