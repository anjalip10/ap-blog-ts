import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const[isPending, setIsPending]= useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e:React.SubmitEvent) => {
        e.preventDefault();
        const blog = { title, body, author};

        // console.log(blog);

        //..29...making a POST Request.......
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            navigate('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    // type="text"
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {/* <button>Add Blog</button> */}
                {/* ..29 */}
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create ;