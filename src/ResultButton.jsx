import React from "react";

export default function ResultButton(props) {
  const percentage =
    (props.count ? (props.record[props.name] / props.count).toFixed(4) : 0) *
    100;
  const colorpercen = 1 / (1 + Math.exp(-0.5 * (percentage - 16.66)));

  return (
    <div className="res">
      <div
        style={{
          height: `${
            (props.count
              ? (props.record[props.name] / props.count).toFixed(4)
              : 0) * 400
          }px`,
          width: 24,
          backgroundColor: `color-mix(in srgb, #00e8e4 ${100 - colorpercen.toFixed(2) * 100}%, black)`,
        }}
        role="img"
        aria-label={`${props.name}: ${percentage}%`}
      />
      <button name={props.name}>{props.name}</button>
      <div className="resUnit">
        <span>{percentage.toFixed(2)}%</span>
        <span className="resValue">{props.record[props.name]}</span>
        <span className="resCaption">TIMES</span>
        <span className="resCaption">PRESSED</span>
      </div>
    </div>
  );
}
