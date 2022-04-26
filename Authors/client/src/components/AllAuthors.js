import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const AllAuthors = () => {
    const [authorList, setAuthorList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((response) => {
                console.log(response.data);
                setAuthorList(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    const handleDelete = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((response) => {
                console.log("success deleting author");
                console.log(response);
                const filteredAuthors = authorList.filter((author) => {
                    return author._id !== idFromBelow;
                });
                setAuthorList(filteredAuthors);
            })
            .catch((err) => {
                console.log("error deleting author", err.response);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto mt-3">

                    <h1> Favorite Authors</h1>
                    <Link to="/new">Add an author</Link>

                    <h5 className="purple">We have quotes by:</h5>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Actions Available</th>
                            </tr>
                        </thead>

                        <tbody>
                            {authorList.map((author, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{author.name}</td>
                                        <td className="d-flex  justify-content-around">
                                            <Link to={`/edit/${author._id}`}>  <button className=" btn btn-primary ">Edit</button>
                                            </Link>

                                            <button onClick={() => handleDelete(author._id)} className="btn btn-danger"> Delete</button>

                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllAuthors;