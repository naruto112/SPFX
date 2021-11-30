import * as React from "react";
import styles from "./Login.module.scss";
import stylesGlobal from "../../../Global.module.scss";
import { ILoginProps } from "./ILoginProps";
import { FiLogIn } from "react-icons/fi";
import { sp, Web, IWeb } from "@pnp/sp/presets/all";
import * as strings from "LoginWebPartStrings";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

export default class Login extends React.Component<ILoginProps, {}> {
  public constructor(props: ILoginProps) {
    super(props);
    this.state = {
      id: strings,
    };
  }

  public render(): React.ReactElement<ILoginProps> {
    // const SignupSchema = Yup.object().shape({
    //   id: Yup.string()
    //     .min(2, "Too Short!")
    //     .max(50, "Too Long!")
    //     .required("Required"),
    // });

    function handleLogin() {
      alert("entrou");
      // e.preventDefault();
      // let web = Web(this.props.web);

      // try {
      //   let items = web.lists.getByTitle("Usuario").items.select("*");

      //   console.log(items);
      // } catch (err) {
      //   console.log(err);
      // }
    }

    return (
      <div>
        <div className={styles["logon-container"]}>
          <section className={styles.form}>
            <img src={require("./assets/logo.svg")} alt="Be The Hero" />
            <Formik
              initialValues={{
                id: "",
              }}
              // validationSchema={SignupSchema}
              validate={(values) => {
                const errors = { id: "" };
                if (!values.id) {
                  errors.id = "Required";
                }
                return errors;
              }}
              onSubmit={handleLogin}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <h1>Faça seu Logon</h1>
                    <input
                      name="id"
                      placeholder="Sua ID"
                      value={values.id}
                      onChange={handleChange}
                    />
                    {errors.id && touched.id && errors.id}
                    <button
                      className={stylesGlobal.button}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Entrar
                    </button>
                    <a className={stylesGlobal["back-link"]} href="/Login/123">
                      <FiLogIn size={16} color="#E02041" />
                      Não tenho cadastro
                    </a>
                  </form>
                );
              }}
            </Formik>
          </section>
          <img src={require("./assets/heroes.png")} alt="Heroes" />
        </div>
      </div>
    );
  }
}
