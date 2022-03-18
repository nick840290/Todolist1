import React, { useEffect } from "react";

//完成todo
function TodoOver(complete) {
  //完成後過了多久
  const compareNow = (completeTime) => {
    const now = +new Date();

    if (now - completeTime < 3600000) {
      const diff = Math.floor((now - completeTime) / 1000);
      const lessMinute = diff < 60;
      const lessHours = diff < 60 * 60;
      const lessDay = diff < 60 * 60 * 24;

      if (lessMinute) {
        return diff + " 秒前";
      }
      if (lessHours) {
        return Math.floor(diff / 60) + " 分鐘前";
      }
      if (lessDay) {
        return Math.floor(diff / (60 * 60)) + " 小時前";
      }
    } else {
      const fullDate = new Date(completeTime);
      const year = fullDate.getFullYear();
      const month = (fullDate.getMonth() + 1).toString().padStart(2, "0");
      const date = fullDate.getDate().toString().padStart(2, "0");
      const formatTime = year + "-" + month + "-" + date;
      return formatTime;
    }
  };

  return complete.complete.map((complete, index) => (
    <>
      <div key={index} className="todoBox d-flex justify-content-between pt-3">
        <div className="completeTodo">{complete.do}</div>
        <div className="completeTodo">{compareNow(complete.time)}</div>
      </div>
    </>
  ));
}

export default TodoOver;
