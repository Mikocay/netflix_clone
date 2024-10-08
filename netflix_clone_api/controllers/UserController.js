const User = require('../models/UserModels');

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(
        (movie) => movie.id === data.id
      ); //As soon as it find a movie that satisfies the condition, it will return that movie object
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ message: 'Movie already liked' });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({ message: 'Movie added to liked list' });
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: 'success', movies: user.likedMovies });
    } else return res.json({ msg: 'User with given email not found.' });
  } catch (error) {
    return res.json({ msg: 'Error fetching movies.' });
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex((movie) => movie.id === movieId);
      if (!movieIndex) {
        res.status(400).send({ msg: 'Movie not found.' });
      }
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: 'Movie successfully removed.', movies });
    } else return res.json({ msg: 'User with given email not found.' });
  } catch (error) {
    return res.json({ msg: 'Error removing movie to the liked list' });
  }
};
