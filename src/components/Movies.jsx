//jshint ignore:start
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/ListGroup";
// import Paginate from "./common/Paginate";
import { paginate } from "./common/paginate";
import Pagination from "./common/Pagination";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    // sortColumn: {path: 'title', order: 'asc'}
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
      selectedGenre: genres[0],
    });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    // console.log(genre);
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    // this.setState({ sortColumn: {path, order: 'asc'}})
    this.setState({ sortColumn });
  };

  getPagedData() {
    const { movies, sortColumn, pageSize, currentPage, selectedGenre } =
      this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = sortColumn
      ? _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
      : filtered;

    const allMovies = paginate(sorted, currentPage, pageSize);

    return { allMovies, totalCount: filtered.length };
  }

  render() {
    const { length: count } = this.state.movies;
    const { sortColumn, currentPage, genres, selectedGenre } =
      this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { allMovies, totalCount } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={genres}
              // valueProperty="id"
              // textProperty="name"
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col">
            <p>There are {totalCount} movies in the database.</p>
            <MoviesTable
              movies={allMovies}
              sortColumn={sortColumn}
              onSort={this.handleSort}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
          </div>
        </div>
        <Pagination
          itemCount={totalCount}
          currentPage={currentPage}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
