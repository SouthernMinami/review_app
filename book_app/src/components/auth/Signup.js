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

export const Signup = (props) => {

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
                  id="name"
                  label="ユーザー名"
                  fullWidth
                />
              </Grid>
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
                  新規登録
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link to="/login">登録済みの方：ログイン</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  )
}
