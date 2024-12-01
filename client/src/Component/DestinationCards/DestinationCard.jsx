import { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsClipboardCheck } from 'react-icons/bs';
import img from '../../assets/nature1.jpg';
import './DestinationCard.css';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Hello Jani',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolorem beatae deserunt sed facere assumenda ullam architecto maxime sint esse at quis vero natus sapiente veniam ut explicabo, nam aliquid.',
  },
  {
    id: 2,
    imgSrc: img,
    destTitle: 'Hello Jani',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolorem beatae deserunt sed facere assumenda ullam architecto maxime sint esse at quis vero natus sapiente veniam ut explicabo, nam aliquid.',
  },
  {
    id: 3,
    imgSrc: img,
    destTitle: 'Hello Jani',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolorem beatae deserunt sed facere assumenda ullam architecto maxime sint esse at quis vero natus sapiente veniam ut explicabo, nam aliquid.',
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: 'Hello Jani',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolorem beatae deserunt sed facere assumenda ullam architecto maxime sint esse at quis vero natus sapiente veniam ut explicabo, nam aliquid.',
  },
  {
    id: 5,
    imgSrc: img,
    destTitle: 'Hello Jani',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolorem beatae deserunt sed facere assumenda ullam architecto maxime sint esse at quis vero natus sapiente veniam ut explicabo, nam aliquid.',
  },
  {
    id: 6,
    imgSrc: img,
    destTitle: 'Hello Jani',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolorem beatae deserunt sed facere assumenda ullam architecto maxime sint esse at quis vero natus sapiente veniam ut explicabo, nam aliquid.',
  }
  // Add more data objects here as needed
];

const DestinationCard = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destination</h3>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
          <div key={id} className="singleDestination">
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{location}</span>
              </span>
              <hr className="divider" />
              <div className="fees flex">
                <div className="grade">
                  <span>
                    Cultural<br />
                    Relax <small>+1</small>
                  </span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>
              <hr className="divider" />
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className="btn flex">
                Details <BsClipboardCheck className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationCard;
