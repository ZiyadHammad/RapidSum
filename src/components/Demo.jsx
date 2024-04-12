import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [articleHistory, setArticleHistory] = useState([]);
  const [copied, setCopied] = useState('')

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage && articlesFromLocalStorage.length > 0) {
      const lastArticle = articlesFromLocalStorage[0];
      setArticle(lastArticle);
      setArticleHistory(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateArticleHistory = [newArticle, ...articleHistory];

      setArticle(newArticle);
      setArticleHistory(updateArticleHistory);

      localStorage.setItem("articles", JSON.stringify(updateArticleHistory));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center"
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL..."
            value={article.url}
            className="url_input peer"
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↵
          </button>
        </form>

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {articleHistory.map((item, index) => (
            <div
              key={`link-${index}`}
              className="link_card"
              onClick={() => setArticle(item)}
            >
              <div
                className="copy_btn"
                onClick={() => handleCopy(item.url)}
              >
                <img
                  src={copied === item.url ? tick : copy}
                  className="w-[%40] h-[%40] object-contain"
                  alt={copied === item.url ? 'tick_icon' : 'copy_icon'}
                />
              </div>
              <p className="flex-1 font-santoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            <br />
            <span className="font-toshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            <h2 className="font-santoshi font-bold text-gray-600 text-xl">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <p className="font-inter font-medium text-sm text-gray-700">
                {article.summary}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
