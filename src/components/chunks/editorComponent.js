// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";
import Prism from 'prismjs';
import '../../assets/prismTheme.css';

// Creating Functional Component And Exporting It As Defualt
export default function EditorComponent({code, language}) {
    // Configuring Prism When Component Is Changed
    useEffect(() => Prism.highlightAll());

    // Returning JSX
    return (
        <div>
            <pre>
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
}
