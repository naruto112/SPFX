/// <reference types="react" />
import { IFilePickerResult, IFilePickerTab } from "../FilePicker.types";
export interface IMultipleUploadFilePickerTabProps extends IFilePickerTab {
    onChange: (value: IFilePickerResult[]) => void;
    renderCustomMultipleUploadTabContent: (filePickerResult: IFilePickerResult[]) => JSX.Element | null;
}
//# sourceMappingURL=IMultipleUploadFilePickerTabProps.d.ts.map