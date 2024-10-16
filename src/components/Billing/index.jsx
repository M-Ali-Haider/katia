import Heading from "../Settings/heading";
import Stripe from "./stripe";

const BillingManagement = () => {
  return (
    <div>
      <Heading text={"Billing Management"} className={"mb-4"} />
      <div className="p-8 border rounded-xl"></div>
      <Stripe />
    </div>
  );
};

export default BillingManagement;
