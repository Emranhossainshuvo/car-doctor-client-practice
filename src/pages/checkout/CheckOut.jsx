import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();

  const { title } = service;

  return (
    <>
      <div className="bg-[#F3F3F3] mb-10">
        <h2>Checkout for : {title} </h2>
        <form className="mt-24">
          <div className="flex justify-center gap-6 mb-6">
            <input
              className="w-2/5 h-16 rounded-xl"
              type="text"
              name="lastName"
              id=""
            />
            <input
              className="w-2/5 h-16 rounded-xl"
              type="text"
              name="firstName"
              id=""
            />
          </div>
          <div className="flex max-w-full justify-center gap-6 mb-6">
            <input className="w-2/5 h-16 rounded-xl" type="text" name="phone" />
            <input
              className="w-2/5 h-16 rounded-xl"
              type="email"
              name="email"
            />
          </div>
          <div className="flex justify-center mt-6 max-w-full">
            <textarea
              className="w-[81%] rounded-xl"
              name="textArea"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex justify-center mt-6 pb-24">
            <input
              className="btn btn-error w-[81%] mx-auto"
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
