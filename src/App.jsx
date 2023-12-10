import React, { useState, useEffect } from "react";
import Root from './Routes/Root';
import ErrorPage from './Routes/Error-page';
import Details from './Routes/Details';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Filter from './Routes/Filter';

//Data
import dogs from './Data/Data.json';


function App() {

    //Filter dogs list
    const [filteredDogs, setFilteredDogs] = React.useState(dogs);

    const filterDogs = (filter) => {

        let result = dogs.filter((dog) => 
            dog.age >= filter.ageMin && dog.age <= filter.ageMax
        );
        if ( filter.gender !== "both" ) {
            result = result.filter((dog) =>
                dog.gender === filter.gender
            );
        }
        if ( filter.size !== "all" ) {
            result = result.filter((dog) =>
            dog.size.toUpperCase() === filter.size.toUpperCase()
            );
        }
        if ( filter.noviceOwner ) {
            result = result.filter((dog) =>
                dog.noviceOwner === filter.noviceOwner
            );
        }

        setFilteredDogs(result);
    };


    //Storaging filters locally
    function initFilter() {
        const filter = {
          gender: "both",
          ageMin: 0,
          ageMax: 20,
          size: "all",
          noviceOwner: false,
        };
        return JSON.stringify(filter);
      }


    const useStorageState = (key, initialState) => {
        const [value, setValue] = React.useState(() => {
        const stringifiedValue = localStorage.getItem(key) || initialState;
            const parsed = JSON.parse(stringifiedValue);
            return parsed;
        });

        React.useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [value, key]);

        return [value, setValue];
    };

    const [filter, setFilter] = useStorageState(
        'filters',
        initFilter()
    );

    const handleFilter = (gender, ageMin, ageMax, size, noviceOwner) => {
        const _filter = {
            gender: gender,
            ageMin: ageMin,
            ageMax: ageMax,
            size: size,
            noviceOwner: noviceOwner,
          };
        setFilter(_filter);
        filterDogs(_filter);
    };


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root dogs={filteredDogs} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "details/:dogID",
            element: <Details dogs={filteredDogs} />,
            errorElement: <ErrorPage />,
        },
        {
          path: "filter",
          element: <Filter filter={filter} onFilterSubmit={handleFilter} />,
          errorElement: <ErrorPage />,
      },
    ]);


    return (
        <RouterProvider router={router} /> 
    )
}

export default App

  