import React from 'react';
import { Mutation } from 'react-apollo';
import { BUY_ITEM_MUTATION } from "../../graphql";
import {
  Redirect,
} from "react-router-dom";

export const ItemQuantity = ({match}) => {
  let input = "";
  const { item } = match.params;

  return (<Mutation mutation={BUY_ITEM_MUTATION}>
    {(buyItem) => (
      <div>
        <h2>{item}</h2>
        <form onSubmit={e => {
          buyItem({ variables: { 
            name: item,
            quantity: input.value,
          }});
        }}>
          <input ref={node => { input = node; }} />
          <button type="submit">Buy</button>
        </form>
      </div>
    )}
  </Mutation>
)};