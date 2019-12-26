import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
        <Card key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }


    renderComments(comments) {
        const listItems = comments.map((comment) => {
            var date = new Date(comment.date);
            return (
                <div>
                    <li key={comment.id}>
                        <div>
                            <p>{comment.comment}</p>
                        </div>
                        <div>
                            <p>-- {comment.author}, {date.toLocaleString('en-EN', { month: 'short' })} {('0' + date.getDate()).slice(-2)}, {date.getFullYear()}</p>
                        </div>
                    </li>
                </div>
            );
        });

        if (comments != null){
            return (
                <div>
                    <h4>Comments</h4>
                    <div>
                        <ul className="list-unstyled">
                            {listItems}
                        </ul>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }

}

export default DishDetail;