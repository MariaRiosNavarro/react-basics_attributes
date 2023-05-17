import React from "react";
import "./styles.css";

export default function App() {
  return <ArticleWithAtributes />;
}

function ArticleWithAtributes() {
  return (
    <article className="article">
      <h2 className="article__title">Atributes in JSX</h2>
      <label htmlFor="atribut">Atribut</label>
      <input id="atribut" />
      <a
        className="article__link"
        href={
          "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
        }
      >
        React MDM
      </a>
    </article>
  );
}
