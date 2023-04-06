// Codes By Mahdi Tasha
// Importing Part
import SectionComponent from './components/sectionComponent';
import HeaderComponent from './components/headerComponent';
import IconComponent from "./components/chunks/iconComponent";
import EditorComponent from './components/chunks/editorComponent';
import ContainerComponent from './components/chunks/containerComponent';
import PreviewCodeComponent from './components/chunks/previewCodeComponent';
import CommentComponent from './components/chunks/commentComponent';
import CommentAuthorNameComponent from "./components/chunks/commentAuthorNameComponent";
import SecondSectionIcon from './assets/img/section-icons/img-sect-2.png';
import FeaturesComponent from "./components/feturesComponent";

// Variables
const firstSectionsCode = `<figure class="absolute md:top-[50%] top-[69%] md:translate-y-[-50%] translate-y-0 left-0 z-10 md:flex overflow-hidden bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 border-t-[1.5px] border-t-slate-500/30 md:border-t-0 md:border-t-transparent md:w-[56%] w-full">
    <div class="w-24 h-24 md:w-[500px] md:h-auto md:rounded-none rounded-full mx-auto bg-amber-600"></div>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4 md:border-t-[1.5px] md:border-t-slate-500/30 md:rounded-r-xl">
        <blockquote>
             <p class="text-lg font-medium text-white">
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

const secondSectionsCode = `<div class="p-4 rounded-xl bg-slate-800 md:w-[48%] w-full absolute left-0 md:top-auto top-0">
    <div class="border border-slate-100/30 space-y-4 p-4 overflow-auto">
      <div class="w-96 bg-indigo-500 text-white shadow rounded px-5">
          w-96
      </div>
      <div class="w-80 bg-indigo-500 text-white shadow rounded px-5">
          w-80
      </div>
      <div class="w-72 bg-indigo-500 text-white shadow rounded px-5">
          w-72
      </div>
      <div class="w-64 bg-indigo-500 text-white shadow rounded px-5">
          w-64
      </div>
      <div class="w-60 bg-indigo-500 text-white shadow rounded px-5">
          w-60
      </div>
      <div class="w-56 bg-indigo-500 text-white shadow rounded px-5">
          w-56
      </div>
      <div class="w-52 bg-indigo-500 text-white shadow rounded px-5">
          w-52
      </div>
      <div class="w-48 bg-indigo-500 text-white shadow rounded px-5">
          w-48
      </div>
    </div>
