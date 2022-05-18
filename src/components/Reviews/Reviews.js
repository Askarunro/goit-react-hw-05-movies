import { useParams } from "react-router";
import { Link, NavLink, Outlet } from "react-router-dom";
import * as API from "..//..//services/movies-api";
import { useEffect, useState } from "react";
import r from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.fetchMovieReviews(movieId).then(setReviews);
  }, []);

  return (
    <>
    {!reviews[1] && <h2>We don`t have any reviews for hies movie</h2>}
    {reviews[1] && <ul className={r.list}>
      {reviews.map((review) => (
        <li key={review.id} className={r.item}>
          <h2>Author: {review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>}
    </>
  );
};
export default Reviews;
