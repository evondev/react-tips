import React from "react";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const Card = () => {
  return (
    <div className="w-full max-w-[400px] p-5 bg-white rounded-xl shadow">
      <div className="card__image h-[250px] mb-5">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/17278621/media/85172069fb253bb00f22cbbcf1c607b2.png?compress=1&resize=1200x900&vertical=top"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title text-xl font-bold mb-4">
          Joker - Poker Buildings Collection
        </h3>
        <p className="card__desc text-sm leading-normal mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, rerum
          dolorem laborum a neque enim laboriosam tenetur, laudantium rem odit
          vitae error! Officia minus at nemo quae, id est dolor.
        </p>
        <a
          href="/#"
          className="card__link block text-center p-5 bg-green-500 rounded-xl text-white"
        >
          See details
        </a>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="w-full max-w-[400px] p-5 bg-white rounded-xl shadow">
      <div className="card__image h-[250px] mb-5">
        <LoadingSkeleton className="w-full h-full"></LoadingSkeleton>
      </div>
      <div className="card__content">
        <h3 className="card__title text-xl font-bold mb-4">
          <LoadingSkeleton className="w-full h-[15px] mb-1"></LoadingSkeleton>
          <LoadingSkeleton className="w-full h-[15px]"></LoadingSkeleton>
        </h3>
        <p className="card__desc text-sm leading-normal mb-10">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <LoadingSkeleton
                className="w-full h-[10px] mb-1 last:mb-0"
                key={index}
              ></LoadingSkeleton>
            ))}
        </p>
        <LoadingSkeleton className="w-full h-[64px] rounded-xl"></LoadingSkeleton>
      </div>
    </div>
  );
};

Card.Loading = Loading;

export default Card;
