import { mergeStyles, mergeStyleSets, } from "office-ui-fabric-react/lib/Styling";
var currentTheme = window.__themeState__.theme;
export var getMyTeamsStyles = function (themeVariant) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    var commentTextStyles = {
        root: {
            marginBottom: 15,
            padding: "0px 25px 25px 25px",
        },
    };
    var showHideButtonStyles = {
        labelHovered: {
            textDecoration: "underline",
        },
    };
    var titleStyles = {
        root: {
            marginBottom: 20,
        },
    };
    var stackStyles = {
        root: mergeStyles({
            padding: 0,
        }),
    };
    var stackTokens = {
        childrenGap: 0,
    };
    var styleClasses = mergeStyleSets({
        webPartTitle: {
            marginBottom: 20,
        },
        separator: mergeStyles({
            borderBottomStyle: "solid",
            borderWidth: 1,
            borderBottomColor: (_c = (_b = (_a = themeVariant) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.themeLighter, (_c !== null && _c !== void 0 ? _c : currentTheme.themeLighter)),
        }),
        styleIcon: mergeStyles({
            maxWidth: 44,
            minWidth: 44,
            minHeight: 30,
            height: 30,
            borderColor: (_f = (_e = (_d = themeVariant) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.themePrimary, (_f !== null && _f !== void 0 ? _f : currentTheme.themePrimary)),
            borderRightWidth: 0,
            borderRightStyle: "none",
            borderLeftWidth: 1,
            borderLeftStyle: "solid",
            borderTopWidth: 1,
            borderTopStyle: "solid",
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }),
        teamsContainer: mergeStyles({
            // backgroundColor: themeVariant?.palette?.neutralLighterAlt,
            padding: 7,
            maxHeight: "75vh",
            overflowY: "auto",
            display: "grid",
            gridTemplateColumns: "auto-fill, minmax(min(100%, 65px), 1fr)",
            // gridGap:  "6px",
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: themeVariant
                    ? (_h = (_g = themeVariant) === null || _g === void 0 ? void 0 : _g.palette) === null || _h === void 0 ? void 0 : _h.neutralQuaternaryAlt : currentTheme.neutralQuaternaryAlt,
            },
            "&::-webkit-scrollbar": {
                height: 5,
                width: 10,
            },
        }),
        teamContainer: mergeStyles({
            maxWidth: "100%",
            overflow: "auto",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: (_l = (_k = (_j = themeVariant) === null || _j === void 0 ? void 0 : _j.palette) === null || _k === void 0 ? void 0 : _k.neutralQuaternaryAlt, (_l !== null && _l !== void 0 ? _l : currentTheme.neutralQuaternaryAlt)),
            borderLeftStyle: "solid",
            borderLeftWidth: 3,
            borderLeftColor: (_p = (_o = (_m = themeVariant) === null || _m === void 0 ? void 0 : _m.palette) === null || _o === void 0 ? void 0 : _o.themePrimary, (_p !== null && _p !== void 0 ? _p : currentTheme.themePrimary)),
            margin: 3,
            backgroundColor: (_s = (_r = (_q = themeVariant) === null || _q === void 0 ? void 0 : _q.palette) === null || _r === void 0 ? void 0 : _r.white, (_s !== null && _s !== void 0 ? _s : currentTheme.white)),
            boxShadow: "0 5px 15px rgba(50, 50, 90, .1)",
            ":hover": {
                borderStyle: "solid",
                borderWidth: 1,
                borderLeftStyle: "solid",
                borderLeftWidth: 3,
                borderColor: (_v = (_u = (_t = themeVariant) === null || _t === void 0 ? void 0 : _t.palette) === null || _u === void 0 ? void 0 : _u.themePrimary, (_v !== null && _v !== void 0 ? _v : currentTheme.themePrimary)),
            },
        }),
    });
    return {
        titleStyles: titleStyles,
        stackStyles: stackStyles,
        stackTokens: stackTokens,
        styleClasses: styleClasses,
        commentTextStyles: commentTextStyles,
        showHideButtonStyles: showHideButtonStyles,
    };
};
//# sourceMappingURL=MyTeamsStyles.js.map