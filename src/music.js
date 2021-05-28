import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import StopIcon from '@material-ui/icons/Stop';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './App.css';

export default class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: '',
            showVideo: 'none',
            indexVideo: 0,
            videos: [
                'https://www.youtube.com/embed/M2b6O30TtBo?autoplay=1&amp;start=51',
                'https://www.youtube.com/embed/aAkMkVFwAoo?autoplay=1&amp;start=10',
                'https://www.youtube.com/embed/nlR0MkrRklg?autoplay=1&amp;start=9',
                'https://www.youtube.com/embed/QaXhVryxVBk?autoplay=1&amp;start=28',
                'https://www.youtube.com/embed/sADUuDB2MzI?autoplay=1&amp;start=3',
                'https://www.youtube.com/embed/1rT_HOyA72g?autoplay=1&amp;start=27',
                'https://www.youtube.com/embed/h81UOjlFmMs?autoplay=1&amp;start=60',
                'https://www.youtube.com/embed/Ge4AKbnr6ME?autoplay=1&amp;start=13',
                'https://www.youtube.com/embed/zCW9jdxUrhc?autoplay=1&amp;start=1',
                'https://www.youtube.com/embed/zABLecsR5UE?autoplay=1&amp;start=1',
            ]
        }
    }

    setVideo = (index) => {
        this.setState({
            selectedVideo: this.state.videos[index]
        });
    }

    nextVideo = () => {
        this.setState({
            selectedVideo: '',
            indexVideo: this.state.indexVideo + 1
        })
    }

    prevVideo = () => {
        this.setState({
            selectedVideo: '',
            indexVideo: this.state.indexVideo - 1
        })
    }

    clear = () => {
        this.setState({
            selectedVideo: ''
        });
    }

    show = () => {
        this.setState({
            showVideo: 'flex'
        });
    }

    hide = () => {
        this.setState({
            showVideo: 'none'
        });
    }

    render() {
        return(
            <div className="main">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} md={8} spacing={1}>
                        <Paper className="music-card">
                            <h2>Adivina la canción</h2>
                            <h3>Canción {this.state.indexVideo + 1}</h3>
                            <iframe style={{display: this.state.showVideo}} width="640" height="360" src={this.state.selectedVideo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            {this.state.showVideo === 'none'  && <Button
                                variant="contained"
                                color="primary"
                                startIcon={<VisibilityIcon />}
                                onClick={this.show}
                            >
                                Mostrar
                            </Button>}
                            {this.state.showVideo === 'flex' && <Button
                                variant="contained"
                                color="primary"
                                startIcon={<VisibilityOffIcon />}
                                onClick={this.hide}
                            >
                                Ocultar
                            </Button>}
                            <div className="btn-music">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<PlayCircleFilledIcon />}
                                    onClick={() => this.setVideo(this.state.indexVideo)}
                                    disabled={this.state.selectedVideo !== ''}
                                >
                                    Reproducir
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<StopIcon />}
                                    onClick={this.clear}
                                    disabled={this.state.selectedVideo === ''}
                                >
                                    Stop
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<ArrowBackIcon />}
                                    onClick={this.prevVideo}
                                    disabled={this.state.indexVideo === 0}
                                >
                                    Anterior
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<ArrowForwardIcon />}
                                    onClick={this.nextVideo}
                                    disabled={this.state.indexVideo === (this.state.videos.length - 1)}
                                >
                                    Siguiente
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}