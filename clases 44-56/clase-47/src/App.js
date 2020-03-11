import React from 'react';
import { withDataFetching } from "./components/high-order-component";

function App({ data }) {
  return (
    <div >
      <ul>
        {data.map(post =>  <li key={post.id}>{post.title}</li> )}
      </ul>
    </div>
  );
}

export default withDataFetching('https://jsonplaceholder.typicode.com/posts', App);
