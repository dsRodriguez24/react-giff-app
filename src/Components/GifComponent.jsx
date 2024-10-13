export const GifComponent = ({id, url, title}) => {
  return (
    <div className="col-md-2" key={id}>
        <img className="img-thumbnail" src={url} alt={title} />
    </div>
  )
}
