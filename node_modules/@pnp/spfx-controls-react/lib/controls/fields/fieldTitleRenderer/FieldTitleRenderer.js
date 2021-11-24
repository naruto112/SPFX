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
import * as React from 'react';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { FieldBaseTextRenderer } from '../fieldBaseTextRenderer/FieldBaseTextRenderer';
import * as telemetry from '../../../common/telemetry';
/**
 * Field Title Renderer.
 * Used for:
 *   - Title
 */
var FieldTitleRenderer = /** @class */ (function (_super) {
    __extends(FieldTitleRenderer, _super);
    function FieldTitleRenderer(props, state) {
        var _this = _super.call(this, props, state) || this;
        telemetry.track('FieldTitleRenderer', {});
        _this.state = {};
        return _this;
    }
    FieldTitleRenderer.prototype.render = function () {
        var isLink = this.props.isLink;
        if (isLink) {
            return (React.createElement(Link, { onClick: this._onClick.bind(this), className: css(this.props.className), style: this.props.cssProps }, this.props.text));
        }
        else {
            return (React.createElement(FieldBaseTextRenderer, { className: this.props.className, cssProps: this.props.cssProps, text: this.props.text }));
        }
    };
    FieldTitleRenderer.prototype._onClick = function () {
        if (this.props.onClick) {
            var args = this.props;
            this.props.onClick(args);
            return;
        }
        var url = this.props.baseUrl + "/_layouts/15/listform.aspx?PageType=4&ListId=" + this.props.listId + "&ID=" + this.props.id;
        location.href = url;
    };
    return FieldTitleRenderer;
}(React.Component));
export { FieldTitleRenderer };
//# sourceMappingURL=FieldTitleRenderer.js.map