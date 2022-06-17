import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Card({ data }) {
  return (
    <div className='col-lg-4 mt-5'>
      <div className='card mb-5 mb-lg-0'>
        <div className='card-body'>
          <h5 className='card-title text-muted text-uppercase text-center'>
            {data.title}
          </h5>
          <h6 className='card-price text-center'>
            ${data.price}
            <span className='period'>/month</span>
          </h6>
          <hr />
          <ul className='fa-ul'>
            {data.desc.map((list) => {
              return (
                <li className={list.active ? '' : 'text-muted'}>
                  {list.active ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    <FontAwesomeIcon icon={faTimes} />
                  )}
                  &nbsp;&nbsp;<b>{list.content}</b>
                </li>
              )
            })}
          </ul>
          <div className='d-grid'>
            <a href='#' className='btn btn-primary text-uppercase'>
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
