import React from "react";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>
          <span role="img" aria-label="cofetti ball">
            🎊
          </span>
        </h1>
        <h2>Love To See You Here</h2>
        <p style={{ fontSize: "1.5rem" }}>Keep your secrets here</p>
        <p style={{ color: "gray", fontSize: "1rem" }}>
          click on 'New Note' button
        </p>
      </div>
    </>
  );
}
