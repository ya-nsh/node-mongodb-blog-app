import React from 'react';
import Post from './Post';

export default function Posts() {
  return (
    <div className="flex-[9] flex flex-wrap m-5">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
