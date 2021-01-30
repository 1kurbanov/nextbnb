import Link from 'next/link'

const House = (props) => {
  return (
    <Link href='/houses/[id]' as={'/houses/' + props.id}>
      <a>
        <img src={props.picture} alt='House picture' />
        <p>
          {props.type} - {props.town}
        </p>
        <p>{props.title}</p>
        <p>
          {props.rating} ({props.reviewsCount})
        </p>
        <style jsx>{`
          img {
            object-fit: contain;
            width: 100%;
          }
        `}</style>
      </a>
    </Link>
  )
}
export default House
