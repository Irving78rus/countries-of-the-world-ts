import "../App.css";
import React, { useState, useEffect } from "react";
import { NewPagenumber } from '../redux/action'
import {useAppSelector,useAppDispatch} from '../hook'
 const  Pagination: React.FC =()=> {
  const paginationNumber = [];

  const countriesPerPage = 10;
  const filtredCountry = useAppSelector(
    (state) => state.counterReducer.filterCountry.length
  );
  const [Pagenumber, getPage2] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(NewPagenumber(Pagenumber));
  }, [Pagenumber]);

  for (let i = 1; i <= Math.ceil(filtredCountry / countriesPerPage); i++) {
    paginationNumber.push(i);
     
  }

  return (
    <div className="pagination">
      {paginationNumber.map((Pagenumber, index) => (
        <a href="#">
          {" "}
          <div
            key={index}
            className="paginationNumber"
            onClick={() => getPage2(Pagenumber)}
          >
            {Pagenumber}
          </div>
        </a>
      ))}
    </div>
  );
}
export default Pagination
// export default React.memo(Pagination)