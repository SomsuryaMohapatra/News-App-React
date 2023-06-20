import React from "react";

export default function NewsItems(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <span
          className="badge rounded-pill bg-info"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://www.coindesk.com/resizer/Uq1wlm3Wx9vNUCfWu9uz-G88TSs=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/QSQRI4BXNJG73KBEL2I6I5U4EM.png"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on {date}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
