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


class SubmissionForm extends React.Component {

  state = {
    columnOne: '',
    columnTwo: '',
    columnThree: '',
    columnFour: '',
    columnFive: '',
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
              label={'Column One'}
              name={'columnOne'}
              className={classes.textField}
              value={this.state.columnOne}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              label={'Column Two'}
              name={'columnTwo'}
              className={classes.textField}
              value={this.state.columnTwo}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              label={'Column Three'}
              name={'columnThree'}
              className={classes.textField}
              value={this.state.columnThree}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              label={'Column Four'}
              name={'columnFour'}
              className={classes.textField}
              value={this.state.columnFour}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              label={'Column Five'}
              name={'columnFive'}
              className={classes.textField}
              value={this.state.columnFive}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              label={'Column Six'}
              name={'columnSix'}
              className={classes.textField}
              value={this.state.columnSix}
              onChange={this.handleChange}
              margin="normal"
            />

            <Button variant="contained"
                    color="primary"
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


export default withStyles(styles)(SubmissionForm)

