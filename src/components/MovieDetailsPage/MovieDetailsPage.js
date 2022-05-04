import { Outlet, useParams } from "react-router"
import { Link} from "react-router-dom";

const MovieDetailsPage=({trend})=>{
    const {cast} = useParams()
    const movie = trend.find(movie => movie.id === Number(cast))
    console.log(movie)
    return (
        <>
        <div className=''>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
            <div>
                <h1>{movie.original_title}</h1>
                <p>User Score:{movie.vote_average}</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                {/* <p>{movie.genre_ids}</p> */}
            </div>
        </div>
        <div>
        <h2>Additional information</h2>
        
            <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
            <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
        </div>
        
        
        </>
    )
}
export default MovieDetailsPage