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
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'


export const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "ユーザー名は3~15文字で指定してください。")
        .max(15, "ユーザー名は3~15文字で指定してください。")
        .required("必須事項です。"),
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
      const signupUrl = `https://api-for-missions-and-railways.herokuapp.com/users`
      fetch(signupUrl, {
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
                  id="name"
                  label="ユーザー名"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </Grid>
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
