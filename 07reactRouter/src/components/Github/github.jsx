// import React from "react";

import { useLoaderData } from "react-router-dom";
function github() {
  const data= useLoaderData();
 
console.log("hello");
console.log(data)
  return (
    <>
      <div className="flex justify-evenly items-center my-7">
        <ul>
          <li className="text-4xl mb-5">github followers: {data.followers}</li>
          <li className="text-4xl mt-5">github followers: {data.following}</li>
        </ul>
        <img className="h-60 w-60" src={data.avatar_url} alt="Github-img" />
      </div>
    </>
  );
}

export default github;
