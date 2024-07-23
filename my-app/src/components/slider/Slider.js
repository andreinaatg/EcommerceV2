import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';
import { useState, useEffect } from "react";
import 'swiper/css/bundle';
import './slider.css'

function BestSellers() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`api/items`)
        .then((res) => res.json())
        .then((data) => setProducts(data));   
    }, []);

    return (
        <>   
        <h1 className="title">Best Sellers</h1>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                keyboard={{ enabled: true }}
                navigation={true}
                modules={[Keyboard, Navigation]}
                className="bestSeller"
            >
                {products.slice(0, 9).map((product, i) => ( // Slice the products array to get the first 8 items
                    <SwiperSlide key={i} className='slide'>
                        <img src={product.img} alt={product.name} className="image" />
                        <div className="brand-icon">
                            <h3>{product.brand}</h3>
                            <img src="images/bag-icon.png" alt="bag-icon" className="icon" />
                        </div>
                        <p className="description">{product.name}</p>
                        <p className="product-price">${product.price}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default BestSellers;
