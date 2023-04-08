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
import ThirdSectionIcon from './assets/img/section-icons/img-sect-3.png';
import FourthSectionIcon from './assets/img/section-icons/img-sect-4.png';
import FifthSectionIcon from './assets/img/section-icons/img-sect-5.png';
import FeaturesComponent from "./components/feturesComponent";
import FeaturesCodeComponent from "./components/chunks/featuresCodeComponent";
import { firstSectionsCode, secondSectionsCode, thirdSectionsCode, fifthSectionsCode } from "./assets/js/codesOfExamples";
import HtmlCssTerminalCodeComponent from "./components/chunks/htmlCssTerminalCodeComponent";
import MediaQuerysComponent from "./components/chunks/mediaQuerysComponent";
import BrowserComponent from "./components/chunks/browserComponent";

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
                        <EditorComponent language={'html'} code={firstSectionsCode} className={'md:w-[50%] w-[100vw] absolute md:right-0 right-auto md:left-auto -left-4'}/>
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
                        borderColor={'border-indigo-400'}
                        cta={'Learn More'}>
                            Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.
                    </FeaturesComponent>
                </ContainerComponent>
                <FeaturesCodeComponent code={secondSectionsCode}/>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <FeaturesComponent
                        color={'text-pink-400'}
                        img={ThirdSectionIcon}
                        title={'Build anything'}
                        subtitle={'Build whatever you want, seriously.'}
                        borderColor={'border-pink-400'}
                        cta={'Get Started'}>
                        Because Tailwind is so low-level, it never encourages you to design the same site twice. Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.
                    </FeaturesComponent>
                </ContainerComponent>
                <FeaturesCodeComponent code={thirdSectionsCode}/>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <FeaturesComponent
                        color={'text-blue-400'}
                        img={FourthSectionIcon}
                        title={'Performance'}
                        subtitle={'It’s tiny — never ship unused CSS again.'}
                        borderColor={'border-blue-400'}
                        cta={'Learn more'} hasNoButtons>
                        Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.
                    </FeaturesComponent>
                </ContainerComponent>
                <div className={'border-t border-t-slate-100/20 pt-10 md:h-[650px] relative h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
                    <ContainerComponent><HtmlCssTerminalCodeComponent /></ContainerComponent>
                </div>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <FeaturesComponent
                        color={'text-indigo-400'}
                        img={FifthSectionIcon}
                        title={'Mobile-first'}
                        subtitle={'Responsive everything.'}
                        borderColor={'border-indigo-400'}
                        cta={'Learn more'} hasNoButtons>
                        Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.
                    </FeaturesComponent>
                </ContainerComponent>
                <div className={'border-b mb-10 border-b-slate-500/30'}>
                    <ContainerComponent>
                        <div className="relative">
                            <MediaQuerysComponent isSelected={true} sizeName={'sm'} fromLeft={'640'}/>
                            <MediaQuerysComponent isSelected={true} sizeName={'md'} fromLeft={'768'}/>
                            <MediaQuerysComponent isSelected={true} sizeName={'lg'} fromLeft={'1024'}/>
                        </div>
                    </ContainerComponent>
                </div>
                <div className={'border-t relative border-t-slate-500/30 pt-10 md:h-[1000px] h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
                    <div className={'relative left-0 w-full max-w-[1200px] mx-auto'}>
                        <BrowserComponent className={'absolute left-[50%] translate-x-[-50%] top-[-95px] w-[98%]'}><PreviewCodeComponent code={fifthSectionsCode} /></BrowserComponent>
                        <EditorComponent className={'absolute left-0 top-[420px] w-full'} height={'h-[400px]'} language={'html'} code={fifthSectionsCode} />
                    </div>
                </div>
            </SectionComponent>
        </>
    );
}
