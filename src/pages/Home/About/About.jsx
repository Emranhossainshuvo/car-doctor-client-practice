import person from "../../../assets/assets/images/about_us/person.jpg";
import parts from "../../../assets/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" w-11/12 rounded-lg shadow-2xl" />
          <img src={parts} className="w-3/6 border-8 border-white absolute right-5 top-3/4 rounded-lg shadow-2xl" />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-[#FF3811]">About Us</h3>
          <h1 className="text-5xl font-extrabold">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="mb-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
