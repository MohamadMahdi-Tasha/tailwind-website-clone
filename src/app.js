// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from './components/sectionComponent';
import HeaderComponent from './components/headerComponent';
import IconComponent from "./components/chunks/iconComponent";
import EditorComponent from './components/chunks/editorComponent';
import ContainerComponent from './components/chunks/containerComponent';
import PreviewCodeComponent from './components/chunks/previewCodeComponent';

// Variables
const firstSectionsCode = `<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
             <p class="text-lg font-medium">
                 “Tailwind CSS is the only framework that I've seen scale
                 on large teams. It’s easy to customize, adapts to any design,
                 and the build size is tiny.”
             </p>
        </blockquote>
        <figcaption class="font-medium">
             <div class="text-sky-500 dark:text-sky-400">
                 Sarah Dayan
             </div>
             <div class="text-slate-700 dark:text-slate-500">
                 Staff Engineer, Algolia
             </div>
        </figcaption>
    </div>
</figure>`

// Creating Functional Component And Exporting It As Defualt
export default function AppComponent() {
    // Returning JSX
    return (
        <SectionComponent>
            <HeaderComponent />
            <ContainerComponent className='mb-[120px]'>
                <h1 className={'font-extrabold text-white text-6xl text-center mb-5'}>Rapidly build modern websites <br/> without ever leaving your HTML.</h1>
                <p className={'text-slate-400 text-center text-xl mb-9'}>
                    A utility-first CSS framework packed with classes like
                    <span className={'text-cyan-400'}> flex </span>,
                    <span className={'text-cyan-400'}> pt-4 </span>,
                    <span className={'text-cyan-400'}> text-center </span>
                    and <br/>
                    <span className={'text-cyan-400'}> rotate-90 </span>
                    that can be composed to build any design, directly in your markup.
                </p>
                <div className={'flex justify-center'}>
                    <a className='mr-7 w-32' href="#"><button tabIndex={'-1'} className={'rounded-lg border-t-2 border-t-white/30 bg-sky-500 hover:bg-sky-400 w-full py-3 text-white font-bold text-1xl'}>Get Started</button></a>
                    <button className={'flex w-80 items-center justify-between bg-slate-800 hover:bg-slate-700 border-t-2 border-t-white/10 rounded-lg px-3'}>
                        <h6 className='flex'>
                            <IconComponent type={'search'} />
                            <h6 className={'ml-2 text-slate-300'}>Quick Search ...</h6>
                        </h6>
                        <kbd className='text-slate-500'>Ctrl K</kbd>
                    </button>
                </div>
            </ContainerComponent>
            <ContainerComponent className='flex'>
                <PreviewCodeComponent code={firstSectionsCode}/>
                <EditorComponent language={'html'} code={firstSectionsCode} />
            </ContainerComponent>
        </SectionComponent>
    );
}
