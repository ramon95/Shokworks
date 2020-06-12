import React from "react";
import Img from "../assets/images/Ellipse.png";
import Img1 from "../assets/images/Ellipse1.png";
import Img2 from "../assets/images/Ellipse2.png";
import Img3 from "../assets/images/Ellipse3.png";
import Img4 from "../assets/images/Ellipse4.png";

const CarouselItem2 = ({ level, item, img }) => {
  console.log(img);

  return (
    <div className={`item level${level}`}>
      {img === 0 ? (
        <img src={Img} alt="img" className="item__img" />
      ) : img === 1 ? (
        <img src={Img1} alt="img" className="item__img" />
      ) : img === 2 ? (
        <img src={Img2} alt="img" className="item__img" />
      ) : img === 3 ? (
        <img src={Img3} alt="img" className="item__img" />
      ) : img === 4 ? (
        <img src={Img4} alt="img" className="item__img" />
      ) : (
        ""
      )}

      <div className="info">
        <div className="quole">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49.493"
            height="33.999"
            viewBox="0 0 49.493 33.999"
          >
            <path
              d="M39.105,16.168A10.531,10.531,0,0,0,33.16,18C36.85,7.589,45.131,6.366,45.56,6.312l-.369-2.976c-.153.018-15.376,2.112-16.687,23.171l.045,0c0,.081-.024.162-.024.243A10.582,10.582,0,1,0,39.105,16.168Zm0,18.168a7.583,7.583,0,1,1,7.583-7.583A7.589,7.589,0,0,1,39.105,34.336ZM10.8,16.168A10.522,10.522,0,0,0,4.859,18C8.549,7.589,16.828,6.366,17.257,6.312l-.369-2.976C16.735,3.354,1.515,5.448.2,26.507l.045,0c0,.081-.024.162-.024.243A10.582,10.582,0,1,0,10.8,16.168Zm0,18.168a7.583,7.583,0,1,1,7.583-7.583A7.589,7.589,0,0,1,10.8,34.336Z"
              transform="translate(-0.198 -3.336)"
            />
          </svg>
          <p className="text">{item.body}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49.493"
            height="34"
            viewBox="0 0 49.493 34"
          >
            <path
              d="M10.784,16.168A10.531,10.531,0,0,1,16.729,18C13.039,7.589,4.757,6.366,4.328,6.312L4.7,3.336c.153.018,15.376,2.112,16.687,23.171l-.045,0c0,.081.024.162.024.243a10.583,10.583,0,1,1-10.58-10.585Zm0,18.168A7.583,7.583,0,1,0,3.2,26.753,7.589,7.589,0,0,0,10.784,34.336Zm28.3-18.168A10.522,10.522,0,0,1,45.03,18C41.34,7.589,33.062,6.366,32.633,6.312L33,3.336c.153.018,15.373,2.112,16.69,23.171l-.045,0c0,.081.024.162.024.243A10.583,10.583,0,1,1,39.088,16.168Zm0,18.168A7.583,7.583,0,1,0,31.5,26.753,7.589,7.589,0,0,0,39.088,34.336Z"
              transform="translate(-0.198 -3.336)"
            />
          </svg>
        </div>
        <p className="title">{item.title}</p>
        <p className="position">CEO, Zexbay-Fine</p>
      </div>
    </div>
  );
};
export default CarouselItem2;
