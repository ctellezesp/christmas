import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import html2canvas from 'html2canvas';
import './App.css';

export default class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      message: '',
      selectedImg: {
        img: 'https://www.bybloggers.net/wp-content/uploads/2020/08/60-awesome-free-printable-christmas-border-clipart-with-xmas-border-template-free.jpg',
        top: '200px',
        padding: '0 50px',
        to: 'left',
        from: 'left'
      },
      imgTemplate: [
        'https://www.bybloggers.net/wp-content/uploads/2020/08/60-awesome-free-printable-christmas-border-clipart-with-xmas-border-template-free.jpg',
        'https://image.freepik.com/foto-gratis/fondo-navidad-bolas-espacio-abajo_23-2147722773.jpg',
        'https://images.template.net/wp-content/uploads/2015/12/01182910/Christmas-Stationery-Template-Papers-Download.jpg?width=600',
        'https://printabletemplates.com/wp-content/uploads/2018/01/christmas-borders-25-580x753.jpg',
        'https://i.pinimg.com/564x/45/13/87/451387aa1e3b2007c2ac342676d99acf.jpg',
        'https://i.pinimg.com/564x/6b/ea/9a/6bea9a9a39928b23a1fb443b82f1df07.jpg',
        'https://i.pinimg.com/564x/1f/a9/91/1fa99125090dbdb2de616ac5cfc429eb.jpg',
        'https://i.pinimg.com/564x/2b/ca/ba/2bcaba6f37c7859d7cd6d132c20a2026.jpg',
        'https://templatelab.com/wp-content/uploads/2020/02/christmas-letter-template-13.jpg'
      ],
      images: [
        {
          img: 'https://www.bybloggers.net/wp-content/uploads/2020/08/60-awesome-free-printable-christmas-border-clipart-with-xmas-border-template-free.jpg',
          top: '200px',
          padding: '0 50px',
          to: 'left',
          from: 'left'
        },
        {
          img: 'https://image.freepik.com/foto-gratis/fondo-navidad-bolas-espacio-abajo_23-2147722773.jpg',
          top: '300px',
          padding: '0 50px',
          to: 'left',
          from: 'left'
        },
        {
          img: 'https://images.template.net/wp-content/uploads/2015/12/01182910/Christmas-Stationery-Template-Papers-Download.jpg?width=600',
          top: '170px',
          padding: '0 70px',
          to: 'left',
          from: 'left'
        },
        {
          img: 'https://printabletemplates.com/wp-content/uploads/2018/01/christmas-borders-25-580x753.jpg',
          top: '110px',
          padding: '0 100px',
          to: 'left',
          from: 'right'
        },
        {
          img: 'https://i.pinimg.com/564x/45/13/87/451387aa1e3b2007c2ac342676d99acf.jpg',
          top: '110px',
          padding: '0 100px',
          to: 'left',
          from: 'right'
        },
        {
          img: 'https://i.pinimg.com/564x/6b/ea/9a/6bea9a9a39928b23a1fb443b82f1df07.jpg',
          top: '110px',
          padding: '0 100px',
          to: 'center',
          from: 'center'
        },
        {
          img: 'https://templatelab.com/wp-content/uploads/2020/02/christmas-letter-template-13.jpg',
          top: '225px',
          padding: '0 130px',
          to: 'left',
          from: 'right'
        },
        {
          img: 'https://i.pinimg.com/564x/8e/24/8e/8e248e57faec9c86157bd100c5194632.jpg',
          top: '260px',
          padding: '0 130px',
          to: 'left',
          from: 'right'
        },
        {
          img: 'https://i.pinimg.com/564x/a7/9f/a1/a79fa1053d5ac315cfd58b6983ae2b97.jpg',
          top: '120px',
          padding: '0 130px',
          to: 'left',
          from: 'center'
        },
        {
          img: 'https://i.pinimg.com/564x/1f/a9/91/1fa99125090dbdb2de616ac5cfc429eb.jpg',
          top: '60px',
          padding: '0px 20px 0px 260px',
          to: 'left',
          from: 'right',
          height: '70vh'
        },
        {
          img: 'https://i.pinimg.com/564x/2b/ca/ba/2bcaba6f37c7859d7cd6d132c20a2026.jpg',
          top: '60px',
          padding: '0px 20px 0px 260px',
          to: 'left',
          from: 'right',
          height: '70vh'
        }
      ]
      
    }
  }

  changeFrom = (event) => {
    this.setState({
      from: event.target.value
    });
  }

  changeTo = (event) => {
    this.setState({
      to: event.target.value
    });
  }

  changeMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  changeBG = (img) => {
    this.setState({
      selectedImg: img
    });
  }

  takeScreen = () => {
    html2canvas(document.getElementById('letter')).then(canvas => {
      canvas.toDataURL();
      console.log(canvas.toDataURL('image/png'));
    });
  }

  render() {
    return(
      <div className="main">
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
          <Grid item xs={12} md={6}>
            <Paper className="input-card">
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} style={{marginTop: '10px'}}>
                  <TextField fullWidth id="outlined-basic" label="From" variant="outlined" onChange={this.changeFrom} />
                </Grid>
                <Grid item xs={12} style={{marginTop: '10px'}}>
                  <TextField fullWidth id="outlined-basic" label="To" variant="outlined" onChange={this.changeTo} />
                </Grid>
                <Grid item xs={12} style={{marginTop: '10px'}}>
                  <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue="Type your message here"
                    variant="outlined"
                    onChange={this.changeMessage}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
              <div className="scrollable">
              {this.state.images.map((img, index) => {
                return (
                  <img className="img-scroll" key={index} src={img.img} onClick={() => this.changeBG(img)} alt="Image" />
                );
              })}
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} id="letter">
            <div className="img-letter" style={{backgroundImage: `url(${this.state.selectedImg.img})`}}>
              <span style={{marginTop: this.state.selectedImg.top, textAlign: this.state.selectedImg.to, padding: this.state.selectedImg.padding}}><b>{this.state.to}</b></span>
              <span style={{height: this.state.selectedImg.height ? this.state.selectedImg.height: '50vh', padding: this.state.selectedImg.padding, overflowWrap: 'break-word'}}>{this.state.message}</span>
              <span style={{padding: this.state.selectedImg.padding, textAlign: this.state.selectedImg.from}}><b>{this.state.from}</b></span>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}