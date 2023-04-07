// Codes By Mahdi Tasha
// Importing Part
import ContainerComponent from "./containerComponent";
import EditorComponent from "./editorComponent";
import PreviewCodeComponent from "./previewCodeComponent";

// Creating Functional Component And Exporting It As Defualt
export default function FeaturesCodeComponent({code}) {
    // Returning JSX
    return (
        <div className={'border-t border-t-slate-100/20 pt-10 md:h-[650px] h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
            <ContainerComponent>
                <div className={'relative md:h-auto h-[1130px]'}>
                    <EditorComponent language={'html'} height={'h-[600px]'} code={code} className={'md:w-[50%] w-[100vw] absolute md:right-0 right-auto md:left-auto -left-4 md:top-[-104px] top-[400px] md:bottom-auto bottom-0'}/>
                    <PreviewCodeComponent code={code}/>
                </div>
            </ContainerComponent>
        </div>
    );
}