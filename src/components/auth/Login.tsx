import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

const Login: React.SFC = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es valido")
        .required("El email es requerido"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(8, "El numero de caracteres minimo es de 8"),
    }),
    onSubmit: (valores) => {
      dispatch(startLogin(valores.email, valores.password));
    },
  });

  return (
    <>
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Mis</b>Gastos
          </a>
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group has-feedback">
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Entrar
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
        </div>
        {/* /.login-box-body */}
      </div>
    </>
  );
};

export default Login;
// {
//   formik.touched.password && formik.errors.password ? (
//     <div className="callout callout-danger">
//       <h5 className="text-red">Error!</h5>
//       <p>{formik.errors.password}</p>
//     </div>
//   ) : null;
// }
