import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  breaks: true,
});

function App() {
  const initialContent = `# Welcome to my React Markdown Previewer!\n\n\r## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, \`<div></div>\`, between 2 backticks.\n\n\`\`\`\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\n    return multiLineCode;\n  }\n}\n\`\`\`\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t- With different indentation levels.\n\t\t\t- That look like this.\n\n\n1. And there are numbered lists too.\n2. Use just 1s if you want!\n3. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

  const [content, setContent] = useState(initialContent);
  const [preview, setPreview] = useState(marked(initialContent));

  const handleEditorChange = (event) => {
    const newValue = event.target.value;
    setContent(newValue);
    setPreview(marked(newValue));
  };

  return (
    <div className="App">
      <div className="editorWrap">
        <div className="toolbar">Editor</div>
        <textarea
          id="editor"
          typeof="text"
          defaultValue={content}
          onChange={handleEditorChange}
        ></textarea>
      </div>
      <div className="previewWrap">
        <div className="toolbar">Previewer</div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: preview }}></div>
      </div>
      <div id="footer">
        <a href="https://github.com/StefanVlad0" id="dev">
          by Vlad Stefan
        </a>
      </div>
    </div>
  );
}

export default App;
