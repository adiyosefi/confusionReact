import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
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


function RenderComments({comments}) {
    const listItems = comments.map((comment) => {
        return (
            <div>
                <li key={comment.id}>
                    <div>
                        <p>{comment.comment}</p>
                    </div>
                    <div>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                </li>
            </div>
        );
    });

    if (comments != null) {
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
    } else {
        return (
            <div></div>
        );
    }
}


const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
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

export default DishDetail;