import { Client, ID, TablesDB, Databases, Storage } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  tables;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.tables = new TablesDB(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, content, featuredImg, userId,slug }) {
    console.log(title,content,featuredImg,userId,slug)
    try {
      const post = await this.tables.createRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: ID.unique(),
        data: {
          title,
          content,
          userId,
          featuredImg,
          slug
        },
      });
      return post
      console.log(post);
    } catch (error) {
      throw error;
    }
  }
  async updatePost(rowId, { title, content, featuredImage }) {
    try {
      const result = await this.tables.updateRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: rowId,
        data: {
          title,
          content,
          featuredImage,
        },
      });
      console.log(result);
      return result
    } catch (error) {
      throw error;
    }
  }
  async deletePost(rowId) {
    try {
      const result = await this.tables.deleteRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: rowId,
      });
   return result
      
    } catch (error) {
      console.log(error);
    }
  }
  async getPost(rowId) {
    try {
      const result = await this.tables.getRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
        rowId: rowId,
      });
      console.log(result);
      return result
    } catch (error) {
      console.log(error);
    }
  }
  async getPosts() {
    try {
      const result = await this.tables.listRows({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableId,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log("error occurred in get all post :",error)
    }
  }
  async fileUpload(file) {
    try {
      const promise = await this.storage.createFile({
        bucketId: conf.appwriteBucketId,
        fileId: ID.unique(),
        file: file,
      });
      console.log(promise);
      return promise;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteFile(fileId) {
    try {
      const result = await this.storage.deleteFile({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log("error occurred in delete file ",error);
    }
  }
  async filePreview(fileId) {
    try {
      const result = this.storage.getFilePreview({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
      });
      console.log(result);
      return result.href;
    } catch (error) {
      console.log(error);
    }
  };
  async fileView(fileId) {
    try {
      const result = this.storage.getFileView({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
      });
      console.log("post view result",result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
}
const service = new Service();
export default service;
