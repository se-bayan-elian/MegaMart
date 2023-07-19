import { useEffect } from "react";
import Contact from "./Contact";
import HyperLinks from "./HyperLinks";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../rtk/slices/categoriesSlice";
import '../..//css/footer.css'

function fetchLinks(data){
  // you can coding algorithm the system here
    return data.map((el,index)=>  el.name).filter((el,index)=> index <7)
}
const Footer = () => {
  let categories = useSelector(state => state.categories);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategories('/categories'))
  },[])
  const custServices = ['About us','Terms & Conditions','FAQ Privacy Policy','E-waste Policy','Cancellation & Return Policy']
  return ( 
    <section className="footer-sec">
      <div className="circle"></div>
      <div className="container">
        <div className="footer-flex">
          <Contact></Contact>
          <HyperLinks title='Most Popular Categories' data={fetchLinks(categories)} />
          <HyperLinks title='Customer Services' data={custServices} />
        </div>
        <div className="rights">
          <p> &copy; 2023 Implemented by <a href="https://www.linkedin.com/in/bayan-elian-20b160248/">Eng.Bayan Elian</a></p>
        </div>
      </div>
    </section>
   );
}
 
export default Footer;
