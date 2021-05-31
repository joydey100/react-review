import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  let [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkPerson = (num) =>{
    if(num > people.length - 1){
      return 0
    }else if(num < 0){
      return people.length - 1
    }else{
      return num
    }
  }


  const prevPerson = () => {
    setIndex((index) => {
      let  newIndex = index - 1
      return checkPerson(newIndex)
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      let  newIndex = index + 1
      return checkPerson(newIndex)
    })
  }

  let randomPerson = () => {
    let random = (Math.floor(Math.random() * people.length))

    if(random === index){
      random = index + 1
    }

    setIndex(checkPerson(random))
  }






  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>    
        <h4 className="author"> {name} </h4>
        <p className="job"> {job} </p>
        <p className="info"> {text} </p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}> Random Review </button>
  </article>;
};

export default Review;