</div>
`

// Creating Functional Component And Exporting It As Defualt
export default function AppComponent() {
    // Returning JSX
    return (
        <>
            <SectionComponent className={'border-b border-b-slate-100/5 bg-[url("./assets/img/img-sect-1.png")] bg-no-repeat bg-cover bg-bottom md:pb-0 pb-8'}>
                <ContainerComponent>
                    <HeaderComponent />
                    <div className={'md:mb-[120px] mb-[50px]'}>
                        <h1 className={'font-extrabold text-white md:text-6xl text-4xl text-center mb-5'}>Rapidly build modern websites <br/> without ever leaving your HTML.</h1>
                        <p className={'text-slate-400 text-center md:text-xl text-lg mb-9'}>
                            A utility-first CSS framework packed with classes like
                            <span className={'text-cyan-400'}> flex </span>,
                            <span className={'text-cyan-400'}> pt-4 </span>,
                            <span className={'text-cyan-400'}> text-center </span>
                            and <br/>
                            <span className={'text-cyan-400'}> rotate-90 </span>
                            that can be composed to build any design, directly in your markup.
                        </p>
                        <div className={'flex justify-center'}>
                            <a className='md:mr-4 mr-0 md:w-32 w-full' href="#"><button tabIndex={'-1'} className={'rounded-lg border-t-2 border-t-white/30 bg-sky-500 hover:bg-sky-400 w-full py-3 text-white font-bold text-1xl'}>Get Started</button></a>
                            <button className={'md:flex hidden w-80 items-center justify-between bg-slate-800 hover:bg-slate-700 border-t-2 border-t-white/10 rounded-lg px-3'}>
                                <h6 className='flex'>
                                    <IconComponent type={'search'} />
                                    <h6 className={'ml-2 text-slate-300'}>Quick Search ...</h6>
                                </h6>
                                <kbd className='text-slate-500'>Ctrl K</kbd>
                            </button>
                        </div>
                    </div>
                    <div className={'relative md:h-[500px] h-[750px]'}>
                        <PreviewCodeComponent code={firstSectionsCode}/>
                        <EditorComponent language={'html'} code={firstSectionsCode} className={'md:w-[50%] w-[97.4vw] absolute md:right-0 right-auto md:left-auto -left-4'}/>
                    </div>
                </ContainerComponent>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <div className={'md:mt-[150px] mt-[100px] mb-[150px] text-center'}>
                        <h1 className={'font-extrabold text-white md:text-5xl text-4xl text-center mb-5'}><blockquote>“Best practices” don’t actually work.</blockquote></h1>
                        <p className={'text-slate-400 text-center md:text-xl text-md mb-9'}>
                            I’ve written <span className={'text-cyan-500'}>a few thousand words</span> on why traditional “semantic class names” are the <br/>
                            reason CSS is hard to maintain, but the truth is you’re never going to believe me until you <br/>
                            actually try it. If you can suppress the urge to retch long enough to give it a chance, I <br/>
                            really think you’ll wonder how you ever worked with CSS any other way.
                        </p>
                        <CommentAuthorNameComponent isCentred img={'bg-purple-700'} job={'Creator of Tailwind CSS'} name={'Adam Wathan'}/>
                    </div>
                    <div className={'relative md:h-[800px] h-[600px] overflow-hidden'}>
                        <div className={'w-full h-full bg-gradient-to-b from-transparent to-slate-900 pb-[70px] flex items-end justify-center pointer-events-none absolute top-0'}>
                            <a className={'pointer-events-auto'} href="#"><button className='bg-slate-700 rounded-[10px] px-5 py-3 font-bold text-[15px] text-white hover:bg-slate-600' tabIndex={'-1'}>Show More ...</button></a>
                        </div>
                        <ul className={'grid md:grid-cols-3 grid-cols-1 gap-8'}>
                            <li>
                                <ul className='flex flex-col gap-8'>
                                    <CommentComponent name={'Ryan Florence'} job={'Remix & React Training'}>I feel like an idiot for not using Tailwind CSS until now.</CommentComponent>
                                    <CommentComponent name={'Guillermo Rauch'} job={'Vercel'}>If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.</CommentComponent>
                                    <CommentComponent name={'Sara Vieira'} job={'CodeSandBox'}>I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework.</CommentComponent>
                                    <CommentComponent name={'Ryan Florence'} job={'Remix & React Training'}>I feel like an idiot for not using Tailwind CSS until now.</CommentComponent>
                                    <CommentComponent name={'Guillermo Rauch'} job={'Vercel'}>If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.</CommentComponent>
                                    <CommentComponent name={'Sara Vieira'} job={'CodeSandBox'}>I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework.</CommentComponent>
                                </ul>
                            </li>
                            <li>
                                <ul className='flex flex-col gap-8'>
                                    <CommentComponent name={'Debbie O\'Brien'} job={'Senior Program Manager at Microsoft'}>Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.</CommentComponent>
                                    <CommentComponent name={'Ben Furfie'} job={'Developer'}>I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.</CommentComponent>
                                    <CommentComponent name={'Didier Catz'} job={'Co-Founder @StyptApp'}>Tailwind makes writing code feel like I’m using a design tool.</CommentComponent>
                                    <CommentComponent name={'Debbie O\'Brien'} job={'Senior Program Manager at Microsoft'}>Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.</CommentComponent>
                                    <CommentComponent name={'Ben Furfie'} job={'Developer'}>I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.</CommentComponent>
                                    <CommentComponent name={'Didier Catz'} job={'Co-Founder @StyptApp'}>Tailwind makes writing code feel like I’m using a design tool.</CommentComponent>
                                </ul>
                            </li>
                            <li>
                                <ul className='flex flex-col gap-8'>
                                    <CommentComponent name={'Kent C. Dodds'} job={'Developer and Educator'}>Skip to the end. Use @tailwindcss.</CommentComponent>
                                    <CommentComponent name={'Shruti Balasa'} job={'Full Stack Web Developer & Tech Educator'}>I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.</CommentComponent>
                                    <CommentComponent name={'Pieter Levels'} job={'Maker'}>I don't use it but if I would use something I'd use Tailwind!</CommentComponent>
                                    <CommentComponent name={'Kent C. Dodds'} job={'Developer and Educator'}>Skip to the end. Use @tailwindcss.</CommentComponent>
                                    <CommentComponent name={'Shruti Balasa'} job={'Full Stack Web Developer & Tech Educator'}>I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.</CommentComponent>
                                    <CommentComponent name={'Pieter Levels'} job={'Maker'}>I don't use it but if I would use something I'd use Tailwind!</CommentComponent>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <FeaturesComponent
                        color={'text-indigo-400'}
                        img={SecondSectionIcon}
                        title={'Constraint-based'}
                        subtitle={'An API for your design system.'}
                        borderColor={'border-indigo-400'}>
                            Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.
                    </FeaturesComponent>
                </ContainerComponent>
                <div className={'border-t border-t-slate-100/20 pt-10 md:h-[650px] h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
                    <ContainerComponent>
                        <div className={'relative md:h-auto h-[1130px]'}>
                            <EditorComponent language={'html'} code={secondSectionsCode} className={'md:w-[50%] w-[97.4vw] absolute md:right-0 right-auto md:left-auto -left-4 md:top-[-104px] top-[400px] md:bottom-auto bottom-0'}/>
                            <PreviewCodeComponent code={secondSectionsCode}/>
                        </div>
                    </ContainerComponent>
                </div>
            </SectionComponent>
        </>
    );
}
