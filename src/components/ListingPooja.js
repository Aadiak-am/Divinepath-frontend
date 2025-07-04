import React from 'react';
import { useNavigate } from 'react-router-dom';

const poojaData = [
  {
    id: 1,
    title: 'Shani Mahadosh Nivaran Pooja',
    description: 'Removes Obstacles | Stability in Career & Job Security',
    date: '31 May 2025',
    image: '/images/p1.webp',
  },
  {
    id: 2,
    title: 'Attract Your Love Spell',
    description: 'Your Love Story Starts Here – Attract & Keep Them!',
    date: '31 May 2025',
    image: '/images/images.jpg',
  },
  {
    id: 3,
    title: 'Surya Aarti',
    description: 'Health, Strength, Happiness & Healing – Stay Blessed!',
    date: '01 Jun 2025',
    image: '/images/s1.jpg',
  },
  {
    id: 4,
    title: 'Ganesh Chaturthi Pooja',
    description: 'Remove Obstacles and Bring Prosperity',
    date: '02 Jun 2025',
    image: '/images/g1.jpg',
  },
  {
    id: 5,
    title: 'Lakshmi Puja',
    description: 'Invoke Wealth and Abundance',
    date: '03 Jun 2025',
    image: '/images/ml2.jpg',
  },
  {
    id: 6,
    title: 'Navagraha Shanti Pooja',
    description: 'Peace & Balance by Soothing Nine Planets',
    date: '04 Jun 2025',
    image: '/images/nv1.jpg',
  },
  {
    id: 7,
    title: 'Satyanarayan Katha',
    description: 'Fulfill Wishes and Bring Happiness',
    date: '05 Jun 2025',
    image: '/images/st1.webp',
  },
  {
    id: 8,
    title: 'Hanuman Chalisa Path',
    description: 'Strength, Courage and Protection',
    date: '06 Jun 2025',
    image: '/images/ranjithanuman.jpg',
  },
  {
    id: 9,
    title: 'Durga Puja',
    description: 'Divine Protection and Power',
    date: '07 Jun 2025',
    image: '/images/Durga-Pooja.webp',
  },
  {
    id: 10,
    title: 'Mahamrityunjaya Mantra Pooja',
    description: 'Healing, Protection, and Longevity',
    date: '08 Jun 2025',
    image: '/images/mahakal.jpg',
  }
];

function BookPooja() {
  const navigate = useNavigate();

  const handleBookNow = (pooja) => {
    // Navigate to booking form with pooja data
    navigate('/book-form', { state: { pooja } });
  };

  return (
    <div className="container mt-4">
      <style>
        {`
          .pooja-card {
            background: #fff8e1;
            border-radius: 14px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease, box-shadow 0.3s ease;
            overflow: hidden;
          }

          .pooja-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }

          .pooja-img {
            height: 200px;
            object-fit: cover;
            width: 100%;
            border-top-left-radius: 14px;
            border-top-right-radius: 14px;
          }

          .pooja-title {
            color: #3d2f00;
            font-weight: 600;
          }

          .pooja-description {
            color: #5e5e5e;
            font-size: 0.95rem;
          }

          .pooja-date {
            font-size: 0.85rem;
            color: #7b7b7b;
          }

          .book-btn {
            background-color: #ff9800;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 500;
            transition: background-color 0.3s;
            cursor: pointer;
          }

          .book-btn:hover {
            background-color: #e68900;
          }
        `}
      </style>

      <h2 className="mb-4 text-center">🕉️ Book a Pooja</h2>
      <div className="row">
        {poojaData.map((pooja) => (
          <div key={pooja.id} className="col-md-4 mb-4">
            <div className="pooja-card h-100">
              <img src={pooja.image} alt={pooja.title} className="pooja-img" />
              <div className="p-3 d-flex flex-column">
                <h5 className="pooja-title">{pooja.title}</h5>
                <p className="pooja-description flex-grow-1">{pooja.description}</p>
                <p className="pooja-date">
                  <i className="bi bi-calendar-event"></i> {pooja.date}
                </p>
                <button className="book-btn mt-auto" onClick={() => handleBookNow(pooja)}>
                  Book Now ➔
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookPooja;
