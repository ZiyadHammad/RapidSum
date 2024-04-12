import { logo } from "../assets";


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center flex-row mb-10 pt-3">
        <img src={logo} alt="sumz logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://www.github.com/ziyadhammad/RapidSum")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline your reading experience with RapidSum – an open-source
        article summarizer designed to condense lengthy articles into clear and
        concise summaries.
      </h2>
    </header>
  );
};

export default Hero;