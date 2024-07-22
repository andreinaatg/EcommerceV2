import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import './home.css';
import BestSellers from '../../components/slider/Slider';


function Home () {
    return (
        <main>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                <img src="images/banner-1-big.jpeg" alt="Large banner" className="hideBanner"/>
                <div className="banner-info">
                <p className="heading">peripera <br/>Miwa exclusive</p>
                <p className="subtitle">Hurry up and grab limited free gift!</p>
                <a href="shop.html"><button className="shop-btn">Shop Now</button></a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/banner-2-big.jpeg" alt="Large banner" className="hideBanner"/>
                <div className="banner-info">
                    <p className="heading">Anua <br/>Best selling products</p>
                    <a href="shop.html"><button className="shop-btn">Shop Now</button></a>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src="images/banner-3-big.jpeg" alt="Large banner" className="hideBanner"/>
                <div className="banner-info">
                    <p className="heading">Glow Up Daily <br/>Cheek Masks & Toner Pads</p>
                    <p className="subtitle">For your Skincare routine</p>
                    <a href="shop.html"><button className="shop-btn">Shop Now</button></a>
                </div>
                </SwiperSlide>
            </Swiper>
            <BestSellers/>
            <section class="why-section">
            <h2>Why Miwa?</h2>
            <div class="why-item">
                <div class="box">
                    <img src="images/icons8-basket-64.png" alt="basket icon"/>
                    <h3>Huge Selection of products</h3>
                    <p>We carry a huge selection of Asian beauty products from Korea & Japan</p>
                </div>
                <div class="box">
                    <img src="images/icons8-diamond-50.png" alt="diamond icon"/>
                    <h3>Authentic & Great Value</h3>
                    <p>We offer authentic products at competitive prices. It's that simple!</p>
                </div>
                <div class="box">
                    <img src="images/icons8-shipping-50.png" alt="truck icon"/>
                    <h3>Reliable Shipping</h3>
                    <p>No customs fees or duties because we ship out of US.</p>
                </div>
                <div class="box">
                    <img src="images/icons8-gate-48.png" alt="gate icon"/>
                    <h3>Your Asian Beauty Gateway</h3>
                    <p>Miwa makes Asian Beauty accessible for everyone, including beginners.</p>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Home ;