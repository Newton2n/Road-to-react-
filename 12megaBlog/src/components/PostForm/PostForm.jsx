import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RTE, Input, Button, Select, Login } from "../index";
import { useSelector } from "react-redux";
import service from "../../../appwrite/config";
import { useForm } from "react-hook-form";
export default function PostForm({ post }) {
  console.log("post form data ", post);
  const navigate = useNavigate();
  const userData = useSelector((data) => data.auth.userData);
  console.log("i am user data", userData, userData.$id);
  const { register, control, watch, handleSubmit, getValues, setValue } =
    useForm({
      defaultValues: {
        title: post?.title,
        slug: post?.$id,
        content: post?.content,
        status: post?.status || "active",
      },
    });

  const submit = async (data) => {
    console.log("post creation data", data);
    if (post) {
      console.log("i am updating");
      const file = data.image[0]
        ? await service.fileUpload(data.image[0])
        : null;
      console.log("file upload details", file);
      
        console.log("post deleting id",post.featuredImg)
        await service.deleteFile(post.featuredImg);
    
      // console.log("being edited post id", post.$id);
      const updatePost = await service.updatePost(post.$id, {
        ...data,
        featuredImg: file ? file.$id : null,
      });
      if (updatePost) navigate(`/post/${updatePost.$id} `);
    } else {
      try {
        console.log(" i am creating ");
        const fileUpload = await service.fileUpload(data.image[0]);
        const fileId = fileUpload.$id;
        console.log("file upload id", fileId);
        data.featuredImg = fileId;
        console.log("img id 0 ", data.featuredImg);
        if (fileId) {
          const createPost = await service.createPost({
            ...data,
            userId: userData.$id,
          });
          console.log(createPost, "creating post ");

          if (createPost) navigate(`/post/${createPost.$id}`);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const slugTransform = useCallback((title) => {
    if (title) {
      return title
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    } else return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        console.log("newton");
        setValue("slug", slugTransform(value.title));
      }
    });
    console.log(subscription);
    return () => subscription.unsubscribe;
  }, [watch, slugTransform]);

  return (
    <>
      <form className=" flex " onSubmit={handleSubmit(submit)}>
        <div className="left w-2/3 ">
          <Input
            label={"tittle"}
            type={"text"}
            className={"my-3"}
            placeholder={"Title name "}
            {...register("title", { required: true })}
          />
          <Input
            disabled
            label={"slug"}
            type={"text"}
            className={"my-3"}
            placeholder={"Slug"}
            {...register("slug", { required: true })}
          />
          <RTE
            control={control}
            {...register("content", {
              required: true,
            })}
          />
        </div>
        <div className="right w-1/3">
          <Input
            label={"Image"}
            type={"file"}
            className={"my-3"}
            {...register("image", { required: true })}
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />
          <Select
            label={"Status"}
            options={["Active", "Inactive"]}
            className={"my-6"}
            {...register("status", { required: true })}
          />
          <Button type={"submit"} className={"cursor-pointer w-1/3 my-3 "}>
            {post ? "Update" : "upload"}
          </Button>

          {post && (
            <img
              className="w-full h-1/2"
              src={service.filePreview(post.featuredImg)}
              alt={post.title}
            />
          )}
        </div>
      </form>
    </>
  );
}

// export default PostForm;
// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "..";
// import appwriteService from "../../../appwrite/config"
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

//     const submit = async (data) => {
//         if (post) {
//             const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//             if (file) {
//                 appwriteService.deleteFile(post.featuredImage);
//             }

//             const dbPost = await appwriteService.updatePost(post.$id, {
//                 ...data,
//                 featuredImage: file ? file.$id : undefined,
//             });

//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         } else {
//             const file = await appwriteService.uploadFile(data.image[0]);

//             if (file) {
//                 const fileId = file.$id;
//                 data.featuredImage = fileId;
//                 const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`);
//                 }
//             }
//         }
//     };

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                      disabled
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }
