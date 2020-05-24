import React from 'react';
import { Typography, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export default function BoxerBody() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h1" component="h1">
                    Boxer
            </Typography>
                <Typography variant="h2" component="h2">
                    Goal
            </Typography>
                <Typography variant="p" component="p">
                    Using the fitbit api (or whatever else can be throw in), compare weight progress over a set time.  Only reveal progress on a certain "weigh-in" day.
            </Typography>
                <Typography variant="h2" component="h2">
                    Datatypes
            </Typography>
                <Typography variant="p" component="p">
                    <ul>
                        <li>Profile Crap, look at firebase plz</li>
                        <li>Body wibly wobbly and also auth</li>
                        <li>Competition</li>
                        <li>I guess that's about it?</li>
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}