import React from "react";
import styleClasses from "./Classes.module.css";
import Cards from "../../components/Cards/Cards";

export default function App() {
  let array = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?s=612x612&w=0&k=20&c=5Vq_BJjG7sbIyKIP-Adu0pChReDXm0dC7BVPvto2M0I=",
    "https://images.unsplash.com/photo-1613845205719-8c87760ab728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwd29ya291dHxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-william-choquette-1954524.jpg&fm=jpg",
    "https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3902727/pexels-photo-3902727.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className={styleClasses.classContainer}>
      {array.map((e) => (
        <Cards image={e} />
      ))}
    </div>
  );
}
