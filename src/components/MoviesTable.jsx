//jshint ignore:start
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/Like";
import Table from "./common/Table";


class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "liked",
      content: movie => <Like Liked={movie.liked} onClick={() => this.props.onLike(movie)} />,
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <Table items={movies} columns={this.columns} sortColumn={sortColumn} onSort={onSort}  />
    );
  }
}

export default MoviesTable;
