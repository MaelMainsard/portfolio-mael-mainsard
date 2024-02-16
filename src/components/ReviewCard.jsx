import ReactStars from "react-rating-stars-component";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Avatar, Image} from "@nextui-org/react";


export const ReviewCard = ({review}) => {
    return (
        <Card className="max-w-sm">
            <CardHeader className="flex justify-between">
                <div className="flex gap-3 flex-row">
                    <Avatar name={review.name} className="w-14 h-14"/>
                    <div className="flex flex-col items-start">
                        <p className="text-md text-start">{review.name}</p>
                        <div className="flex flex-row justify-center items-center space-x-1">
                            <p className="text-small text-default-500 mt-1">4.6</p>
                            <ReactStars
                                count={5}
                                size={20}
                                edit={false}
                                value={review.rating}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </div>
                <Image src={review.brand} className="w-24"/>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="text-tiny">{review.description}</p>
            </CardBody>
        </Card>
    )
}