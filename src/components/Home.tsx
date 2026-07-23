//import * as React from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

type Blog = {
  id: number;
  title: string;
  body: string;
  author: string;
};

export default function App () {
const { data: blogs, isPending, error} = useFetch<Array<Blog>>('http://localhost:8000/blogs');
    
  return (
    <>
      <div className="home">
        {/* for fetching console.error */}
        {error && <div>{error}</div>}    
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
    </>
  );
}
