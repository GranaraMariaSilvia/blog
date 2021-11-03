import React from "react";
import "./singlePost.css";
import { Card } from "react-bootstrap";

function SinglePost() {
  return (
    <div className="singlePost">
      <Card className="singlePostWrapper">
        <Card.Img
          className="singlePostImage"
          variant="top"
          src="https://cdn.bioguia.com/embed/36a33c28ec9107fd96ba14390aec52eb1616111692/recicla-ropa-shutterstock.jpg?imagick=1&size=500"
        />
        <Card.Body>
          <Card.Title className="singlePostTitle">
            POST sustentable
            <div className="singlePostEdit">
              <i className=" singlePostIcon bi bi-pencil-square"></i>
              <i className=" singlePostIcon bi bi-trash"></i>
            </div>
          </Card.Title>

          <Card.Text className="singlePostInfo">
            <span className="singlePostAutor">
              Autor: <b>Maria</b>
            </span>
            <spa className="singlePostDate">Fecha: 1 hora</spa>
          </Card.Text>
          <p className="singlePostDesc">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Unde ea beatae consectetur obcaecati, perspiciatis
            placeat illum cumque error aut reiciendis nam perferendis
            voluptatibus illo magni temporibus mollitia. Ex, quos incidunt.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum eos
            ab corrupti voluptatem doloremque exercitationem quisquam neque
            animi? Quasi alias sint reprehenderit quis debitis quibusdam libero
            repudiandae delectus ex minima. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Aliquid, beatae eum est voluptates
            illum soluta? Consequatur dolores voluptates a delectus eius
            possimus minima sunt neque, doloribus eligendi quas ducimus ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            doloremque autem iure quas quae quam maiores incidunt reiciendis ad,
            similique id tempore? Beatae veniam perferendis quo nihil natus
            laborum sunt! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi dolores earum inventore? Cumque natus nisi commodi
            laboriosam? Et voluptatem ipsum vitae enim nesciunt consectetur
            cumque iure, omnis voluptates, expedita saepe? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Ab quaerat deleniti ea
            asperiores nostrum nam nobis id dicta nesciunt quis repudiandae
            cupiditate consequatur quisquam sapiente, quae aperiam quia, cum
            iusto! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur modi obcaecati perferendis vero et esse, tempora, aperiam
            saepe ipsa libero accusantium ut, ullam ad quisquam laborum possimus
            sit sequi. Nulla! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Necessitatibus, aperiam aliquam facilis voluptatem suscipit
            hic tempora officia quam fuga, debitis maxime accusantium impedit
            cum repudiandae velit consequuntur. Quasi, exercitationem unde.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SinglePost;
