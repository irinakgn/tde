import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Paper, TextField, FormControl, Button} from '@material-ui/core';

const styles = theme => ({
  container: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  paper: {
    width: 800,
    margin: 16,
    padding: 16
  }
});


class LogIn extends React.Component {

  state = {
   Username: '',
   Password: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    return fetch('http://localhost:5000/api/get-excel-file', {
      method: 'POST',
      headers: {
        'Accept': 'application/json text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((r) => {
      return r.blob()
    }).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "filename.xlsx";
      a.click()
    })


  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <FormControl
            component="fieldset"
            className={classes.formControl}

            noValidate
            autoComplete="off">

            <TextField
              label={'Username'}
              name={'username'}
              className={classes.textField}
              value={this.state.username}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              label={'Password'}
              name={'password'}
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange}
              margin="normal"

            />

            <Button variant="contained"
                    color="secondary"
                    type={'submit'}
                    className={classes.button}>
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}


export default withStyles(styles)(LogIn)