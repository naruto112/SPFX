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
import * as ReactDom from "react-dom";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import "./display.sharepoint.styles.css";
import * as strings from "LoginWebPartStrings";
import Login from "./components/Login";
var LoginWebPart = /** @class */ (function (_super) {
    __extends(LoginWebPart, _super);
    function LoginWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginWebPart.prototype.render = function () {
        var element = React.createElement(Login, {
            id: this.properties.id,
            description: this.properties.description,
        });
        ReactDom.render(element, this.domElement);
    };
    LoginWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    LoginWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return LoginWebPart;
}(BaseClientSideWebPart));
export default LoginWebPart;
//# sourceMappingURL=LoginWebPart.js.map