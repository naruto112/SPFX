import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import "./display.sharepoint.styles.css";

import * as strings from "LoginWebPartStrings";
import Login from "./components/Login";
import { ILoginProps } from "./components/ILoginProps";

export interface ILoginWebPartProps {
  description: string;
  id: string;
}

export default class LoginWebPart extends BaseClientSideWebPart<ILoginWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ILoginProps> = React.createElement(
      Login,
      {
        id: this.properties.id,
        description: this.properties.description,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
