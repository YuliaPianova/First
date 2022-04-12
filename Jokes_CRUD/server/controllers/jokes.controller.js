const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => console.log(err));
};

module.exports.findJokeById = (req, res) => {
    const { params } = req;
    Joke.findOne({ _id: params._id })
        .then((joke) => res.json(joke))
        .catch((err) => console.log(err));
};

module.exports.createNewJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => console.log(err));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => console.log(err));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
};

/*module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
    updateJoke,
    deleteJoke,
}; /*/