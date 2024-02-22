import PropTypes from "prop-types"
export const CastList = ({cast}) => {
  return (
    <div>
          <ul>
              {cast.slice(0, 6).map(castMember => {
                  return (
                      <li key={castMember.id}>
                          <img src={`https://image.tmdb.org/t/p/w185/${castMember.profile_path}`} alt={castMember.name} />
                          <p>{castMember.name}</p>
                          <p>Character: {castMember.character}</p>
                      </li>
                  );
              })}
          </ul>      
    </div>
  )
}

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
}
