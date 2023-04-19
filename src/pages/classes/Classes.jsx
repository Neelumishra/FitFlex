import React from "react";
import "./classes.css";
import Cards from "../../components/Cards/Cards";
import Subcard from "../../components/SubCard/Subcard";

function Classes() {
  let data = [
    {
      images:
        "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Yoga",
    },
    {
      images:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Body Building",
    },
    {
      images:
        "https://images.pexels.com/photos/3775603/pexels-photo-3775603.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Aerobic",
    },
    {
      images:
        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Cardio",
    },
    {
      images:
        "https://images.pexels.com/photos/3902727/pexels-photo-3902727.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Dance",
    },
    {
      images:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Diet Plan",
    },
    {
      images:
        "https://images.pexels.com/photos/3823086/pexels-photo-3823086.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Flexibility",
    },
    {
      images:
        "https://images.pexels.com/photos/3902727/pexels-photo-3902727.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Dance",
    },

    {
      images:
        "https://images.pexels.com/photos/6551075/pexels-photo-6551075.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Weight Loss",
    },
    {
      images:
        "https://images.pexels.com/photos/4498292/pexels-photo-4498292.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Weight Gain",
    },
    {
      images:
        "https://images.pexels.com/photos/3902727/pexels-photo-3902727.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Dance",
    },
  ];

  let ProfileData = [
    {
      image:
        "https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "John",
      desination: "Trainer",
      year: "6 Years",
    },
    {
      image:
        "https://images.pexels.com/photos/7991604/pexels-photo-7991604.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Harry",
      desination: "Trainer",
      year: "2 year",
    },
    {
      image:
        "https://images.pexels.com/photos/6551425/pexels-photo-6551425.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Canmi",
      desination: "Trainer",
      year: "4year",
    },
    {
      image:
        "https://images.pexels.com/photos/6740296/pexels-photo-6740296.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Narobi",
      desination: "Training",
      year: "8 year",
    },
    {
      image:
        "https://images.pexels.com/photos/4057069/pexels-photo-4057069.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Harvi",
      desination: "Trainer",
      year: "2 year",
    },
    {
      image:
        "https://images.pexels.com/photos/4587427/pexels-photo-4587427.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Narvi",
      desination: "Trainer",
      year: "6year",
    },
  ];
   const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
     const intervalId = setInterval(() => {
       console.log("1");
       setCurrentImage((currentImage + 1) % ProfileData.length);
     }, 2000);
     return () => clearInterval(intervalId);
   }, [currentImage]);

  let boxRef = React.useRef(null);

  const btnpressprev = () => {
    let box = boxRef.current;
    if (!box) return;

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let box = boxRef.current;
    if (!box) return;

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div style={{ backgroundColor: "#16191e", paddingTop: "40px" }}>
      <h1 className="Heading">Traning Classes</h1>
      <div className="product-carousel">
        <button className="pre-btn" onClick={btnpressprev}>
          <p>&lt;</p>
        </button>
        <button className="next-btn" onClick={btnpressnext}>
          <p>&gt;</p>
        </button>

        <div className="product-container" ref={boxRef}>
          {data.map((e) => (
            <Cards images={e.images} text={e.text} />
          ))}
        </div>
      </div>
      <h3 className="Heading">Meet Our Team</h3>
      <div className="team-member-container">
        <div>
          <img
            className="subHeadingimage"
            src={ProfileData[currentImage].image}
            width="100%"
          ></img>

          <h2 className="subheadingtext">{ProfileData[currentImage].name}</h2>
          <p className="subheadingtext">
            {ProfileData[currentImage].desination}
          </p>
          <p className="subheadingtext">{ProfileData[currentImage].year}</p>
        </div>
      </div>
    </div>
  );
}

export default Classes;
