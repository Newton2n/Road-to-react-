import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../index";
import service from "../../../appwrite/config";
import { useSelector } from "react-redux";
function Home() {
  const [posts, setPosts] = useState([]);
  const userActive = useSelector((state) => state.auth);
  console.log("user status", userActive);
  useEffect(() => {
    service.getPosts().then((posts) => (posts ? setPosts(posts?.rows) : []));
  }, [userActive]);
  console.log("all post", posts);
  if (!userActive.activeStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap ">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else if (posts.length === 0 ?? userActive.activeStatus  ) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No Post || Make Your First Post
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else if (userActive.activeStatus && posts.length > 0) {
    return (
      <div className="">
        <Container>
          <div className="flex ">
            {posts.map((post) => (
              <div key={post.$id} className="w-1/4 p-2 h-auto">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>


//  <div className="">
//       <Container>
//         <div className="flex ">
//           {posts &&posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
    );
  }
}

export default Home;
