import React, { useState, useEffect, useRef, Suspense, lazy } from 'react'
import { Container, Typography, Grid, Paper, Zoom } from '@mui/material'
import Transition from 'react-transition-group/Transition'
import ButtonLink from '../buttons/ButtonLink'
import companyValues from '../../data/whoWeAreData'
import { WhoWeAreCards } from '../styles/sections/WhoWeAre.styles'
import Spinner from '../spinners/Spinner'

const SectionHeader = lazy(() => import('./SectionHeader'))

function WhoWeAre() {
  const [inProp, setInProp] = useState(false)

  const cardObserver = useRef(
    new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setInProp(true)
          observer.unobserve(entry.target)
        }
      },
      { root: null, threshold: 0.5 }
    )
  )

  useEffect(() => {
    const target = document.querySelector('#cards')
    if (target) {
      cardObserver.current.observe(target)
    }
    return () => cardObserver.current.disconnect()
  }, [])

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <SectionHeader
          title="Who We Are | Digital Innovation Team"
          subTitle="Bring your digital ideas to life!"
        />
      </Suspense>

      <Container maxWidth="lg">
        <Grid sx={{ margin: '3rem 0' }}>
          <Typography paragraph variant="body1" sx={{ lineHeight: '2rem' }}>
            Welcome to our world of digital innovation! As a team of skilled technologists and
            problem solvers, we're passionate about using technology to transform businesses and
            lives. We offer a range of services including web design, mobile app development, custom
            software solutions, and digital marketing. Our mission is to provide innovative
            solutions that meet the evolving needs of our clients, no matter how complex. With our
            creative and collaborative approach, we bring fresh perspectives to every project,
            delivering tailored solutions that exceed expectations. Let's embark on a journey of
            digital transformation together and bring your vision to life!
          </Typography>
        </Grid>
      </Container>
      <Container maxWidth="xl" id="cards">
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
          {companyValues.map((value) => (
            <Transition in={!!setInProp} timeout={1000} key={value.id}>
              {() => (
                <Zoom in={inProp} mountOnEnter unmountOnExit timeout={2000}>
                  <Paper variant="outlined" component={WhoWeAreCards}>
                    <Typography variant="subtitle1">
                      <b>{value.title}</b>
                    </Typography>
                    <Typography paragraph variant="body1" style={{ color: '#808080' }}>
                      {value.description}
                    </Typography>
                  </Paper>
                </Zoom>
              )}
            </Transition>
          ))}
        </Grid>
        <ButtonLink linkOne="/contact" btnOneText="Request a Free Quote | Contact Us Today" />
      </Container>
    </>
  )
}

export default WhoWeAre
