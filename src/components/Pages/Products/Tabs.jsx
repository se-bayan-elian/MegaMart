import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../../../css/Tabs.css";
import { fetchCategories } from "../../../rtk/slices/categoriesSlice";
import Select from "react-select";
import { Category } from "@mui/icons-material";
const Tabs = () => {
  let categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories("http//localhost:9000/categories"));
    setIsDisabled(false);
    setIsLoading(false);
  }, []);
  return (
    <section className="tabs-sec">
      <ul>
        {categories.map((el, index) => {
          if (index < 5)
            return (
              <li>
                <Link to={"/" + el.name}>
                  <span className="name">{el.name}</span>
                  <MdKeyboardArrowDown></MdKeyboardArrowDown>
                </Link>
              </li>
            );
        })}
      </ul>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isLoading={isLoading}
        name="Categories"
        placeholder={"Select another Category ..."}
        options={categories
          .filter((el, index) => index > 4)
          .map((el) => {
            return { value: el.name, label: el.name };
          })}
        onChange={(e) => {
          navigate(`/${e.value}`);
        }}
      />
    </section>
  );
};

export default Tabs;
