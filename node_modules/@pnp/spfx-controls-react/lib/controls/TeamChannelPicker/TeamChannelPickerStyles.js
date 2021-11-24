import { mergeStyles, mergeStyleSets, } from "office-ui-fabric-react/lib/Styling";
var theme = window.__themeState__.theme;
export var useTeamChannelPickerStyles = function (themeVariant) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51;
    var textHeaderStyles = {
        root: { color: (_b = (_a = themeVariant) === null || _a === void 0 ? void 0 : _a.palette.themePrimary, (_b !== null && _b !== void 0 ? _b : (_c = theme) === null || _c === void 0 ? void 0 : _c.themePrimary)) },
    };
    var renderIconButtonRemoveStyles = {
        root: {
            height: 26,
            lineHeight: 26,
        },
    };
    var renderItemStylesMulti = {
        root: {
            height: 26,
            lineHeight: 26,
            paddingLeft: 10,
            marginLeft: 5,
            marginBottom: 5,
            cursor: "default",
            backgroundColor: (_f = (_e = (_d = themeVariant) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.themeLighterAlt, (_f !== null && _f !== void 0 ? _f : theme.themeLighterAlt)),
            ":hover": {
                backgroundColor: (_j = (_h = (_g = themeVariant) === null || _g === void 0 ? void 0 : _g.palette) === null || _h === void 0 ? void 0 : _h.themeLighter, (_j !== null && _j !== void 0 ? _j : theme.themeLighter)),
            },
        },
    };
    var renderItemStylesSingle = {
        root: {
            height: 26,
            lineHeight: 26,
            paddingLeft: 10,
            cursor: "default",
            margin: 2,
            backgroundColor: (_m = (_l = (_k = themeVariant) === null || _k === void 0 ? void 0 : _k.palette) === null || _l === void 0 ? void 0 : _l.themeLighterAlt, (_m !== null && _m !== void 0 ? _m : theme.themeLighterAlt)),
            ":hover": {
                backgroundColor: (_q = (_p = (_o = themeVariant) === null || _o === void 0 ? void 0 : _o.palette) === null || _p === void 0 ? void 0 : _p.themeLighter, (_q !== null && _q !== void 0 ? _q : theme.themeLighter)),
            },
        },
    };
    var pickerStylesSingle = {
        root: {
            width: " 100%",
            borderRadius: 0,
        },
        input: {
            width: "100%",
            backgroundColor: (_t = (_s = (_r = themeVariant) === null || _r === void 0 ? void 0 : _r.palette) === null || _s === void 0 ? void 0 : _s.white, (_t !== null && _t !== void 0 ? _t : theme.white)),
        },
        itemsWrapper: {},
        text: {
            borderStyle: "solid",
            width: "100%",
            borderWidth: 1,
            backgroundColor: (_w = (_v = (_u = themeVariant) === null || _u === void 0 ? void 0 : _u.palette) === null || _v === void 0 ? void 0 : _v.white, (_w !== null && _w !== void 0 ? _w : theme.white)),
            borderRadius: 0,
            borderColor: (_z = (_y = (_x = themeVariant) === null || _x === void 0 ? void 0 : _x.palette) === null || _y === void 0 ? void 0 : _y.neutralQuaternaryAlt, (_z !== null && _z !== void 0 ? _z : theme.neutralQuaternaryAlt)),
            ":focus": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_2 = (_1 = (_0 = themeVariant) === null || _0 === void 0 ? void 0 : _0.palette) === null || _1 === void 0 ? void 0 : _1.themePrimary, (_2 !== null && _2 !== void 0 ? _2 : theme.themePrimary)),
            },
            ":hover": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_5 = (_4 = (_3 = themeVariant) === null || _3 === void 0 ? void 0 : _3.palette) === null || _4 === void 0 ? void 0 : _4.themePrimary, (_5 !== null && _5 !== void 0 ? _5 : theme.themePrimary)),
            },
            ":after": {
                borderWidth: 0,
                borderRadius: 0,
            },
        },
    };
    var pickerStylesMulti = {
        root: {
            width: " 100%",
            borderRadius: 0,
        },
        input: {
            width: "100%",
            backgroundColor: (_8 = (_7 = (_6 = themeVariant) === null || _6 === void 0 ? void 0 : _6.palette) === null || _7 === void 0 ? void 0 : _7.white, (_8 !== null && _8 !== void 0 ? _8 : theme.white)),
        },
        itemsWrapper: {
            padding: 3,
        },
        text: {
            borderStyle: "solid",
            width: "100%",
            borderWidth: 1,
            backgroundColor: (_11 = (_10 = (_9 = themeVariant) === null || _9 === void 0 ? void 0 : _9.palette) === null || _10 === void 0 ? void 0 : _10.white, (_11 !== null && _11 !== void 0 ? _11 : theme.white)),
            borderRadius: 0,
            borderColor: (_14 = (_13 = (_12 = themeVariant) === null || _12 === void 0 ? void 0 : _12.palette) === null || _13 === void 0 ? void 0 : _13.neutralQuaternaryAlt, (_14 !== null && _14 !== void 0 ? _14 : theme.neutralQuaternaryAlt)),
            ":focus": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_17 = (_16 = (_15 = themeVariant) === null || _15 === void 0 ? void 0 : _15.palette) === null || _16 === void 0 ? void 0 : _16.themePrimary, (_17 !== null && _17 !== void 0 ? _17 : theme.themePrimary)),
            },
            ":hover": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_20 = (_19 = (_18 = themeVariant) === null || _18 === void 0 ? void 0 : _18.palette) === null || _19 === void 0 ? void 0 : _19.themePrimary, (_20 !== null && _20 !== void 0 ? _20 : theme.themePrimary)),
            },
            ":after": {
                borderStyle: "solid",
                borderWidth: 1,
                // borderColor: theme.neutralQuaternaryAlt,
                borderColor: (_23 = (_22 = (_21 = themeVariant) === null || _21 === void 0 ? void 0 : _21.palette) === null || _22 === void 0 ? void 0 : _22.themePrimary, (_23 !== null && _23 !== void 0 ? _23 : theme.themePrimary)),
            },
        },
    };
    var pickerStyles = {
        root: {
            width: " 100%",
            borderRadius: 0,
        },
        input: {
            borderTopStyle: "solid",
            width: "100%",
            borderTopWidth: 0,
            backgroundColor: (_26 = (_25 = (_24 = themeVariant) === null || _24 === void 0 ? void 0 : _24.palette) === null || _25 === void 0 ? void 0 : _25.white, (_26 !== null && _26 !== void 0 ? _26 : theme.white)),
            borderRadius: 0,
        },
        itemsWrapper: {
            padding: 5,
        },
        text: {
            borderStyle: "solid",
            width: "100%",
            borderWidth: 1,
            backgroundColor: (_29 = (_28 = (_27 = themeVariant) === null || _27 === void 0 ? void 0 : _27.palette) === null || _28 === void 0 ? void 0 : _28.white, (_29 !== null && _29 !== void 0 ? _29 : theme.white)),
            borderRadius: 0,
            borderColor: (_32 = (_31 = (_30 = themeVariant) === null || _30 === void 0 ? void 0 : _30.palette) === null || _31 === void 0 ? void 0 : _31.neutralQuaternaryAlt, (_32 !== null && _32 !== void 0 ? _32 : theme.neutralQuaternaryAlt)),
            ":focus": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_35 = (_34 = (_33 = themeVariant) === null || _33 === void 0 ? void 0 : _33.palette) === null || _34 === void 0 ? void 0 : _34.themePrimary, (_35 !== null && _35 !== void 0 ? _35 : theme.themePrimary)),
            },
            ":hover": {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: (_38 = (_37 = (_36 = themeVariant) === null || _36 === void 0 ? void 0 : _36.palette) === null || _37 === void 0 ? void 0 : _37.themePrimary, (_38 !== null && _38 !== void 0 ? _38 : theme.themePrimary)),
            },
            ":after": {
                borderStyle: "solid",
                borderWidth: 1,
                // borderColor: theme.neutralQuaternaryAlt,
                borderColor: (_41 = (_40 = (_39 = themeVariant) === null || _39 === void 0 ? void 0 : _39.palette) === null || _40 === void 0 ? void 0 : _40.themePrimary, (_41 !== null && _41 !== void 0 ? _41 : theme.themePrimary)),
            },
        },
    };
    var componentClasses = mergeStyleSets({
        separator: mergeStyles({
            marginTop: 25,
            marginLeft: 20,
            marginRight: 20,
            borderBottomWidth: 1,
            borderBottomColor: (_44 = (_43 = (_42 = themeVariant) === null || _42 === void 0 ? void 0 : _42.palette) === null || _43 === void 0 ? void 0 : _43.neutralQuaternaryAlt, (_44 !== null && _44 !== void 0 ? _44 : (_45 = theme) === null || _45 === void 0 ? void 0 : _45.neutralQuaternaryAlt)),
            borderBottomStyle: "solid",
        }),
        iconChannelItemStyles: {
            fontSize: 14,
            color: (_48 = (_47 = (_46 = themeVariant) === null || _46 === void 0 ? void 0 : _46.palette) === null || _47 === void 0 ? void 0 : _47.themePrimary, (_48 !== null && _48 !== void 0 ? _48 : theme.themePrimary))
        },
        iconChannelInfoStyles: {
            fontSize: 12,
            color: (_51 = (_50 = (_49 = themeVariant) === null || _49 === void 0 ? void 0 : _49.palette) === null || _50 === void 0 ? void 0 : _50.themePrimary, (_51 !== null && _51 !== void 0 ? _51 : theme.themePrimary))
        },
    });
    return {
        renderIconButtonRemoveStyles: renderIconButtonRemoveStyles,
        pickerStyles: pickerStyles,
        renderItemStylesSingle: renderItemStylesSingle,
        renderItemStylesMulti: renderItemStylesMulti,
        pickerStylesMulti: pickerStylesMulti,
        pickerStylesSingle: pickerStylesSingle,
        componentClasses: componentClasses
    };
};
//# sourceMappingURL=TeamChannelPickerStyles.js.map