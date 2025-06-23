import React from "react";

export default function Stats({ state }) {
  let Total = state.reduce((pre, curr) => {
    return pre + Number(curr.studMark);
  }, 0);

  console.log(Total);
  let Avreg = (Total / state.length).toFixed(3);

  return (
    <div>
      <div className="stats">
        <h2>📊 Stats</h2>
        <div className="stats-summary">
          <span>Total Students:{state.length}</span>
          <span>Average Marks:{isNaN(Avreg) ? 0 : Avreg}</span>
        </div>
        <div className="stats-topper">Top Scorer:{
          state.length==0?(
            <span>No One Is In The List!!</span>
          ):(<span>{state.reduce((pre,cur)=>{
                 return  cur.studMark>pre.studMark?cur:pre
          },state[0]).studMark}</span>)
          }</div>
      </div>
    </div>
  );
}
