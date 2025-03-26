import React from 'react'

const MovieCard = ({movie: {title, vote_average, poster_path, release_date, original_language}}) => {
  return (
    <div className='movie-card'>
        <img src={poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no movie.png'}/>
        <div>
            <h3 className='text-amber-50'>{title}</h3>
            <div className='content'>
                <img src='star.svg' className='w-[20px]'/>
                <p className='text-amber-50'>{vote_average? vote_average.toFixed(1): 'n/a'}</p>
                <p className='text-gray-100'>• {release_date? release_date.split('-')[0]: 'n/a'}</p>
                <p className='text-gray-100'>• {original_language? original_language.toUpperCase(): 'n/a'}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard