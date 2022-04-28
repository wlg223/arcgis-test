//import { filter } from "esri/core/promiseUtils";
import React, { useContext, useEffect, useState } from "react";
import FILTERS from "../components/constants/filters";
import { SideBarContext } from "../pages";
import * as styles from "../styles/Filters.module.scss";

/**
 * This component is responsible for updating the filters applied to the map.
 * It keeps track of which filters are applied. When updated it calls dispatch to update the filter state in the parent component (index.tsx)
 */
const Filters = () => {
 // const { state, dispatch } = useContext(SideBarContext);
 // const [filters, setFilters] = useState(state.filters);

  // useEffect(() => {
  //   dispatch({
  //     type: "UPDATE_FILTERS",
  //     payload: { filters },
  //   });
  // }, [filters]);

  return (
    <>
      {Object.keys(FILTERS).map((k) => {
        return ( null
          // <FilterButton
          //   text={k}
          //   active={filters.includes(FILTERS[k])}
          //   onClick={() =>
          //     setFilters(
          //       filters.includes(FILTERS[k])
          //         ? [...filters].filter((f) => f != FILTERS[k])
          //         : [...filters, FILTERS[k]]
          //     )
          //   }
          // />
        );
      })}
      {/* <button
        className={`${styles.btn} ${styles.btnClear}`}
        onClick={() => setFilters([])}
      >
        Clear Filters
      </button> */}
    </>
  );
};

const FilterButton = ({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
}) => {
  return ( null
    // <button
    //   className={`${styles.btn} ${
    //     active ? styles.btnActive : styles.btnInactive
    //   }`}
    //   onClick={onClick}
    // >
    //   {text}
    // </button>
  );
};

export default Filters;
