import Carousel from "react-bootstrap/Carousel";
import "../../../../css/Carousel.css";
import { Link } from "react-router-dom";
const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/press/news/2019/huawei-p30-huawei-p30-pro-vip-service-offer/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="/products/5">
            <h3>Huawei P30</h3>
            <p>
              Huawei’s re-badged P30 Pro New Edition was officially unveiled
              yesterday in Germany and now the device has made its way to the
              UK.
            </p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2021/02/25070418/Cover-02.png"
          alt="seconed slide"
        />
        <Carousel.Caption>
          <Link to="/products/31">
            <h3>Mornadi Velvet Bed</h3>
            <p>
              Mornadi Velvet Bed Base with Headboard Slats Support Classic Style
              Bedroom Furniture Bed Set
            </p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/mist-spray-cosmetic-bottle-ad-banner_107791-3010.jpg?w=2000"
          alt="Third slide"
        />
        <Carousel.Caption>
          <Link to="/products/5">
            <h3>perfume Oil</h3>
            <p>
              Mega Discount, Impression of Acqua Di Gio by GiorgioArmani
              concentrated attar perfume Oil
            </p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
