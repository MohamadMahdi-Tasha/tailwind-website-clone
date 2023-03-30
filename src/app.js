// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from './components/sectionComponent';
import HeaderComponent from './components/headerComponent';
import IconComponent from "./components/chunks/iconComponent";

// Creating Functional Component And Exporting It As Defualt
export default function AppComponent() {
    // Returning JSX
    return (
        <SectionComponent>
            <HeaderComponent />
            <div>
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
                    <a className='mr-7 w-32' href="#"><button className={'rounded-lg border-t-2 border-t-white/30 bg-sky-500 hover:bg-sky-400 w-full py-3 text-white font-bold text-1xl'}>Get Started</button></a>
                    <button className={'flex w-80 items-center justify-between bg-slate-800 hover:bg-slate-700 border-t-2 border-t-white/30 rounded-lg px-3'}>
                        <h6 className='flex'>
                            <IconComponent type={'search'} />
                            <h6 className={'ml-2 text-slate-300'}>Quick Search ...</h6>
                        </h6>
                        <kbd className='text-slate-500'>Ctrl K</kbd>
                    </button>
                </div>
            </div>
        </SectionComponent>
    );
}
