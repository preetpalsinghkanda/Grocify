import React, { useState } from "react";
import "./Reviews.css";
import cstmr1 from "../assets/customer/customer1.jpg";
import cstmr2 from "../assets/customer/customer2.jpg";
import cstmr3 from "../assets/customer/customer3.jpg";
import cstmr4 from "../assets/customer/customer4.jpg";
import cstmr5 from "../assets/customer/customer5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Reviews() {
  const reviews = [
    {
      img: cstmr1,
      name: "Emily Johnson",
      work: "Food Blogger",
      star: 4,
      review:
        "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast.",
    },
    {
      img: cstmr2,
      name: "David Smith",
      work: "Chef",
      star: 4,
      review:
        "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables and herbs.",
    },
    {
      img: cstmr3,
      name: "Alya Zahra",
      work: "Model",
      star: 3,
      review:
        "Shopping online with FreshBasket has saved me so much time. Always fresh and reliable.",
    },
    {
      img: cstmr4,
      name: "Carlos Mendes",
      work: "Fitness Coach",
      star: 4,
      review:
        "I appreciate the selection of healthy foods. Great experience overall!",
    },
    {
      img: cstmr5,
      name: "Natcha Phongchai",
      work: "Nutritionist",
      star: 3,
      review:
        "High-quality groceries at reasonable prices. Their organic section is impressive.",
    },
  ];

  const [start, setStart] = useState(0);

  const getCardsCount = () => {
    if (window.innerWidth <= 930) return 1;
    if (window.innerWidth <= 1090) return 2;
    return 3;
  };

  function next() {
    const count = getCardsCount();
    setStart((prev) => (prev + count) % reviews.length);
  }

  function prev() {
    const count = getCardsCount();
    setStart((prev) => (prev - count + reviews.length) % reviews.length);
  }

  function getCards() {
    const count = getCardsCount();
    let result = [];

    for (let i = 0; i < count; i++) {
      result.push(reviews[(start + i) % reviews.length]);
    }

    return result;
  }

  return (
    <div className="reviews-container">
      <h2>
        <span>Customers</span> Saying
      </h2>
      <hr />

      <div className="reviews-main">
        <div className="action-btn">
          <button className="btn-reviews" onClick={prev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="btn-reviews" onClick={next}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>

        <div className="reviews-box">
          {getCards().map((i, index) => (
            <div className="review-details" key={index}>
              <div className="customer-review">
                <div className="reviews-img-container">
                  <img src={i.img} alt={i.name} />
                </div>
                <div>
                  <h4>{i.name}</h4>
                  <p>{i.work}</p>
                  <div>
                    {[...Array(i.star)].map((_, idx) => (
                      <FontAwesomeIcon
                        key={idx}
                        icon={faStar}
                        className="star-icon"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="reviews-para">{i.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}