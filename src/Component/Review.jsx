import React, { useState } from "react";
import reviews from "./Data";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, image, job, name, text } = reviews[index];  // accessing property from review object

  // logic : The checked number function check the number of previous and next button 
  // length start from 1 and Index start from 0 
  // If both condition is not true then simply return the num
  const checkedNumber = (num) => {   
    if (num > reviews.length - 1) {
      return 0;
    }
    if (num < 0) {
      return reviews.length - 1;
    }
    return num;
  };
  // Logic :In Prev,next button  store the index num in new variable and return checked number function
  const next = () => {
    setIndex(() => {
      const newIndex = index + 1;
      return checkedNumber(newIndex);
    });
  };
  const prev = () => {
    setIndex(() => {
      const newIndex = index - 1;
      return checkedNumber(newIndex);
    });
  };

  return (
    <React.Fragment>
      <div
        className="card w-[500px] border h-[300px] flex flex-col items-center"
        key={id}
      >
        <div className="card-image max-w-[50px] my-3">
          <img src={image} alt="profile-photo" />
        </div>
        <div className="profile my-3">
          <h2 className="name text-center">{name}</h2>
          <p className="job text-center">{job}</p>
        </div>
        <article>
          <p className="text-center">{text}</p>
        </article>
        <div className="controls flex justify-between  w-[95%]">
          <button className="previous" onClick={prev}>
            <FiArrowLeft />
          </button>
          <div className="next" onClick={next}>
            <button>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Review;
