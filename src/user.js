import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            answers1: '',
            answers2: '',
            answers3: '',
            answers4: '',
            answers5: '',
            answers6: '',
            answers7: '',
            answers8: '',
            answers9: '',
            answers10: '',
            score: 0
        }
    }

    setUser = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    setSong1 = (event) => {
        this.setState({
            answers1: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong2 = (event) => {
        this.setState({
            answers2: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong3 = (event) => {
        this.setState({
            answers3: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong4 = (event) => {
        this.setState({
            answers4: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong5 = (event) => {
        this.setState({
            answers5: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong6 = (event) => {
        this.setState({
            answers6: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong7 = (event) => {
        this.setState({
            answers7: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong8 = (event) => {
        this.setState({
            answers8: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong9 = (event) => {
        this.setState({
            answers9: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong9 = (event) => {
        this.setState({
            answers9: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    setSong10 = (event) => {
        this.setState({
            answers10: event.target.value.toString().toLowerCase().replace(/ /g, "")
        });
    }

    save = () => {
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
        let innerScore = 0;
        if(this.state["answers1"] === answers[0]) {
            innerScore += 1;
        }
        if(this.state["answers2"] === answers[1]) {
            innerScore += 1;
        }
        if(this.state["answers3"] === answers[2]) {
            innerScore += 1;
        }
        if(this.state["answers4"] === answers[3]) {
            innerScore += 1;
        }
        if(this.state["answers5"] === answers[4]) {
            innerScore += 1;
        }
        if(this.state["answers6"] === answers[5]) {
            innerScore += 1;
        }
        if(this.state["answers7"] === answers[6]) {
            innerScore += 1;
        }
        if(this.state["answers8"] === answers[7]) {
            innerScore += 1;
        }
        if(this.state["answers9"] === answers[8]) {
            innerScore += 1;
        }
        if(this.state["answers10"] === answers[9]) {
            innerScore += 1;
        }
        let toSave = {
            ...this.state,
            score: innerScore
        }
        console.log('saving...');
        console.log(toSave);
        firebase.db.collection("participants").add(toSave)
        .then(docRef => {
            console.log('response from firebase: ', docRef.id);
            swal("Datos agredados", "Mucha suerte", "success")
            .then(()=>{
                this.props.history.push(`/report/${docRef.id}`);
            });
        })
        .catch(err => {
            console.log(err);
            swal("Error", "Por favor, revisa tus datos", "error");
        })
    }
    render() {
        return(
            <div className="main-users">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} md={8} lg={6} >
                        <Paper className="music-card">
                            <h1>Adivina la Canción</h1>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Nombre" variant="outlined" onChange={this.setUser} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 1" variant="outlined" onChange={this.setSong1} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 2" variant="outlined" onChange={this.setSong2} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 3" variant="outlined" onChange={this.setSong3} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 4" variant="outlined" onChange={this.setSong4} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 5" variant="outlined" onChange={this.setSong5} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 6" variant="outlined" onChange={this.setSong6} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 7" variant="outlined" onChange={this.setSong7} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 8" variant="outlined" onChange={this.setSong8} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 9" variant="outlined" onChange={this.setSong9} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth style={{margin: '5px 0'}} id="outlined-basic" label="Canción 10" variant="outlined" onChange={this.setSong10} />
                                </Grid>
                                <Button variant="outlined" color="primary" onClick={this.save}>
                                    Enviar
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}