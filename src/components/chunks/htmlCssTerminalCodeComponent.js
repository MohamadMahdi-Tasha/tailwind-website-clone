// Codes BY Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";
import Prism from 'prismjs';
import '../../assets/css/prismTheme.css';
import LineNumbersFunction from "../../assets/js/prsimLineNumber";
import IconComponent from "./iconComponent";

// Variables
const htmlCode = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/build.css">
    </head>
    <body>
        <button class="flex items-center px-4 py-3 text-white bg-blue-500 hover:bg-blue-400"></button>
    </body>
</html>`
const terminalCode = `Rebuilding... Done in 5ms.
Rebuilding... Done in 5ms.
Rebuilding... Done in 3ms.
Rebuilding... Done in 7ms.
Rebuilding... Done in 4ms.
Rebuilding... Done in 5ms.
Rebuilding... Done in 5ms.`
const cssCode = `.flex {
  display: flex
}

.items-center {
  align-items: center
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity))
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity))
}

.hover\\:bg-blue-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity))
}`

// Creating Functional Component And Exporting It As Defualt
export default function HtmlCssTerminalCodeComponent() {
    // Configuring Prism When Component Is Changed
    useEffect(() => {
        Prism.highlightAll();
        LineNumbersFunction();
    });

    // Returning JSX
    return(
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <button>index.html <IconComponent type={'x'}/></button>
                            <button>tailwind.config.js</button>
                            <button>package.json</button>
                        </div>
                        <button><IconComponent type={'side-code'}/></button>
                        <button><IconComponent type={'horizontal-dots'}/></button>
                    </div>
                    <pre>
                        <code className={`line-numbers language-html`}>
                            {htmlCode}
                        </code>
                    </pre>
                </div>
                <div>
                    <div>
                        <div><button>Terminal</button></div>
                        <button><IconComponent type={'horizontol-dots'}/></button>
                    </div>
                    <pre><code className={`language-`}>{terminalCode}</code></pre>
                </div>
            </div>
            <div>
                <div>
                    <div><button>build.css <IconComponent type={'x'}/></button></div>
                    <button><IconComponent type={'horizontal-dots'}/></button>
                </div>
                <pre><code className={`line-numbers language-css`}>{cssCode}</code></pre>
            </div>
        </div>
    );
}