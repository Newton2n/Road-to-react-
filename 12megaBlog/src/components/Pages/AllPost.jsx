import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../index";
import service from "../../../appwrite/config";
function AllPost() {
  console.log("all post here ")
  const [posts, setPosts] = useState();
  console.log("All post",posts)
  useEffect(() => {
    service.getPosts().then((posts) => {
      console.log("post format",posts)
      if (posts) {
        setPosts(posts.rows);
      }
    });
  }, []);
  if(posts?.length ===0 ||posts===undefined){
   return (
         <div className="w-full py-8 mt-4 text-center">
           <Container>
             <div className="flex flex-wrap">
               <div className="p-2 w-full">
                 <h1 className="text-2xl font-bold hover:text-gray-500">
                  You Have No Post || Make Your First Post 
                 </h1>
               </div>
             </div>
           </Container>
         </div>
       )
}else{
  return (
    <div className="">
      <Container>
        <div className="flex ">
          {posts &&posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
}
export default AllPost;
