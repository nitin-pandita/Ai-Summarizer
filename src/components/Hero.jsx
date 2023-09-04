import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header
      className="
    w-full
    flex
    justify-center
    items-center
    flex-col
    "
    >
      <nav
        className="
        flex
        justify-between
        items-center
        pt-3
        w-full
        mb-10
      "
      >
        <img src={logo} alt="ai logo" className="w-20 object-contain" />
        <button
          onClick={() => window.open("https://github.com/nitin-pandita")}
          className="
            black_btn
          "
        >
          Github
        </button>
      </nav>
      <h1
        className="
            head_text
      "
      >
        Summarizer Article with Ai <br className="max-md: hidden" />
        <span className="orange_gradient">Open GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with the help of Open Ai, this AI will help you
        understand your personal information and information about your project.
      </h2>
    </header>
  );
};

export default Hero;
