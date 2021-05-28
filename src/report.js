import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            score: 0,
            username: ''
        }
    }

    componentDidMount() {
        const answers = [
            'santaclausllegoalaciudad',
            'alliwantforchristmasisyou',
            'santatellme',
            'bichota',
            'amorprohibido',
            'dulcenavidad',
            'jinglebellrock',
            'dimecomoquieres',
            'levitating',
            'someoneyouloved'
        ]
        firebase.db.collection("participants").doc(this.state.id).get()
        .then(res => {
            let innerScore = 0;
            console.log(res.data()["answers1"]);
            if(res.data()["answers1"] == answers[0]) {
                innerScore += 1;
            }
            if(res.data()["answers2"] == answers[1]) {
                innerScore += 1;
            }
            if(res.data()["answers3"] == answers[2]) {
                innerScore += 1;
            }
            if(res.data()["answers4"] == answers[3]) {
                innerScore += 1;
            }
            if(res.data()["answers5"] == answers[4]) {
                innerScore += 1;
            }
            if(res.data()["answers6"] == answers[5]) {
                innerScore += 1;
            }
            if(res.data()["answers7"] == answers[6]) {
                innerScore += 1;
            }
            if(res.data()["answers8"] == answers[7]) {
                innerScore += 1;
            }
            if(res.data()["answers9"] == answers[8]) {
                innerScore += 1;
            }
            if(res.data()["answers10"] == answers[9]) {
                innerScore += 1;
            }
            this.setState({
                score: innerScore,
                user: res.data().username
            });
        });
    }

    render() {
        return(
            <div className="main-report">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Paper className="music-card">
                            <h1>Reporte de {this.state.user}</h1>
                            <h3>Score: {this.state.score} de 10</h3>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}