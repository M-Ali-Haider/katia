import ContentFeatures from "./contentFeatures";
import ContentGenerated from "./contentGenerated";

const Content = ({ isSubmit }) => {
  return (
    <div className="h-[calc(100%-110px)] sm:h-[calc(100%-83px)] flex items-end justify-center">
      {isSubmit ? <ContentGenerated /> : <ContentFeatures />}
    </div>
  );
};

export default Content;
