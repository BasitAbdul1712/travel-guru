import React from 'react';
import { Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const Calender = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const [selectedDates, setSelectedDates] = React.useState(new Date('2020-08-18T21:11:54'));

    const handleDateChanges = (date) => {
      setSelectedDates(date);
    };
   const styles = {
       display: 'flex',
   }
   
   const styles1 = {
    paddingRight: '15px'
}
    // const classes = useStyles();
    return (

<div style={styles}>
    <div style={styles1}>
    <MuiPickersUtilsProvider  utils={DateFnsUtils}>
        <Grid container >
            <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="From"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        </Grid>
     </MuiPickersUtilsProvider>
    </div>
    <div>
    <MuiPickersUtilsProvider  utils={DateFnsUtils}>
        <Grid container  >
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="To"
                format="MM/dd/yyyy"
                value={selectedDates}
                onChange={handleDateChanges}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
        </Grid>
     </MuiPickersUtilsProvider>
    </div>
            
    
</div>


     
    );
};

export default Calender;