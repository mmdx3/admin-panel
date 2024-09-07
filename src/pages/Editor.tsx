import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";
import Header from "../components/Header";

const Editor = () => {
  const test = (data: any) => {
    console.log(data);
  };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="اپلیکیشن‌ها" title="ویرایشگر متن" />
      <RichTextEditorComponent
        backgroundColor={{ modeSwitcher: true }}
        actionComplete={test}
        toolbarSettings={{
          items: [
            "Bold",
            "Italic",
            "Underline",
            "FontSize",
            "FontColor",
            "BackgroundColor",
            "|",
           
            "CreateLink",
            "Image",
            "|",
            "ClearFormat",
            "Print",
            "SourceCode",
            "|",
            "Undo",
            "Redo",
          ],
        }}
      >
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
