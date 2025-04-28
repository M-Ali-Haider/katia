import * as React from "react";
const IrcSVG = (props) => (
  <svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={44} height={44} fill="url(#pattern0_24655_10)" />
    <defs>
      <pattern
        id="pattern0_24655_10"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_24655_10" transform="scale(0.0104167)" />
      </pattern>
      <image
        id="image0_24655_10"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default IrcSVG;
