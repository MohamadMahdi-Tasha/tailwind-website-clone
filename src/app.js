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

// Variables
const firstSectionsCode = `<figure class="absolute top-[50%] translate-y-[-50%] left-0 z-10 md:flex overflow-hidden bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 border-t-[1.5px] border-t-slate-500/30 md:border-t-0 md:border-t-transparent w-[56%]">
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

const secondSectionsCode = `<div class="p-4 rounded-xl bg-slate-800 w-[46%] absolute left-0">
    <div class="border border-slate-100/30 space-y-4 p-4">
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
            <SectionComponent className={'border-b border-b-slate-100/5 bg-[url("./assets/img/img-sect-1.png")] bg-no-repeat bg-cover bg-bottom'}>
                <ContainerComponent>
                    <HeaderComponent />
                    <div className={'mb-[120px]'}>
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
                    </div>
                    <div className={'relative h-[500px]'}>
                        <PreviewCodeComponent code={firstSectionsCode}/>
                        <EditorComponent language={'html'} code={firstSectionsCode} className={'w-[50%] absolute right-0'}/>
                    </div>
                </ContainerComponent>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <div className={'mt-[150px] mb-[150px] text-center'}>
                        <h1 className={'text-white text-[50px] font-bold mb-5'}><blockquote>“Best practices” don’t actually work.</blockquote></h1>
                        <p className={'text-slate-500 text-[19px] font-semibold mb-9'}>
                            I’ve written <span className={'text-cyan-500'}>a few thousand words</span> on why traditional “semantic class names” are the <br/>
                            reason CSS is hard to maintain, but the truth is you’re never going to believe me until you <br/>
                            actually try it. If you can suppress the urge to retch long enough to give it a chance, I <br/>
                            really think you’ll wonder how you ever worked with CSS any other way.
                        </p>
                        <CommentAuthorNameComponent isCentred img={'bg-purple-700'} job={'Creator of Tailwind CSS'} name={'Adam Wathan'}/>
                    </div>
                    <div className={'relative h-[800px] mb-[150px] overflow-hidden'}>
                        <div className={'w-full h-full bg-gradient-to-b from-transparent to-slate-900 flex items-end justify-center pointer-events-none absolute top-0'}>
                            <a className={'pointer-events-auto'} href="#"><button className='bg-slate-700 rounded-[10px] px-5 py-3 font-bold text-[15px] text-white hover:bg-slate-600' tabIndex={'-1'}>Show More ...</button></a>
                        </div>
                        <ul className={'grid grid-cols-3 gap-8'}>
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
                    <div className='w-[70%] mb-10'>
                        <img className={'border-[3px] w-[50px] h-[50px] mb-6 border-indigo-400 rounded-full'} src={SecondSectionIcon} alt="Constraint-based"/>
                        <h6 className={'text-indigo-400 font-bold text-sm mb-3'}>Constraint-based</h6>
                        <h1 className={'text-white font-bold text-3xl mb-5'}>An API for your design system.</h1>
                        <p className={'text-slate-500 font-medium mb-8'}>Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.</p>
                        <a href="#"><button className='bg-slate-700 rounded-3xl px-4 py-2 font-bold text-[12px] text-white hover:bg-slate-600' tabIndex={'-1'}>Learn More ></button></a>
                        <div className={'mt-9 flex gap-8'}>
                            <button className={'flex flex-col items-center justify-center text-sm text-slate-500 hover:text-indigo-400'}><IconComponent type={'sizing'} />Sizing</button>
                            <button className={'flex flex-col items-center justify-center text-sm text-slate-500 hover:text-indigo-400'}><IconComponent type={'colors'} />Colors</button>
                            <button className={'flex flex-col items-center justify-center text-sm text-slate-500 hover:text-indigo-400'}><IconComponent type={'typography'} />Typography</button>
                            <button className={'flex flex-col items-center justify-center text-sm text-slate-500 hover:text-indigo-400'}><IconComponent type={'shadows'} />Shadows</button>
                        </div>
                    </div>
                </ContainerComponent>
                <div className={'border-t border-t-slate-100/20 pt-10 h-[650px] bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
                    <ContainerComponent className={'relative'}>
                        <EditorComponent language={'html'} code={secondSectionsCode} className={'w-[50%] absolute right-0 top-[-76px]'} />
                        <PreviewCodeComponent code={secondSectionsCode}/>
                    </ContainerComponent>
                </div>
            </SectionComponent>
        </>
    );
}
