import {
  faCoffee,
  faEye,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const HandleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/COFFE/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              // const remaining = coffees.filter((cof) => cof._id !== _id);
              // setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex   card card-side bg-[#F5F4F1] shadow-xl m-[50px] w-[648px] h-[300px]">
        <div>
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
        </div>
        <div className="ml-[60px] my-[30px] ">
          <h2 className="mt-[20px] w-[250px]">
            <span className="font-semibold  text-[20px] ">Name:</span>
            {name}
          </h2>
          <p className="mt-[20px]">
            <span className="font-semibold  text-[20px]">Title:</span>
            {category}
          </p>
          <p className="mt-[20px]">
            {" "}
            <span className="font-semibold  text-[20px]">Quantity:</span>
            {quantity}
          </p>
          <div>
            <button className="bg-[#efba1c] mt-[50px] h-[50px] w-[150px] rounded-lg font-rancho font-bold text-[20px]">
              ViewDetails
            </button>
          </div>
        </div>
        <div className="flex  flex-col mt-[70px] gap-[10px] ml-[60px] cursor-pointer">
          <FontAwesomeIcon icon={faEye} />
          <br></br>
          <FontAwesomeIcon icon={faPen} />
          <br></br>
          <FontAwesomeIcon onClick={() => HandleDelete(_id)} icon={faTrash} />
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
