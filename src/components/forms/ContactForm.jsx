import React from 'react'
import axios from 'axios'
import {
  Alert,
  AlertTitle,
  Snackbar,
  Typography,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  MenuItem,
  Hidden,
  Backdrop,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { formFieldInputs, selectInputs } from '../../data/contactFormData'
import { checkPreviousDate } from '../../utils'
import { useStyles } from '../styles/forms/ContactForm.styles'

function ContactForm(props) {
  const classes = useStyles(props)
  const [open, setOpen] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [alert, setAlert] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
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
    const formatedPhone = '+1' + phone
    // console.log(formatedPhone)
    if (formatedPhone.trim().match(phoneRegex)) {
      const myHeaders = new Headers()
      myHeaders.append('apikey', process.env.REACT_APP_PHONE_NUMBER_VERIFICATION_API_KEY)
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders,
      }
      try {
        const response = await fetch(
          `${process.env.REACT_APP_PHONE_NUMBER_VERIFICATION_API_URL}${formatedPhone}`,
          requestOptions
        )
        // console.log('Response:', response) // Add this line to log the response
        // console.log(process.env.REACT_APP_PHONE_NUMBER_VERIFICATION_API)

        const data = await response.json()
        // console.log(data, 'data in phoneCheck APi')
        return data.valid
      } catch (err) {
        // console.error(err)
        return false
      }
    }

    return false
  }

  const emailCheck = async (email) => {
    const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63})$/

    if (email.trim().match(emailRegex)) {
      const myHeaders = new Headers()
      myHeaders.append('apikey', process.env.REACT_APP_EMAIL_VERIFICATION_API_KEY)

      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders,
      }
      try {
        const response = await fetch(
          `${process.env.REACT_APP_EMAIL_VERIFICATION_API_URL}${email}`,
          requestOptions
        )

        const data = await response.json()
        // console.log(data, 'data in emailCheck API')
        // console.log(data.smtp_check, 'data.smtp_check')
        return data.smtp_check
      } catch (err) {
        // console.error(err)
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
    setIsLoading(true)
    setOpen(true)

    const data = new FormData(e.target)
    data.append('timeStamp', new Date())
    // console.log(Object.fromEntries(data))

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
      setOpen(false)
      setIsLoading(false)
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
      setOpen(false)
      setIsLoading(false)
      try {
        axios
          .post(' https://evbmecdl74.execute-api.us-west-1.amazonaws.com/dev/api/form', simpleData)
          .then((res) => {
            // console.log(res, 'data is here')
            setAlert(true)
            setIsButtonDisabled(false)
          })
          .catch((err) => {
            // console.log(err)
            setIsButtonDisabled(false)
          })
      } catch (error) {
        // console.log(error)
        setIsButtonDisabled(false)
      }
    } else if (!phoneIsValid && !emailIsValid) {
      setError({
        phoneNumber: 'Please enter valid phone number',
        email: 'Please enter valid email',
      })
      setOpen(false)
      setIsLoading(false)
      setIsButtonDisabled(false)
    } else if (!emailIsValid) {
      setError({
        email: 'Please enter valid email',
      })
      setIsButtonDisabled(false)
      setOpen(false)
      setIsLoading(false)
    } else if (!phoneIsValid) {
      setError({
        phoneNumber: 'Please enter valid phone number',
      })
      setIsButtonDisabled(false)
      setOpen(false)
      setIsLoading(false)
    } else {
      setError({
        phoneNumber: 'Please enter valid phone number',
      })
      setIsButtonDisabled(false)
      setOpen(false)
      setIsLoading(false)
    }
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container direction="row" justifyContent="center">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            className={classes.leftSideInfoWrapper}
            item
            xl={6}
            lg={5}
            md={10}
            xs={12}
          >
            <Typography variant="h2" className={classes.infoHeading}>
              Get in Touch with Our Experts
            </Typography>
            <Typography variant="h6" className={classes.infoSubTitle}>
              Reach Out for Any Questions or Support
            </Typography>
            <Typography variant="body1" className={classes.infoParagraph}>
              Our team is here to help you with any inquiries, concerns, or feedback you may have.
              Whether you're looking for assistance on a project, seeking expert advice, or just
              want to say hello, don't hesitate to reach out.
              <br />
              <br />
              Use our contact form to send us a message, and our team of specialists will be ready
              to provide the support you need. We pride ourselves on delivering exceptional customer
              service and are committed to ensuring your satisfaction.
              <br />
              <br />
              Contact us today! We look forward to hearing from you and discovering how we can help
              you achieve your software development objectives.
            </Typography>
          </Grid>
          {isLoading ? (
            <Backdrop open>
              <CircularProgress color="primary" />
            </Backdrop>
          ) : null}
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
                  <Grid container direction="row" justifyContent="center" alignItems="center">
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
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                  <Button
                    sx={{ margin: '1.5rem 0rem', padding: '.5rem 4rem' }}
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
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default ContactForm
