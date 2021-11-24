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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import styles from "./Login.module.scss";
import stylesGlobal from "../../../Global.module.scss";
import { FiLogIn } from "react-icons/fi";
import { Web } from "@pnp/sp/presets/all";
import * as strings from "LoginWebPartStrings";
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
        var _this = this;
        function handleLogin(e) {
            return __awaiter(this, void 0, void 0, function () {
                var web, items;
                return __generator(this, function (_a) {
                    e.preventDefault();
                    web = Web(this.props.web);
                    try {
                        items = web.lists.getByTitle("Usuario").items.select("*");
                        console.log(items);
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return [2 /*return*/];
                });
            });
        }
        return (React.createElement("div", null,
            React.createElement("div", { className: styles["logon-container"] },
                React.createElement("section", { className: styles.form },
                    React.createElement("img", { src: require("./assets/logo.svg"), alt: "Be The Hero" }),
                    React.createElement("form", { onSubmit: handleLogin },
                        React.createElement("h1", null, "Fa\u00E7a seu Logon"),
                        React.createElement("input", { placeholder: "Sua ID", value: this.props.id, onChange: function (e) { return _this.setState({ id: e.currentTarget.value }); } }),
                        React.createElement("button", { className: stylesGlobal.button, type: "submit" }, "Entrar"),
                        React.createElement("a", { className: stylesGlobal["back-link"], href: "/Login/123" },
                            React.createElement(FiLogIn, { size: 16, color: "#E02041" }),
                            "N\u00E3o tenho cadastro"))),
                React.createElement("img", { src: require("./assets/heroes.png"), alt: "Heroes" }))));
    };
    return Login;
}(React.Component));
export default Login;
//# sourceMappingURL=Login.js.map