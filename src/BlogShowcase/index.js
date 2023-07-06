import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import { Link, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Blog() {
  return (
    <div className="BlogMainContainer">
      <Container>
        <Row>
          <h1>Knowledge Sharing Center!</h1>
          <br />
          <br />
          <br />
        </Row>
        <Row>
          <BlogCard1 />
          <BlogCard2 />
          <BlogCard3 />
          {/* <BlogComingSoonCard /> */}
        </Row>
        <br />
      </Container>
    </div>
  );
}

function BlogCard1() {
  return (
    <Col xs={12} sm={6} md={4}>
      <a href="/blog/1">
        <div className="card">
          <div className="card__header">
            <Image
              src="https://cdn.shopify.com/s/files/1/0976/8782/articles/Untitled_design_1_1200x.jpg?v=1594955759"
              alt="card__image"
              className="card__image temp_img"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">Oral Care</span>
            <h5>Were you ever curious about what's in your toothpaste ??</h5>
            <p>
              We use products for years only to find later they were dangerous.
              Many of our personal hygiene deodorants contain toxic aluminum
              mixed with other .....
            </p>
          </div>
        </div>
      </a>
    </Col>
  );
}

function BlogCard2() {
  return (
    <Col xs={12} sm={6} md={4}>
      <a href="/blog/2">
        <div className="card">
          <div className="card__header">
            <Image
              src="https://i.pinimg.com/736x/b4/6d/40/b46d40eb9f5f330fd966552f6c57839b.jpg"
              alt="card__image"
              className="card__image temp_img"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-green">Food</span>
            <h5>Organic farming in India and why people rarely do it ??</h5>
            <p>
              Before we even start understanding this, lets go back in history
              and find out what really brought us here. India being global
              agricultural powerhouse of .....
            </p>
          </div>
        </div>
      </a>
    </Col>
  );
}

function BlogCard3() {
  return (
    <Col xs={12} sm={6} md={4}>
      <a href="/blog/3">
        <div className="card">
          <div className="card__header">
            <Image
              src="https://live-production.wcms.abc-cdn.net.au/854a20a355312d71d2fca6ed33cc6430?impolicy=wcms_crop_resize&cropH=924&cropW=1641&xPos=94&yPos=0&width=862&height=485"
              alt="card__image"
              className="card__image temp_img"
              width="600"
            />
            {/* <Image src="https://source.unsplash.com/600x400/?food" alt="card__image" className="card__image temp_img" width="600" /> */}
          </div>
          <div className="card__body">
            <span className="tag tag-orange">Technology</span>
            <h5>Wifi, 5G, 1Gbps !! But did you ever ask how safe ??</h5>
            <p>
              Our lifes are irrevercibly intertwined with technology for many
              decades now. First we started with wired technology and we slowly
              .....
            </p>
          </div>
          {/* <div className="card__footer">
                        <div className="user">
                            <Image src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
                            <div className="user__info">
                                <h6>Sai Teja</h6>
                                <small>2h ago</small>
                            </div>
                        </div>
                    </div> */}
        </div>
      </a>
    </Col>
  );
}

// function BlogComingSoonCard() {
//   return (
//     <Col xs={6} md={4}>
//       <div className="card">
//         <div className="card__header"></div>
//         <div className="card__body"></div>
//         <div className="card__footer">
//           <h5>Coming soon...</h5>
//         </div>
//       </div>
//     </Col>
//   );
// }

export default Blog;
