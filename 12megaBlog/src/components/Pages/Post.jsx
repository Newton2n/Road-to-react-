import React, { useEffect, useState } from "react";
import { Container, Button, PostCard } from "../index";
import { useParams, useNavigate, Link } from "react-router-dom";
import service from "../../../appwrite/config";
import { useSelector } from "react-redux";

function Post() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [imgUrl, setImgUrl] = useState();
  console.log("useState img url .then", imgUrl);
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  console.log(
    "IsAuthor",
    isAuthor,
    "userdataId",
    userData.$id,
    "post user id",
    post?.userId
  );

  useEffect(() => {
    if (postId) {
      service.getPost(postId).then((post) => {
        if (post) {
          setPost(post);
          service.fileView(post.featuredImg).then((url) => setImgUrl(url));
          console.log("img url in post", imgUrl);
          navigate(`/post/${post.$id}`);
        }
      });
    }
  }, []);

  const deletePost = async () => {
    await service.deleteFile(post.featuredImg);
    await service.deletePost(post.$id);
    navigate("/all-post");
  };
  const editPostBtn = () => {
    console.log("editing post");
    return navigate(`/edit-post/${post?.$id}`);
  };
  const imgView = service.filePreview(post?.featuredImg);
  console.log("img view in post page", imgView);
  console.log("Image in post page", post, post?.featuredImg);
  if (isAuthor) {
    console.log("author is authorized");
  } else {
    console.log("author is not authorized");
  }
  if (post) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="w-full flex justify-between  mb-4 relative border rounded-xl p-2">
            <img src={imgUrl} alt={post.title} className="rounded-xl w-2/4" />
            {isAuthor && (
              <div className=" absolute right-6 top-6">
                <Button className="mr-2" bgColor="bg-green-500 " onClick={editPostBtn}>
                  Edit Post
                </Button>

                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete Post
                </Button>
              </div>
            )}
          </div>
          <div className="w-full mb-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
          </div>
        </Container>
      </div>
    );
  } else {
    null;
  }
}

export default Post;
