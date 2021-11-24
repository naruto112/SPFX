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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
import * as React from 'react';
import styles from './DynamicForm.module.scss';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import SPservice from '../../services/SPService';
import { DynamicField } from './dynamicField';
import { sp } from '@pnp/sp/presets/all';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';
import * as strings from 'ControlStrings';
import { SPHttpClient } from '@microsoft/sp-http';
var stackTokens = { childrenGap: 20 };
/**
 * DynamicForm Class Control
 */
var DynamicForm = /** @class */ (function (_super) {
    __extends(DynamicForm, _super);
    function DynamicForm(props) {
        var _this = _super.call(this, props) || this;
        //trigger when the user submits the form.
        _this.onSubmitClick = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, listId, listItemId, onSubmitted, onBeforeSubmit, onSubmitError, shouldBeReturnBack_1, fields, objects, _loop_1, this_1, i, len, isCancelled, iur, error_1, iar, error_2, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, listId = _a.listId, listItemId = _a.listItemId, onSubmitted = _a.onSubmitted, onBeforeSubmit = _a.onBeforeSubmit, onSubmitError = _a.onSubmitError;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 16, , 17]);
                        shouldBeReturnBack_1 = false;
                        fields = (this.state.fieldCollection || []).slice();
                        fields.forEach(function (val) {
                            if (val.required) {
                                if (val.newValue === null) {
                                    if (val.fieldDefaultValue === null || val.fieldDefaultValue === '' || val.fieldDefaultValue.length === 0) {
                                        if (val.fieldType === "DateTime")
                                            val.fieldDefaultValue = null;
                                        else
                                            val.fieldDefaultValue = '';
                                        shouldBeReturnBack_1 = true;
                                    }
                                }
                                else if (val.newValue === '') {
                                    val.fieldDefaultValue = '';
                                    shouldBeReturnBack_1 = true;
                                }
                            }
                        });
                        if (shouldBeReturnBack_1) {
                            this.setState({ fieldCollection: fields });
                            return [2 /*return*/];
                        }
                        this.setState({
                            isSaving: true
                        });
                        objects = {};
                        _loop_1 = function (i, len) {
                            var val, fieldType, additionalData, columnInternalName, hiddenFieldName, value_1, uploadedImage;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        val = fields[i];
                                        fieldType = val.fieldType, additionalData = val.additionalData, columnInternalName = val.columnInternalName, hiddenFieldName = val.hiddenFieldName;
                                        if (!(val.newValue !== null && val.newValue !== undefined)) return [3 /*break*/, 14];
                                        value_1 = val.newValue;
                                        if (!(fieldType === "Lookup")) return [3 /*break*/, 1];
                                        objects[columnInternalName + "Id"] = value_1[0].key;
                                        return [3 /*break*/, 14];
                                    case 1:
                                        if (!(fieldType === "LookupMulti")) return [3 /*break*/, 2];
                                        value_1 = [];
                                        val.newValue.forEach(function (element) {
                                            value_1.push(element.key);
                                        });
                                        objects[columnInternalName + "Id"] = { results: value_1 };
                                        return [3 /*break*/, 14];
                                    case 2:
                                        if (!(fieldType === "TaxonomyFieldType")) return [3 /*break*/, 3];
                                        objects[columnInternalName] = {
                                            '__metadata': { 'type': 'SP.Taxonomy.TaxonomyFieldValue' },
                                            'Label': value_1[0].name,
                                            'TermGuid': value_1[0].key,
                                            'WssId': '-1'
                                        };
                                        return [3 /*break*/, 14];
                                    case 3:
                                        if (!(fieldType === "TaxonomyFieldTypeMulti")) return [3 /*break*/, 4];
                                        objects[hiddenFieldName] = val.newValue.map(function (term) { return "-1#;" + term.name + "|" + term.key + ";"; }).join('#');
                                        return [3 /*break*/, 14];
                                    case 4:
                                        if (!(fieldType === "User")) return [3 /*break*/, 5];
                                        objects[columnInternalName + "Id"] = val.newValue;
                                        return [3 /*break*/, 14];
                                    case 5:
                                        if (!(fieldType === "Choice")) return [3 /*break*/, 6];
                                        objects[columnInternalName] = val.newValue.key;
                                        return [3 /*break*/, 14];
                                    case 6:
                                        if (!(fieldType === "MultiChoice")) return [3 /*break*/, 7];
                                        objects[columnInternalName] = { results: val.newValue };
                                        return [3 /*break*/, 14];
                                    case 7:
                                        if (!(fieldType === "Location")) return [3 /*break*/, 8];
                                        objects[columnInternalName] = JSON.stringify(val.newValue);
                                        return [3 /*break*/, 14];
                                    case 8:
                                        if (!(fieldType === "UserMulti")) return [3 /*break*/, 9];
                                        objects[columnInternalName + "Id"] = { results: val.newValue };
                                        return [3 /*break*/, 14];
                                    case 9:
                                        if (!(fieldType === 'Thumbnail')) return [3 /*break*/, 13];
                                        if (!additionalData) return [3 /*break*/, 11];
                                        return [4 /*yield*/, this_1.uplaodImage(additionalData)];
                                    case 10:
                                        uploadedImage = _a.sent();
                                        objects[columnInternalName] = JSON.stringify({
                                            type: 'thumbnail',
                                            fileName: uploadedImage.Name,
                                            serverRelativeUrl: uploadedImage.ServerRelativeUrl,
                                            id: uploadedImage.UniqueId
                                        });
                                        return [3 /*break*/, 12];
                                    case 11:
                                        objects[columnInternalName] = null;
                                        _a.label = 12;
                                    case 12: return [3 /*break*/, 14];
                                    case 13:
                                        objects[columnInternalName] = val.newValue;
                                        _a.label = 14;
                                    case 14: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0, len = fields.length;
                        _b.label = 2;
                    case 2:
                        if (!(i < len)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_1(i, len)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        if (!onBeforeSubmit) return [3 /*break*/, 7];
                        return [4 /*yield*/, onBeforeSubmit(objects)];
                    case 6:
                        isCancelled = _b.sent();
                        if (isCancelled) {
                            this.setState({
                                isSaving: false
                            });
                            return [2 /*return*/];
                        }
                        _b.label = 7;
                    case 7:
                        if (!listItemId) return [3 /*break*/, 12];
                        _b.label = 8;
                    case 8:
                        _b.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, sp.web.lists.getById(listId).items.getById(listItemId).update(objects)];
                    case 9:
                        iur = _b.sent();
                        if (onSubmitted) {
                            onSubmitted(iur.data, this.props.returnListItemInstanceOnSubmit !== false ? iur.item : undefined);
                        }
                        return [3 /*break*/, 11];
                    case 10:
                        error_1 = _b.sent();
                        if (onSubmitError) {
                            onSubmitError(objects, error_1);
                        }
                        console.log("Error", error_1);
                        return [3 /*break*/, 11];
                    case 11: return [3 /*break*/, 15];
                    case 12:
                        _b.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, sp.web.lists.getById(listId).items.add(objects)];
                    case 13:
                        iar = _b.sent();
                        if (onSubmitted) {
                            onSubmitted(iar.data, this.props.returnListItemInstanceOnSubmit !== false ? iar.item : undefined);
                        }
                        return [3 /*break*/, 15];
                    case 14:
                        error_2 = _b.sent();
                        if (onSubmitError) {
                            onSubmitError(objects, error_2);
                        }
                        console.log("Error", error_2);
                        return [3 /*break*/, 15];
                    case 15:
                        this.setState({
                            isSaving: false
                        });
                        return [3 /*break*/, 17];
                    case 16:
                        error_3 = _b.sent();
                        if (onSubmitError) {
                            onSubmitError(null, error_3);
                        }
                        console.log("Error onSubmit", error_3);
                        return [3 /*break*/, 17];
                    case 17: return [2 /*return*/];
                }
            });
        }); };
        // trigger when the user change any value in the form
        _this.onChange = function (internalName, newValue, additionalData) { return __awaiter(_this, void 0, void 0, function () {
            var fieldCol, field, user, result, _loop_2, retrivedItem, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fieldCol = (this.state.fieldCollection || []).slice();
                        field = fieldCol.filter(function (element, i) { return element.columnInternalName === internalName; })[0];
                        field.newValue = newValue;
                        field.additionalData = additionalData;
                        if (!(field.fieldType === "User" && newValue.length !== 0)) return [3 /*break*/, 4];
                        if (!(newValue[0].id === undefined || parseInt(newValue[0].id, 10).toString() === "NaN")) return [3 /*break*/, 2];
                        user = newValue[0].secondaryText;
                        if (user.indexOf('@') === -1) {
                            user = newValue[0].loginName;
                        }
                        return [4 /*yield*/, sp.web.ensureUser(user)];
                    case 1:
                        result = _a.sent();
                        field.newValue = result.data.Id;
                        return [3 /*break*/, 3];
                    case 2:
                        field.newValue = newValue[0].id;
                        _a.label = 3;
                    case 3: return [3 /*break*/, 8];
                    case 4:
                        if (!(field.fieldType === "UserMulti" && newValue.length !== 0)) return [3 /*break*/, 8];
                        field.newValue = [];
                        _loop_2 = function (index) {
                            var element, user, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        element = newValue[index];
                                        retrivedItem = false;
                                        if (field.fieldDefaultValue != null) {
                                            if (field.fieldDefaultValue.join(',').indexOf(element.text) !== -1)
                                                field.fieldDefaultValue.forEach(function (item) {
                                                    if (item.split('/')[1] === element.text) {
                                                        retrivedItem = true;
                                                        field.newValue.push(item.split('/')[0]);
                                                    }
                                                });
                                        }
                                        if (!!retrivedItem) return [3 /*break*/, 3];
                                        if (!(element.id === undefined || parseInt(element.id, 10).toString() === "NaN")) return [3 /*break*/, 2];
                                        user = element.secondaryText;
                                        if (user.indexOf('@') === -1) {
                                            user = element.loginName;
                                        }
                                        return [4 /*yield*/, sp.web.ensureUser(user)];
                                    case 1:
                                        result = _a.sent();
                                        field.newValue.push(result.data.Id);
                                        return [3 /*break*/, 3];
                                    case 2:
                                        field.newValue.push(element.id);
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        index = 0;
                        _a.label = 5;
                    case 5:
                        if (!(index < newValue.length)) return [3 /*break*/, 8];
                        return [5 /*yield**/, _loop_2(index)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        index++;
                        return [3 /*break*/, 5];
                    case 8:
                        this.setState({
                            fieldCollection: fieldCol
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        //getting all the fields information as part of get ready process
        _this.getFieldInformations = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, context, listId, listItemId, contentTypeId, spList, item, defaultContentType, listFeilds, tempFields, order, responseValue, _loop_3, this_2, i, len, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, context = _a.context, listId = _a.listId, listItemId = _a.listItemId;
                        contentTypeId = this.props.contentTypeId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 12, , 13]);
                        return [4 /*yield*/, sp.web.lists.getById(listId)];
                    case 2:
                        spList = _b.sent();
                        item = null;
                        if (!(listItemId !== undefined && listItemId !== null && listItemId !== 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, spList.items.getById(listItemId).get()];
                    case 3:
                        item = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!(contentTypeId === undefined || contentTypeId === '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, spList.contentTypes.select("Id", "Name").get()];
                    case 5:
                        defaultContentType = _b.sent();
                        contentTypeId = defaultContentType[0]["Id"].StringValue;
                        _b.label = 6;
                    case 6: return [4 /*yield*/, this.getFormFields(listId, contentTypeId, context.pageContext.web.absoluteUrl)];
                    case 7:
                        listFeilds = _b.sent();
                        tempFields = [];
                        order = 0;
                        responseValue = listFeilds['value'];
                        _loop_3 = function (i, len) {
                            var field, fieldType, hiddenName, termSetId, lookupListId, lookupField, choices, defaultValue, selectedTags, richText, dateFormat, principalType, response, response, schemaXml, dateFormatRegEx, userEmails, _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        field = responseValue[i];
                                        order++;
                                        fieldType = field['TypeAsString'];
                                        field.order = order;
                                        hiddenName = "";
                                        termSetId = "";
                                        lookupListId = "";
                                        lookupField = "";
                                        choices = [];
                                        defaultValue = null;
                                        selectedTags = [];
                                        richText = false;
                                        dateFormat = void 0;
                                        principalType = "";
                                        if (item !== null) {
                                            defaultValue = item[field.InternalName];
                                        }
                                        else {
                                            defaultValue = field.DefaultValue;
                                        }
                                        if (!(fieldType === 'Choice' || fieldType === 'MultiChoice')) return [3 /*break*/, 1];
                                        field["Choices"].forEach(function (element) {
                                            choices.push({ key: element, text: element });
                                        });
                                        return [3 /*break*/, 27];
                                    case 1:
                                        if (!(fieldType === "Note")) return [3 /*break*/, 2];
                                        richText = field["RichText"];
                                        return [3 /*break*/, 27];
                                    case 2:
                                        if (!(fieldType === "Lookup")) return [3 /*break*/, 6];
                                        lookupListId = field["LookupList"];
                                        lookupField = field["LookupField"];
                                        if (!(item !== null)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this_2._spService.getLookupValue(listId, listItemId, field.InternalName, context.pageContext.web.absoluteUrl)];
                                    case 3:
                                        defaultValue = _c.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        defaultValue = [];
                                        _c.label = 5;
                                    case 5: return [3 /*break*/, 27];
                                    case 6:
                                        if (!(fieldType === "LookupMulti")) return [3 /*break*/, 10];
                                        lookupListId = field["LookupList"];
                                        lookupField = field["LookupField"];
                                        if (!(item !== null)) return [3 /*break*/, 8];
                                        return [4 /*yield*/, this_2._spService.getLookupValues(listId, listItemId, field.InternalName, context.pageContext.web.absoluteUrl)];
                                    case 7:
                                        defaultValue = _c.sent();
                                        return [3 /*break*/, 9];
                                    case 8:
                                        defaultValue = [];
                                        _c.label = 9;
                                    case 9: return [3 /*break*/, 27];
                                    case 10:
                                        if (!(fieldType === "TaxonomyFieldTypeMulti")) return [3 /*break*/, 12];
                                        return [4 /*yield*/, this_2._spService.getTaxonomyFieldInternalName(this_2.props.listId, field.InternalName, this_2.props.context.pageContext.web.absoluteUrl)];
                                    case 11:
                                        response = _c.sent();
                                        hiddenName = response["value"];
                                        termSetId = field["TermSetId"];
                                        if (item !== null) {
                                            item[field.InternalName].forEach(function (element) {
                                                selectedTags.push({ key: element.TermGuid, name: element.Label });
                                            });
                                            defaultValue = selectedTags;
                                        }
                                        else {
                                            if (defaultValue !== "") {
                                                defaultValue.split(/#|;/).forEach(function (element) {
                                                    if (element.indexOf('|') !== -1)
                                                        selectedTags.push({ key: element.split('|')[1], name: element.split('|')[0] });
                                                });
                                                defaultValue = selectedTags;
                                            }
                                        }
                                        if (defaultValue === "")
                                            defaultValue = null;
                                        return [3 /*break*/, 27];
                                    case 12:
                                        if (!(fieldType === "TaxonomyFieldType")) return [3 /*break*/, 16];
                                        termSetId = field["TermSetId"];
                                        if (!(item !== null)) return [3 /*break*/, 14];
                                        return [4 /*yield*/, this_2._spService.getSingleManagedMtadataLabel(listId, listItemId, field.InternalName)];
                                    case 13:
                                        response = _c.sent();
                                        if (response) {
                                            selectedTags.push({ key: response["TermID"], name: response["Label"] });
                                            defaultValue = selectedTags;
                                        }
                                        return [3 /*break*/, 15];
                                    case 14:
                                        if (defaultValue !== "") {
                                            selectedTags.push({ key: defaultValue.split('|')[1], name: defaultValue.split('|')[0].split('#')[1] });
                                            defaultValue = selectedTags;
                                        }
                                        _c.label = 15;
                                    case 15:
                                        if (defaultValue === "")
                                            defaultValue = null;
                                        return [3 /*break*/, 27];
                                    case 16:
                                        if (!(fieldType === "DateTime")) return [3 /*break*/, 17];
                                        if (item !== null && item[field.InternalName])
                                            defaultValue = new Date(item[field.InternalName]);
                                        else if (defaultValue === '[today]') {
                                            defaultValue = new Date();
                                        }
                                        schemaXml = field.SchemaXml;
                                        dateFormatRegEx = /\s+Format=\"([^\"]+)\"/gmi.exec(schemaXml);
                                        dateFormat = dateFormatRegEx && dateFormatRegEx.length ? dateFormatRegEx[1] : 'DateOnly';
                                        return [3 /*break*/, 27];
                                    case 17:
                                        if (!(fieldType === "UserMulti")) return [3 /*break*/, 21];
                                        if (!(item !== null)) return [3 /*break*/, 19];
                                        return [4 /*yield*/, this_2._spService.getUsersUPNFromFieldValue(listId, listItemId, field.InternalName, context.pageContext.web.absoluteUrl)];
                                    case 18:
                                        defaultValue = _c.sent();
                                        return [3 /*break*/, 20];
                                    case 19:
                                        defaultValue = [];
                                        _c.label = 20;
                                    case 20:
                                        principalType = field.SchemaXml.split('UserSelectionMode="')[1];
                                        principalType = principalType.substring(0, principalType.indexOf('"'));
                                        return [3 /*break*/, 27];
                                    case 21:
                                        if (!(fieldType === "Thumbnail")) return [3 /*break*/, 22];
                                        if (defaultValue !== null) {
                                            defaultValue = context.pageContext.web.absoluteUrl.split('/sites/')[0] + JSON.parse(defaultValue).serverRelativeUrl;
                                        }
                                        return [3 /*break*/, 27];
                                    case 22:
                                        if (!(fieldType === "User")) return [3 /*break*/, 26];
                                        if (!(item !== null)) return [3 /*break*/, 24];
                                        userEmails = [];
                                        _b = (_a = userEmails).push;
                                        return [4 /*yield*/, this_2._spService.getUserUPNById(parseInt(item[field.InternalName + "Id"]))];
                                    case 23:
                                        _b.apply(_a, [(_c.sent()) + '']);
                                        defaultValue = userEmails;
                                        return [3 /*break*/, 25];
                                    case 24:
                                        defaultValue = [];
                                        _c.label = 25;
                                    case 25:
                                        principalType = field.SchemaXml.split('UserSelectionMode="')[1];
                                        principalType = principalType.substring(0, principalType.indexOf('"'));
                                        return [3 /*break*/, 27];
                                    case 26:
                                        if (fieldType === "Location") {
                                            defaultValue = JSON.parse(defaultValue);
                                        }
                                        _c.label = 27;
                                    case 27:
                                        tempFields.push({
                                            newValue: null,
                                            fieldTermSetId: termSetId,
                                            options: choices,
                                            lookupListID: lookupListId,
                                            lookupField: lookupField,
                                            changedValue: defaultValue,
                                            fieldType: field.TypeAsString,
                                            fieldTitle: field.Title,
                                            fieldDefaultValue: defaultValue,
                                            context: this_2.props.context,
                                            disabled: this_2.props.disabled,
                                            listId: this_2.props.listId,
                                            columnInternalName: field.InternalName,
                                            label: field.Title,
                                            onChanged: this_2.onChange,
                                            required: field.Required,
                                            hiddenFieldName: hiddenName,
                                            Order: field.order,
                                            isRichText: richText,
                                            dateFormat: dateFormat,
                                            listItemId: listItemId,
                                            principalType: principalType,
                                            description: field.Description
                                        });
                                        tempFields.sort(function (a, b) { return a.Order - b.Order; });
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        i = 0, len = responseValue.length;
                        _b.label = 8;
                    case 8:
                        if (!(i < len)) return [3 /*break*/, 11];
                        return [5 /*yield**/, _loop_3(i, len)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        i++;
                        return [3 /*break*/, 8];
                    case 11:
                        this.setState({ fieldCollection: tempFields });
                        return [3 /*break*/, 13];
                    case 12:
                        error_4 = _b.sent();
                        console.log("Error get field informations", error_4);
                        return [2 /*return*/, null];
                    case 13: return [2 /*return*/];
                }
            });
        }); };
        _this.uplaodImage = function (file) { return __awaiter(_this, void 0, void 0, function () {
            var _a, listId, listItemId, fileInstance, buffer;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, listId = _a.listId, listItemId = _a.listItemId;
                        if (!file.fileAbsoluteUrl) return [3 /*break*/, 1];
                        return [2 /*return*/, {
                                Name: file.fileName,
                                ServerRelativeUrl: file.fileAbsoluteUrl,
                                UniqueId: ''
                            }];
                    case 1: return [4 /*yield*/, file.downloadFileContent()];
                    case 2:
                        fileInstance = _b.sent();
                        return [4 /*yield*/, this.getImageArrayBuffer(fileInstance)];
                    case 3:
                        buffer = _b.sent();
                        return [4 /*yield*/, this._spService.uploadImage(listId, listItemId, file.fileName, buffer, undefined)];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        }); };
        _this.getImageArrayBuffer = function (file) {
            return new Promise(function (resolve) {
                var reader = new FileReader();
                reader.readAsArrayBuffer(file);
                reader.onload = function () {
                    resolve(reader.result);
                };
            });
        };
        _this.getFormFields = function (listId, contentTypeId, webUrl) { return __awaiter(_this, void 0, void 0, function () {
            var context, webAbsoluteUrl, apiUrl, data, results, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        context = this.props.context;
                        webAbsoluteUrl = !webUrl ? context.pageContext.web.absoluteUrl : webUrl;
                        apiUrl = '';
                        if (contentTypeId !== undefined && contentTypeId !== '') {
                            apiUrl = webAbsoluteUrl + "/_api/web/lists(@listId)/contenttypes('" + contentTypeId + "')/fields?@listId=guid'" + encodeURIComponent(listId) + "'&$filter=ReadOnlyField eq false and Hidden eq false and (FromBaseType eq false or StaticName eq 'Title')";
                        }
                        else {
                            apiUrl = webAbsoluteUrl + "/_api/web/lists(@listId)/fields?@listId=guid'" + encodeURIComponent(listId) + "'&$filter=ReadOnlyField eq false and Hidden eq false and (FromBaseType eq false or StaticName eq 'Title')";
                        }
                        return [4 /*yield*/, context.spHttpClient.get(apiUrl, SPHttpClient.configurations.v1)];
                    case 1:
                        data = _a.sent();
                        if (!data.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, data.json()];
                    case 2:
                        results = _a.sent();
                        if (results) {
                            return [2 /*return*/, results];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, null];
                    case 4:
                        error_5 = _a.sent();
                        console.dir(error_5);
                        return [2 /*return*/, Promise.reject(error_5)];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        // Initialize pnp sp
        sp.setup({
            spfxContext: _this.props.context
        });
        // Initialize state
        _this.state = {
            fieldCollection: []
        };
        // Get SPService Factory
        _this._spService = new SPservice(_this.props.context);
        return _this;
    }
    /**
     * Lifecycle hook when component is mounted
     */
    DynamicForm.prototype.componentDidMount = function () {
        this.getFieldInformations();
    };
    /**
     * Default React component render method
     */
    DynamicForm.prototype.render = function () {
        var _this = this;
        var _a = this.state, fieldCollection = _a.fieldCollection, isSaving = _a.isSaving;
        return (React.createElement("div", null, fieldCollection.length === 0 ? React.createElement("div", null,
            React.createElement(ProgressIndicator, { label: strings.DynamicFormLoading, description: strings.DynamicFormPleaseWait })) :
            React.createElement("div", null,
                fieldCollection.map(function (v, i) {
                    return React.createElement(DynamicField, __assign({}, v, { disabled: v.disabled || isSaving }));
                }),
                React.createElement(Stack, { className: styles.buttons, horizontal: true, tokens: stackTokens },
                    React.createElement(PrimaryButton, { disabled: isSaving, text: strings.Save, onClick: function () { return _this.onSubmitClick(); } }),
                    React.createElement(DefaultButton, { disabled: isSaving, text: strings.Cancel, onClick: this.props.onCancelled })))));
    };
    return DynamicForm;
}(React.Component));
export { DynamicForm };
//# sourceMappingURL=DynamicForm.js.map