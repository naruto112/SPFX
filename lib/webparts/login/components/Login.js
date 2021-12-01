var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import styles from "./Login.module.scss";
import stylesGlobal from "../../../Global.module.scss";
import { FiLogIn } from "react-icons/fi";
import * as strings from "LoginWebPartStrings";
import { Formik } from "formik";
// import * as Yup from "yup";
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            id: strings,
        };
        return _this;
    }
    Login.prototype.render = function () {
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
        return (React.createElement("div", null,
            React.createElement("div", { className: styles["logon-container"] },
                React.createElement("section", { className: styles.form },
                    React.createElement("img", { src: require("./assets/logo.svg"), alt: "Be The Hero" }),
                    React.createElement(Formik, { initialValues: {
                            id: "",
                        }, 
                        // validationSchema={SignupSchema}
                        validate: function (values) {
                            var errors = { id: "" };
                            if (!values.id) {
                                errors.id = "*Campo obrigatório";
                                return errors;
                            }
                        }, onSubmit: handleLogin }, function (_a) {
                        var values = _a.values, errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, isSubmitting = _a.isSubmitting;
                        return (React.createElement("form", { onSubmit: handleSubmit },
                            React.createElement("h1", null, "Fa\u00E7a seu Logon"),
                            React.createElement("input", { className: errors.id && touched.id && stylesGlobal["input-error"], name: "id", placeholder: "Sua ID", value: values.id, onChange: handleChange }),
                            errors.id && touched.id && (React.createElement("label", { className: errors.id && touched.id && stylesGlobal["label-error"] }, errors.id)),
                            React.createElement("button", { className: stylesGlobal.button, type: "submit", disabled: isSubmitting }, "Entrar"),
                            React.createElement("a", { className: stylesGlobal["back-link"], href: "/Login/123" },
                                React.createElement(FiLogIn, { size: 16, color: "#E02041" }),
                                "N\u00E3o tenho cadastro")));
                    })),
                React.createElement("img", { src: require("./assets/heroes.png"), alt: "Heroes" }))));
    };
    return Login;
}(React.Component));
export default Login;
//# sourceMappingURL=Login.js.map