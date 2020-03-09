import React from 'react';
import './ListMovies.css';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import Card from './Card';
import findResults from '../redux/actions/findResults';
import searchItems from '../redux/actions/searchItems';


class ListMovies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSearch: false,
            text: '',
        };
    }

    getMovies = () => {
        //todo
        this.props.findResults();
    }

    componentDidMount() {
        this.getMovies();
    }

    onChangeText = (event) => {
        if(event.target.value !== ''){
            this.props.searchItems(this.props.results, event.target.value);
            this.setState({ isSearch: true });
        } else{
            this.setState({ isSearch: false });
        }
        this.setState({ text: event.target.value });
        
    }

    onEnterPress = (event) => {
        if(event.key === 'Enter' && this.state.text){
            this.props.searchItems(this.props.results, this.state.text);
            this.setState({ isSearch: true });
        }
    }

    renderSearchResults = () => {
        if(this.props.searchResults.length > 0 ){
            return this.props.searchResults.map( (movie) => {
                return(
                    <Col key={movie.id}
                        xs={{ span: 3, offset: 1 }}
                        sm={{ span: 4, offset: 1 }}
                        md={{ span: 4, offset: 1 }}
                        lg={{ span: 3, offset: 1 }}>
                        <Card
                            alt={movie.title_uri}
                            src={movie.url_imagen_t2}
                            id={movie.id}
                            title={movie.title}
                            />
                    </Col>
                )
            })
        } else {
            return(
                <h3>¡Lo sentimos! Parece que no hay coincidencias para: {this.state.text}</h3>
            )
        }
    }

    renderResults = () => {
        return this.props.results.map( (movie, index ) => {
            return(
                <Col key={movie.id}
                    style={{ margin: '0px 0px 15px 15px' }}
                    xs={3}
                    sm={4}
                    md={4}
                    lg={3}>
                    <Card
                        alt={movie.title_uri}
                        src={movie.url_imagen_t2}
                        id={movie.id}
                        title={movie.title}
                    />
                </Col>
            )
        })
    }

    render() {
        const { results, searchResults } = this.props;
        const { isSearch } = this.state;
        console.log("Results: ");
        console.info(results);
        console.log("Search Results: ");
        console.info(searchResults);
        return(
            <Container style={{
                        color: 'white',
                    }} 
            >
                <Row className="justify-content-md-center">
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalText">
                            <Form.Label column sm={2}>
                                Buscar
                            </Form.Label>
                            <Col sm={"auto"}>
                                <Form.Control
                                    style={{
                                        backgroundColor: '#333',
                                        color: 'white',
                                        borderRadius: '30px',
                                        border: '1px solid white',
                                        padding: '.6em 2.5em .6em .75em'
                                    }}
                                    size="sm"
                                    type="text"
                                    placeholder="Buscar"
                                    onChange={this.onChangeText}
                                    onKeyPress={this.onEnterPress}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="justify-content-md-center">
                    {isSearch && this.renderSearchResults()}
                    {!isSearch && this.renderResults()}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results,
        searchResults: state.searchResults,
    };
};

const mapDispatchToProps = {
    findResults,
    searchItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovies);