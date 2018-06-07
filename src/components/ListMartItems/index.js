import { Query } from "react-apollo";
import { MART_ITEMS_QUERY } from "../../graphql";
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export const ListMartItems = () => (
  <Query query={MART_ITEMS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{`error: ${error}`}</p>;

      return data.items.map(({ name, price }) => (
        <div>
          <a href={`buy/${name}`}>{`${name}: ${price}`}</a>
        </div>
      ));
    }}
  </Query>
);
