import * as React from "react";
import styles from "./Login.module.scss";
import stylesGlobal from "../../../Global.module.scss";
import { ILoginProps } from "./ILoginProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FiLogIn } from "react-icons/fi";
import { sp, Web, IWeb } from "@pnp/sp/presets/all";
import { Link } from "office-ui-fabric-react/lib/Link";
import * as strings from "LoginWebPartStrings";

export default class Login extends React.Component<ILoginProps, {}> {
  public constructor(props: ILoginProps) {
    super(props);
    this.state = {
      id: strings,
    };
  }

  public render(): React.ReactElement<ILoginProps> {
    async function handleLogin(e) {
      e.preventDefault();
      let web = Web(this.props.web);

      try {
        let items = web.lists.getByTitle("Usuario").items.select("*");

        console.log(items);
      } catch (err) {
        console.log(err);
      }
    }

    return (
      <div>
        <div className={styles["logon-container"]}>
          <section className={styles.form}>
            <img src={require("./assets/logo.svg")} alt="Be The Hero" />
            <form onSubmit={handleLogin}>
              <h1>Faça seu Logon</h1>
              <input
                placeholder="Sua ID"
                value={this.props.id}
                onChange={(e) => this.setState({ id: e.currentTarget.value })}
              />
              <button className={stylesGlobal.button} type="submit">
                Entrar
              </button>
              <a className={stylesGlobal["back-link"]} href="/Login/123">
                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
              </a>
            </form>
          </section>
          <img src={require("./assets/heroes.png")} alt="Heroes" />
        </div>
      </div>
    );
  }
}
