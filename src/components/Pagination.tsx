import "../App.css";
import React, { useState, useEffect } from "react";
import { NewPageNumber } from '../redux/action'
import {useAppSelector,useAppDispatch} from '../hook'
 const  Pagination: React.FC =()=> {
  const paginationNumber = [];

  const cardPerPage = 10;
  const filtredCountry = useAppSelector(
    (state) => state.counterReducer.filteredСountries.length
  );
  const [PageNumber, getPageNumber] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(NewPageNumber(PageNumber));
  }, [PageNumber]);

  for (let i = 1; i <= Math.ceil(filtredCountry / cardPerPage); i++) {
  
    paginationNumber.push(i);
  }

  return (
    <div className="pagination">
      {paginationNumber.map((PageNumber, index) => (
        <a href="#"  key={index}>
           <div
            className="paginationNumber"
            onClick={() => getPageNumber(PageNumber)}
          >
            {PageNumber}
          </div>
        </a>
      ))}
    </div>
  );
}
export default Pagination
// export default React.memo(Pagination)