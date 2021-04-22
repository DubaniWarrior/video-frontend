import React, { useState, useEffect } from "react";

import { Table } from "reactstrap";

const index = ({ Videos }) => {
  return (
    <div>
      <Table borderless hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tittle</th>
            <th>Tags</th>
            <th>Description</th>
            <th>URL</th>
            <th>Duration</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {Videos.map((video) => (
            <tr key={video.id}>
              <th scope="row">{video.id}</th>
              <td>{video.title}</td>
              <td>{video.tags.map((tag) => `${tag}, `)}</td>
              <td>{video.description}</td>
              <td>
                <a href={video.url}>{video.url}</a>
              </td>
              <td>{video.duration}</td>
              <td>{video.level}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default index;
