import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateAuthor = (props) => {
    const { authorId } = useParams();
    const [authorName, setAuthorName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [authorNotFoundError, setAuthorNotFoundError] = useState("");

    console.log(authorId);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${authorId}`)
            .then((response) => {
                console.log(response.data);
                setAuthorName(response.data.name);
            })
            .catch((err) => {
                console.log(err.response);
                setAuthorNotFoundError("We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?");
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${authorId}`, {

            name: authorName

        })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto mt-3">

                    <h1> Favorite Authors</h1>
                    <form onSubmit={submitHandler}>
                        {authorNotFoundError ?
                            <h2>
                                {authorNotFoundError} <Link to="/new">Add New Author</Link>
                            </h2>
                            : null}

                        <Link to="/">Home</Link>
                        <h5 className="purple">Edit this author:</h5>
                        <div className="form-group">
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                id="name"
                                value={authorName}
                                onChange={(e) => setAuthorName(e.target.value)}
                            />
                            {errors.name ?
                                <p>{errors.name.message}</p>
                                : null} 

                        </div>
                        <div className=" form-row ">
                        <button onClick={(e) => navigate("/")} className="btn btn-primary mx-4 mt-3 ">Cancel</button>
                        <button type="submit" className="btn btn-primary  mt-3 "> Submit </button>
                        
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAuthor;