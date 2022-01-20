import * as React from 'react'
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Login = (props) => {

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
          <Typography variant="h5">{props.title}</Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="メールアドレス"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  type="password"
                  label="パスワード"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  ログイン
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link to="/signup">新規登録はこちら</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  )
}
