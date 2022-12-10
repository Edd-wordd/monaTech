import React from 'react'
import {
  Typography,
  Paper,
  Grid,
  Container,
  TextField,
  Radio,
  RadioGroup,
  Button,
  Select,
  FormLabel,
  MenuItem,
  FormControlLabel,
  FormControl,
  InputLabel,
} from '@material-ui/core'
import { useStyles } from '../styles/forms/ContactForm.styles'

const textInputs = [
  {
    id: '1001',
    name: 'firstName',
    label: 'First Name',
    variant: 'outlined',
    required: true,
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    id: '1002',
    name: 'lastName',
    label: 'Last Name',
    variant: 'outlined',
    required: true,
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    id: '1003',
    name: 'phoneNumber',
    label: 'Phone Number',
    variant: 'outlined',
    required: true,
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    id: '1004',
    name: 'email',
    label: 'Email',
    variant: 'outlined',
    required: true,
    size: 'small',
    style: {
      width: '45%',
    },
  },
  {
    id: '1005',
    name: 'companyName',
    label: 'Company Name',
    variant: 'outlined',
    required: true,
    autoComplete: 'current-password',
    fullWidth: true,
  },
  {
    id: '1006',
    name: 'companyURL',
    label: 'Company URL',
    variant: 'outlined',
    required: false,
    autoComplete: 'current-password',
    fullWidth: true,
  },
  {
    id: '1007',
    name: 'message',
    label: 'How Can We Help You?',
    variant: 'outlined',
    required: true,
    multiline: true,
    rowsMax: 4,
    fullWidth: true,
  },
  {
    id: '1008',
    name: 'timeFrame',
    variant: 'outlined',
    required: false,
    fullWidth: true,
    type: 'date',
  },
]

const selectInputs = [
  {
    value: 'google search',
    label: 'Google Search',
  },
  {
    value: 'repeat client',
    label: 'Repeat Client',
  },
  {
    value: 'referral',
    label: 'Referral',
  },
  {
    value: 'other',
    label: 'Other',
  },
]

const radioInputs = [
  {
    value: 'one week',
    label: 'One Week',
  },
  {
    value: 'one month',
    label: 'One Month',
  },
  {
    value: 'not sure',
    label: 'Not Sure',
  },
  {
    value: 'price shopping',
    label: 'Price Shopping',
  },
]
function ContactForm(props) {
  const classes = useStyles(props)
  const [error, setError] = React.useState(false)
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    companyUrl: '',
    message: '',
    timeFrame: '',
    startDate: '',
    source: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
    if (validate()) {
      console.log('form is valid')
    }
  }
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  // TODO: validate each text field and select field. Will need to add type to textInputs as well.
  const validate = () => {
    let errors = {}
    errors.firstName = values.firstName ? '' : 'Please enter your first name'
    errors.lastName = values.lastName ? '' : 'Please enter your last name'
    errors.phoneNumber = values.phoneNumber ? '' : 'Please enter your phone number'
    errors.email = values.email ? '' : 'Please enter valid email'
    errors.companyName = values.companyName ? '' : 'Please enter your company name'
    errors.message = values.message ? '' : 'Please enter your message'
    errors.source = values.source ? '' : 'Please select a source'
    errors.startDate = values.startDate ? '' : 'Please select a start date'
    setError({ ...errors })
    return Object.values(errors).every((errValues) => errValues === '')
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container direction="row" justify="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            className={classes.info}
            item
            xl={6}
            lg={5}
            md={10}
            xs={12}
          >
            <Typography variant="h1" className={classes.heading}>
              Need to get in Touch?
            </Typography>
            <Typography variant="h6" className={classes.message}>
              Send Us A Message
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              Please complete the form below, click here to Book an Appointment, give us a call or
              click the message box on the lower right! Either way, we look forward to talking with
              you!
            </Typography>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={3} className={classes.formPaper}>
              <Typography className={classes.formHeader}>
                Please fill this form out! Let us know what we can do for you!
              </Typography>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                  <Grid container direction="row" justify="center" alignItems="center">
                    {textInputs.map((value, index) => (
                      <TextField
                        key={value.id}
                        {...value}
                        error={!!error[value.name]}
                        helperText={error[value.name]}
                        onChange={handleChange}
                      />
                    ))}
                  </Grid>
                  <div className={classes.selectInputWrapper}>
                    <InputLabel id="select-label">How did you hear about us?*</InputLabel>
                    <Select
                      required
                      variant="outlined"
                      labelId="select-label"
                      id="user-select"
                      name="source"
                      className={classes.selectInput}
                      value={values.source}
                      onChange={handleChange}
                    >
                      {selectInputs.map((value, index) => (
                        <MenuItem key={index} {...value}>
                          {value.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>

                <FormControl component="fieldset" className={classes.radio}>
                  <FormLabel component="legend">
                    When are you wanting to start your project?
                  </FormLabel>
                  <RadioGroup
                    aria-label="start-date"
                    name="startDate"
                    value={values.startDate}
                    onChange={handleChange}
                  >
                    {radioInputs.map((value, index) => (
                      <FormControlLabel
                        key={index}
                        value={value.value}
                        control={<Radio />}
                        label={value.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  size="large"
                  variant="outlined"
                  aria-label="large outlined button"
                >
                  SUBMIT
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ContactForm
