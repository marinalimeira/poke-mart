import { Query } from "react-apollo";
import { STORAGE_QUERY } from "../../graphql";
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export const ListStorage = () => (
  <Query query={STORAGE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{`Error: ${error}`}</p>;

      if (data.storage === null) {
        return <div>
          <h2>Storage is empty!</h2>
            <a href="/listItems">Buy new item!</a>
          </div>;
      }

      return <ul>
        {data.storage.items.map(({ name, price }) => (
          <li>{`${name}: ${price}`}</li>
        ))}
      </ul>;
    }}
  </Query>
);
