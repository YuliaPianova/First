
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateNewAuthor = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {

            name:name,
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
            <div className="row ">
                <div className="col-4 mx-auto mt-3">
                    <h1> Favorite Authors</h1>
                
                    <Link to="/">Home</Link>
                    <h5 className="purple">Add a new author</h5>

                    <form onSubmit={handleCreateSubmit}>

                        <div className="form-group">
                            <label htmlFor="name">Name:</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />

                            {errors.name ? 
                                <p>{errors.name.message}</p> : 
                                null}
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

export default CreateNewAuthor;