import gql from "graphql-tag";

export const STORAGE_QUERY = gql `query {
  storage {
    items {
      name
      quantity
    }
  }
}`;

export const MART_ITEMS_QUERY = gql `query {
  items {
    name
    price
  }
}`;

export const BUY_ITEM_MUTATION = gql `mutation ($name: String!, $quantity: Int!) {
	buyItem(input: { name: $name, quantity: $quantity }) {
		success
  }
}`;
