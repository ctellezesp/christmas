import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import firebase from "./firebase";
import swal from 'sweetalert';


export default class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: []
        }
    }

    componentDidMount() {
        firebase.db.collection("participants").orderBy("score", "desc").get()
        .then(res => {
            this.setState({
                datos: res.docs
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <div className="tabla-main">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Paper className="music-card">
                        <TableContainer>
                                <Table style={{width: "100%"}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Nombre</TableCell>
                                            <TableCell align="left">Score</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.datos.map((person,index) => (
                                            <TableRow key={index}>
                                                <TableCell align="left">{person.data().username}</TableCell>
                                                <TableCell align="left">{person.data().score}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}