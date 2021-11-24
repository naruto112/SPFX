import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import "./display.sharepoint.styles.css";
export interface ILoginWebPartProps {
    description: string;
    id: string;
}
export default class LoginWebPart extends BaseClientSideWebPart<ILoginWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=LoginWebPart.d.ts.map