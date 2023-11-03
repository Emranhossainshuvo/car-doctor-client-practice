import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();

  const { title, price, _id, img } = service;

  const {user} = useContext(AuthContext)

  const handleBookService = event => {
    event.preventDefault(); 
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const amount = form.amount.value; 
    const date = form.date.value; 
    const textArea = form.textArea.value; 
    const booking = {email, img,  name, amount, date, textArea, service_id: _id, service_title: title, price}
    console.log(booking)
    fetch('https://car-doctor-server-practice-ten.vercel.app/bookings', {
      method: "POST", 
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        return Swal.fire('Successfully added!')
      }
    }) 
  }

  return (
    <>
      <div className="bg-[#F3F3F3] mb-10">
        <h2 className="text-center text-3xl font-bold pt-10"> {title} </h2>
        <form onSubmit={handleBookService} className="mt-16">
          <div className="flex justify-center gap-6 mb-6">
            <input
              className="w-2/5 h-16 ps-5 rounded-xl"
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={user?.displayName}
              id=""
            />
            <input
              className="w-2/5 h-16 pe-5 ps-5 rounded-xl"
              type="date"
              placeholder="Date"
              name="date"
              id=""
            />
          </div>
          <div className="flex max-w-full justify-center gap-6 mb-6">
            <input className="w-2/5 ps-5 h-16 rounded-xl" type="text" placeholder="Due amount" defaultValue={price} name="amount" />
            <input
              className="w-2/5 ps-5 h-16 rounded-xl"
              type="email"
              defaultValue={user?.email}
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="flex justify-center mt-6 max-w-full">
            <textarea
              className="w-[81%] p-5 rounded-xl"
              name="textArea"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex justify-center mt-6 pb-24">
            <input
              className="btn text-white font-bold btn-error w-[81%] mx-auto"
              type="submit"
              value="Order confirm"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckOut;
