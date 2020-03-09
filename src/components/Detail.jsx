import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Detail.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import findCurrentItem from '../redux/actions/findCurrentItem';
import LoadingGIF from '../assets/img/cargando.gif';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount(){
        this.props.findCurrentItem(this.props.match.params.id);
        if(this.props.currentItem){
            this.setState({ isLoading: false });
        }
    }

    componentWillUnmount() {
        this.setState({ isLoading: true });
    }

    renderLoading = () => {
        return(
            <Row className="justify-content-md-center">
                <picture>
                    <img src={LoadingGIF} alt="Cargando..." width="54"/>
                </picture>
            </Row>
        )
    }

    renderDetail = () => {
        const { currentItem } = this.props;
        return(
                <Row className="justify-content-md-center">
                    <Col>
                        <Card style={{
                            backgroundColor: 'black',
                            color: 'white',
                            textAlign: 'left',
                        }}>
                            <Card.Img src={currentItem.image_large} />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{
                            backgroundColor: 'black',
                            color: 'white',
                            textAlign: 'left',
                        }}>
                            <Card.Header as="h1" style={{ color: '#ecaf2a', fontSize: '2em', }}>{currentItem.title}</Card.Header>
                            <Card.Body style={{ lineHeight: '1.42857143' }}>
                                <Card.Title style={{margin: '0'}}>{currentItem.title_original}&nbsp;&nbsp;{currentItem.rating_code}</Card.Title>
                                <Card.Text style={{margin: '0'}}>{currentItem.description_large}</Card.Text>
                                <Card.Text style={{margin: '0'}}><b>Duración:</b> {currentItem.duration}</Card.Text>
                                <Card.Text style={{margin: '0'}}><b>Año:</b> {currentItem.year}</Card.Text>
                                <Card.Text style={{margin: '0'}}><b>Fecha:</b> {currentItem.date}</Card.Text>
                                <i className="fas fa-envelope circle-icon"></i> <i className="fab fa-facebook circle-icon"></i>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        );
    }

    render(){
        const { isLoading } = this.state;
        
        return(
            <Container style={{ padding: '0 15px',
                                marginTop: '40px'}}>
                    {isLoading && this.renderLoading()}
                    {!isLoading && this.renderDetail()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
    };
};

const mapDispatchToProps = {
    findCurrentItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);