import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../rtk/slices/categoriesSlice";
import "../../../../css/Categories.css";
import Category from "./Category";
import { Placeholder } from "react-bootstrap";
const Categories = () => {
  let categories = useSelector((state) => state.categories);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories("/categories")).then(() => {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    });
  }, [dispatch]);
  return (
    <section className="categories-sec">
      <header>
        <h1>Categories</h1>
        <p>All in one store , there 20 different categories</p>
      </header>
      <hr />
      <ul className="Categories-list">
        {categories.map((el) => {
          return loading ? (
            <Category data={el} />
          ) : (
            <Placeholder as="li" animation="wave" className="w-24.5">
              <Placeholder xs={12} style={{ height: "100%" }} bg="secondary" />
            </Placeholder>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
