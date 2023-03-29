import React from 'react'
import {
  Typography,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  MenuItem,
  Hidden,
} from '@material-ui/core'
import { Alert, AlertTitle, Snackbar } from '@mui/material'
import { useStyles } from '../styles/forms/ContactForm.styles'
import { checkPreviousDate } from '../../utils'
import axios from 'axios'

const formFieldInputs = [
  {
    id: '1001',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    size: 'small',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '45%',
    },
  },
  {
    id: '1002',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    InputLabelProps: {
      shrink: true,
    },
    size: 'small',
    style: {
      width: '46%',
    },
  },
  {
    id: '1003',
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'text',
    placeholder: '( ___ ) - ___ - ____',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    size: 'small',
    InputLabelProps: {
      shrink: true,
    },
    style: {
      width: '45%',
    },
  },
  {
    id: '1004',
    name: 'email',
    label: 'Email',
    type: 'email',
    variant: 'outlined',
    helperText: ' ',
    required: true,
    InputLabelProps: {
      shrink: true,
    },
    size: 'small',
    style: {
      width: '46%',
    },
  },
  {
    id: '1005',
    name: 'companyName',
    label: 'Company Name or URL',
    type: 'text',
    variant: 'outlined',
    helperText: ' ',
    InputLabelProps: {
      shrink: true,
    },
    required: true,
    fullWidth: true,
  },
  {
    id: '1007',
    name: 'message',
    label: 'How can we help you?',
    variant: 'outlined',
    helperText: ' ',
    InputLabelProps: {
      shrink: true,
    },
    required: true,
    multiline: true,
    rowsMax: 4,
    fullWidth: true,
  },
  {
    id: '1008',
    name: 'startDate',
    variant: 'outlined',
    label: 'Project Start Date',
    required: false,
    fullWidth: true,
    type: 'date',
    InputLabelProps: {
      shrink: true,
    },
    inputProps: {
      min: new Date().toISOString().split('T')[0],
    },
  },
  {
    id: '1009',
    name: 'whereDidYouHearAboutUs',
    label: 'How did you hear about us?',
    variant: 'outlined',
    helperText: ' ',
    InputLabelProps: {
      shrink: true,
    },
    required: false,
    fullWidth: true,
    select: true,
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

function ContactForm(props) {
  const classes = useStyles(props)
  const [error, setError] = React.useState(false)
  const [alert, setAlert] = React.useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false)
  const [value, setValue] = React.useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    message: '',
    startDate: '',
    whereDidYouHearAboutUs: '',
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const phoneCheck = async (phone) => {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/
    if (phone.trim().match(phoneRegex)) {
      const myHeaders = new Headers()
      myHeaders.append('apikey', 'GIB3A34mUj4lMeoT38zEpKyrTOV0K4OA')
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders,
      }
      try {
        const response = await fetch(
          `https://api.apilayer.com/number_verification/validate?number=${phone}`,
          requestOptions
        )
        const data = await response.json()
        console.log(data, 'data in phoneCheck APi')
        return data.valid
      } catch (error) {
        console.error(error)
        return false
      }
    }

    return false
  }

  const emailCheck = async (email) => {
    const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63})$/

    // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

    if (email.trim().match(emailRegex)) {
      const myHeaders = new Headers()
      myHeaders.append('apikey', 'GIB3A34mUj4lMeoT38zEpKyrTOV0K4OA')

      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders,
      }
      try {
        const response = await fetch(
          `https://api.apilayer.com/email_verification/check?email=${email}`,
          requestOptions
        )
        const data = await response.json()
        console.log(data, 'data in emailCheck API')
        console.log(data.smtp_check, 'data.smtp_check')
        return data.smtp_check
      } catch (error) {
        console.error(error)
        return false
      }
    }

    return false
  }

  let errors = {}
  const validate = () => {
    const nameRegex = '^[a-zA-Z]{2,20}$'

    errors = {}
    errors.firstName = value.firstName.trim().match(nameRegex) ? '' : 'Please enter your first name'
    errors.lastName = value.lastName.trim().match(nameRegex) ? '' : 'Please enter your last name'
    errors.companyName = value.companyName.trim() ? '' : 'Please enter company name or url'
    errors.message = value.message ? '' : 'Please let us know how we can help you'
    errors.startDate = checkPreviousDate(value.startDate)
      ? ''
      : 'Please enter a start date for your project'
    errors.whereDidYouHearAboutUs = value.whereDidYouHearAboutUs ? '' : 'Please select a source'
    setError({ ...errors })
    return Object.values(errors).every((errValues) => errValues === '')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsButtonDisabled(true)

    const data = new FormData(e.target)
    data.append('timeStamp', new Date())
    console.log(Object.fromEntries(data))

    const simpleData = Object.fromEntries(data)

    const [phoneIsValid, emailIsValid] = await Promise.all([
      phoneCheck(simpleData.phoneNumber),
      emailCheck(simpleData.email),
    ])

    if (!validate()) {
      setIsButtonDisabled(false)
      setError({
        ...errors,
        phoneNumber: 'Please enter valid phone number',
        email: 'Please enter valid email',
      })
      return
    }
    if (validate() && phoneIsValid && emailIsValid) {
      setError(false)
      setValue({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        message: '',
        startDate: '',
        whereDidYouHearAboutUs: '',
      })
      try {
        axios
          .post('/api/form', simpleData)
          .then((res) => {
            console.log(res, 'data is here')
            setAlert(true)
            setIsButtonDisabled(false)
          })
          .catch((err) => {
            console.log(err)
            setIsButtonDisabled(false)
          })
      } catch (error) {
        console.log(error)
        setIsButtonDisabled(false)
      }
    } else if (!phoneIsValid && !emailIsValid) {
      setError({
        phoneNumber: 'Please enter valid phone number',
        email: 'Please enter valid email',
      })
      setIsButtonDisabled(false)
    } else if (!emailIsValid) {
      setError({
        email: 'Please enter valid email',
      })
      setIsButtonDisabled(false)
    } else if (!phoneIsValid) {
      setError({
        phoneNumber: 'Please enter valid phone number',
      })
      setIsButtonDisabled(false)
    } else {
      setError({
        phoneNumber: 'Please enter valid phone number',
        // email: 'Please enter valid email',
      })
      setIsButtonDisabled(false)
    }
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
            className={classes.leftSideInfoWrapper}
            item
            xl={6}
            lg={5}
            md={10}
            xs={12}
          >
            <Typography variant="h1" className={classes.infoHeading}>
              Need to get in Touch?
            </Typography>
            <Typography variant="h6" className={classes.infoSubTitle}>
              Send Us A Message!!!
            </Typography>
            <Typography variant="body1" className={classes.infoParagraph}>
              Whether you have a question, comment, or simply want to say hello, we're all ears.
              <br />
              <br />
              Don't hesitate to send us a message using the contact form. Our team of experts is
              always ready to assist you in any way we can. We pride ourselves in giving top-notch
              costumer service and will do everything we can to ensure your complete satisfaction.
              <br />
              <br />
              So go ahead, drop us a line! We cant wait to hear from you and see how we can help you
              achieve your software development goals.
            </Typography>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={3} className={classes.formPaper}>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                {!alert && error && (
                  <Snackbar
                    open={Boolean(error)}
                    autoHideDuration={6000}
                    onClose={() => setError(Boolean(false))}
                  >
                    <Alert
                      onClose={() => setError(Boolean(false))}
                      variant="filled"
                      severity="error"
                    >
                      <AlertTitle>Error</AlertTitle>
                      {`You are missing ${
                        Object.values(error).filter((err) => err !== '').length
                      } ${
                        Object.values(error).filter((err) => err !== '').length > 1
                          ? 'fields! Please fill them out.'
                          : 'field! Please fill it out.'
                      }`}
                    </Alert>
                  </Snackbar>
                )}
                <div>
                  <Hidden smDown>
                    {alert && (
                      <Alert
                        onClose={() => setAlert(Boolean(false))}
                        severity="success"
                        className={classes.successAlert}
                      >
                        <AlertTitle>Success</AlertTitle>
                        Your form has been sent Successfully!
                        <strong>Thank you!</strong>
                      </Alert>
                    )}
                  </Hidden>
                  <Hidden mdUp>
                    {alert && (
                      <Snackbar
                        open={Boolean(alert)}
                        autoHideDuration={6000}
                        onClose={() => setAlert(Boolean(false))}
                      >
                        <Alert onClose={() => setAlert(Boolean(false))} severity="success">
                          <AlertTitle>Success</AlertTitle>
                          Your form has been sent Successfully!
                          <strong>Thank you!</strong>
                        </Alert>
                      </Snackbar>
                    )}
                  </Hidden>
                  <Grid container direction="row" justify="center" alignItems="center">
                    {formFieldInputs.map((values) => (
                      <TextField
                        key={values.id}
                        {...values}
                        error={!!error[values.name]}
                        helperText={error[values.name] || ' '}
                        onChange={handleChange}
                        value={value[values.name]}
                        className={classes.textField}
                        autoFocus={values.name === 'firstName'}
                      >
                        {selectInputs.map((value) => (
                          <MenuItem key={value.label} {...value}>
                            {value.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    ))}
                  </Grid>
                </div>
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                  id="submit"
                  disabled={!!(alert || error || isButtonDisabled)}
                  aria-label="Submit Form"
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
