import ContactLeft from "./left";
import ContactRight from "./right";

const Contact = () => {
  return (
    <>
      <div className="my-28 flex flex-wrap justify-between gap-20">
        <ContactLeft />
        <ContactRight />
      </div>
    </>
  );
};

export default Contact;
