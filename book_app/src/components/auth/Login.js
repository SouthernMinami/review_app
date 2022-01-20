import * as React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
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
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("無効なメールアドレスです。")
        .required("必須事項です。"),
      password: Yup.string()
        .min(4, "パスワードは4〜20文字で指定してください。")
        .max(20, "パスワードは4~20文字で指定してください。")
        .matches(/^[a-zA-Z0-9]+$/, "記号はパスワードに使用できません。")
        .required("必須事項です。"),
    }),
    onSubmit: (values) => {
      const item = values
      const loginUrl = `https://api-for-missions-and-railways.herokuapp.com/signin`
      fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
      }).then(res => res.json())
        .then(data =>
          console.log(data.token)
        )
        .catch(err =>
          console.error(err.message)
        )
    }
  })

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
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="メールアドレス"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  type="password"
                  label="パスワード"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
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
