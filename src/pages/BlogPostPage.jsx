import React from "react";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  let params = useParams();
  return (
    <div>
      <h1>dynamic posts</h1>
    </div>
  );
};

export default BlogPostPage;
