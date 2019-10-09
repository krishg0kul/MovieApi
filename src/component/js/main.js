import React, { Component } from "react";
import Head from "./header";
import Rate from "../img/rate.png";
import N018 from "../img/No_18.png";
import Plus18 from "../img/18plus.png";
import Pop_img from "../img/popular.png";
import Vote from "../img/vote.png";
import { Card, ListGroup, ListGroupItem, Col, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
// import Filter from "../img/filter.png";
// import { Modal } from "react-bootstrap";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      receiveValue: "batman"
    };
    // this.passingValue = this.passingValue.bind(this);
  }
  componentDidMount() {
    const axios = require("axios");
    axios
      .get(`http://localhost:8080/API`)
      // axios
      //   .get(
      //     `https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=${this.state.receiveValue}`
      //   )
      .then(response => {
        this.setState({ api: response.data.results });
        this.sort();
      });
  }

  searchBarRender(url) {
    const axios = require("axios");
    axios.get(`http://localhost:8080/API`).then(response => {
      this.setState({ api: response.data.results });
      this.sort();
    });
  }
  sort() {
    var arr = this.state.api;
    arr.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({ api: arr });
  }

  passingValue = res => {
    console.log(res);
    this.searchBarRender(res);
  };

  render() {
    // const [smShow, setSmShow] = useState(false);
    return (
      <div>
        {this.state.api == null
          ? this.setState({ spinner: true })
          : this.setState({ spinner: false })}
        <Loader visible={this.state.spinner}>
          type='Puff' color='#00BFFF' height={100}
          width={100}
          timeout={1000} //3 secs
          <Head
            childFunction={this.passingValue}
            value={this.state.receiveValue}
          />
          <div className='jumbotron'>
            <Row>
              {this.state.api.map(a => (
                <Col id='moviediv' xs={12} sm={6} md={5} lg={4} xl={3}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      id='imgdiv'
                      variant='top'
                      src={`http://image.tmdb.org/t/p/w185${a.poster_path}`}
                    />
                    <Card.Body>
                      <Card.Title id='c_tit'>{a.original_title}</Card.Title>
                      <Card.Text id='textplace'>{a.overview}</Card.Text>
                    </Card.Body>
                    <ListGroup className='list-group-flush'>
                      <ListGroupItem>
                        <Row>
                          <Col>
                            <img src={Rate} id='rate' alt='logo'></img>
                            <h6>&nbsp;{a.vote_average}</h6>
                          </Col>
                          <Col>
                            &nbsp;&nbsp;{a.popularity}
                            <img id='popular' src={Pop_img} alt='Popularity' />
                          </Col>
                          <Col>
                            {a.adult === false ? (
                              <img src={N018} id='adult' alt='Adult' />
                            ) : (
                              <img src={Plus18} id='adult' alt='Adult' />
                            )}
                          </Col>
                        </Row>
                      </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Col>
                        <img src={Vote} id='vote' alt='Vote'></img>
                        <h6> {a.vote_count}</h6>
                      </Col>
                      <Col>
                        <h6>Release Date</h6>
                        {a.release_date}
                      </Col>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {/* <img
            src={Filter}
            className='fixed-bottom'
            id='filter'
            alt='Filter'
            onClick={() => setSmShow(true)}
          ></img>
          <Modal
            size='sm'
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby='example-modal-sizes-title-sm'
          >
            <Modal.Header closeButton>
              <Modal.Title id='example-modal-sizes-title-sm'>
                Small Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
          </Modal> */}
          </div>
        </Loader>
      </div>
    );
  }
}
