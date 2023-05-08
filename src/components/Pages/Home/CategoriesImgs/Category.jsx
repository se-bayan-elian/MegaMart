import { Link } from "react-router-dom";

const Category = (props) => {

  return (
    <>
      <li>
        <Link to={'/'+props.data.name}>
          <div
            className="bg"
            style={{ backgroundImage: `url(${props.data.image})` }}
          >
            <div className="overlay"></div>
            
          </div>
          <div className="content">
              <h1>{props.data.name}</h1>
            </div>
        </Link>
      </li>
    </>
  );
};

export default Category;
