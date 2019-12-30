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
            return (
                <div>
                    <li key={comment.id}>
                        <div>
                            <p>{comment.comment}</p>
                        </div>
                        <div>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
        if (this.props.dish != null) {
            return (
                <div class="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
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

}

export default DishDetail;