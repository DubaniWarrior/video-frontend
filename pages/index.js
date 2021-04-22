import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import VideoList from "../components/VideoList";

const Index = () => {
  const [Videos, setVideos] = useState([]);
  const [tags, setTags] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://localhost:8888/api/v1/videos");

      setVideos(result.data);
    };

    fetchData();
  }, []);

  let filteredVideos = Videos.filter((video) => video.tags.includes(tags));
  return (
    <Container fluid>
      <Row>
        <Col>
          <FormGroup className="pt-5">
            <Label for="SearchByTagSearch">Recherche</Label>
            <Input
              type="search"
              name="search"
              id="SearchByTag"
              placeholder="Taper le niveau ou le tag"
              onChange={(e) => setTags(e.target.value)}
            />
          </FormGroup>
          <VideoList Videos={Videos} />
        </Col>
      </Row>
      {Videos.forEach((video) => console.log(video.tags.includes(tags)))}
      {console.log(filteredVideos)}
    </Container>
  );
};

export default Index;
