import * as React from 'react'
import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  Container,
  CssBaseline,
  Grid,
  Typography
} from '@material-ui/core'
import axios from 'axios';

const baseUrl = `https://api-for-missions-and-railways.herokuapp.com`
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDQ1NjE0MDMsImlhdCI6IjIwMjItMDItMTBUMDY6MzY6NDMuODA5MDg5MzQ5WiIsInN1YiI6IjU0NTQ2NTU3MzU0IiwidXNlcl9pZCI6IjAwMzBiNGFmLTNkYzEtNDk0NS1hZDI3LWZjYWQ2YzU5NjhhYSJ9.75c-e1p4lDDUUbbUpWQniEN1B0JQqfp6rQlkOVt_DDM"

const authAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorizaton: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  },
})

export const Home = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(baseUrl + `/public/books`)
      .then(data => {
        console.log(data)
        setData(data.id)
      })
  }, [])

  return (
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 6,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card>{data}</Card>
          <Typography variant="h5">{props.title}</Typography>
          <Grid container spacing={2}>
          </Grid>
        </Box>
      </Container>
    </>
  )
};
