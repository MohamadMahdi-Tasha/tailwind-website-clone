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
import SixthSectionIcon from './assets/img/section-icons/img-sect-6.png';
import SeventhSectionIcon from './assets/img/section-icons/img-sect-7.png';
import EighthSectionIcon from './assets/img/section-icons/img-sect-8.png';
import NinethSectionIcon from './assets/img/section-icons/img-sect-9.png';
import TenthSectionIcon from './assets/img/section-icons/img-sect-10.png';
import EleventhSectionIcon from './assets/img/section-icons/img-sect-11.png';
import TwelvethSectionIcon from './assets/img/section-icons/img-sect-12.png';
import FeaturesComponent from "./components/feturesComponent";
import FeaturesCodeComponent from "./components/chunks/featuresCodeComponent";
import * as exampleCodes from "./assets/js/codesOfExamples";
import HtmlCssTerminalCodeComponent from "./components/chunks/htmlCssTerminalCodeComponent";
import MediaQuerysComponent from "./components/chunks/mediaQuerysComponent";
import BrowserComponent from "./components/chunks/browserComponent";
import VscodeEditorComponent from './components/vscodeEditorComponent';
import {eightsSectionsCode} from "./assets/js/codesOfExamples";

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
                        <PreviewCodeComponent code={exampleCodes.firstSectionsCode}/>
                        <EditorComponent language={'html'} code={exampleCodes.firstSectionsCode} className={'md:w-[50%] w-[100vw] absolute md:right-0 right-auto md:left-auto -left-4'}/>
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
                <FeaturesCodeComponent code={exampleCodes.secondSectionsCode}/>
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
                <FeaturesCodeComponent code={exampleCodes.thirdSectionsCode}/>
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
                <div className={'border-t border-t-slate-100/20 pt-10 md:h-[650px] relative h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}><ContainerComponent><HtmlCssTerminalCodeComponent /></ContainerComponent></div>
            </SectionComponent>
            <SectionComponent className={'md:mt-0 mt-[1400px]'}>
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
                <div className={'border-b md:block hidden mb-10 border-b-slate-500/30'}>
                    <ContainerComponent>
                        <div className="relative">
                            <MediaQuerysComponent isSelected={true} sizeName={'sm'} fromLeft={'640'}/>
                            <MediaQuerysComponent isSelected={true} sizeName={'md'} fromLeft={'768'}/>
                            <MediaQuerysComponent isSelected={true} sizeName={'lg'} fromLeft={'1024'}/>
                        </div>
                    </ContainerComponent>
                </div>
                <div className={'border-t relative border-t-slate-500/30 pt-10 md:h-[1000px] h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
                    <div className={'relative max-w-[1200px] mx-auto'}>
                        <BrowserComponent className={'absolute md:left-[50%] left-0 md:translate-x-[-50%] translate-x-0 md:top-[-95px] top-0 md:w-[98%] w-full'}><PreviewCodeComponent code={exampleCodes.fifthSectionsCode} /></BrowserComponent>
                        <EditorComponent className={'absolute left-0 md:top-[400px] top-[587px] w-full'} height={'h-[400px]'} language={'html'} code={exampleCodes.fifthSectionsCode} />
                    </div>
                </div>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <FeaturesComponent
                        color={'text-blue-400'}
                        img={SixthSectionIcon}
                        title={'State variants'}
                        subtitle={'Hover and focus states? We got ’em.'}
                        borderColor={'border-blue-400'}
                        cta={'Learn More'} hasNoButtons>
                        Want to style something on hover? Stick <span className={'text-white'}>hover:</span> at the beginning of the class you want to add. Works for <span className={'text-white'}>focus:</span>, <span className={'text-white'}>active:</span>, <span className={'text-white'}>disabled:</span>, <span className={'text-white'}>focus-within:</span>, <span className={'text-white'}>focus-visible:</span>, and even fancy states we invented ourselves like <span className={'text-white'}>group-hover</span>.
                    </FeaturesComponent>
                </ContainerComponent>
                <FeaturesCodeComponent code={exampleCodes.sixthSectionsCode}/>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <FeaturesComponent
                        color={'text-blue-400'}
                        img={SeventhSectionIcon}
                        title={'Component-driven'}
                        subtitle={'Worried about duplication? Don’t be.'}
                        borderColor={'border-blue-400'}
                        cta={'Learn More'}>
                        If you're repeating the same utilities over and over and over again, all you have to do is extract them into a component or template partial and boom — you've got a single source of truth so you can make changes in one place.
                    </FeaturesComponent>
                </ContainerComponent>
                <div className={'border-t border-t-slate-100/20 pt-10 md:h-[650px] h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
                    <ContainerComponent>
                        <div className={'relative md:h-auto h-[1130px]'}>
                            <EditorComponent openedFileIndex={4} openFiles={['Movies.js','Nav.js','NavItem.js','List.js','ListItem.js']} language={'html'} height={'h-[600px]'} code={exampleCodes.seventhSectionsCode} className={'md:w-[50%] w-[100vw] absolute md:right-0 right-auto md:left-auto -left-4 md:top-[-104px] top-[400px] md:bottom-auto bottom-0'}/>
                            <PreviewCodeComponent code={exampleCodes.seventhSectionsCodePreview}/>
                        </div>
                    </ContainerComponent>
                </div>
                <ContainerComponent>
                    <div className={'md:flex block justify-between pt-[100px] relative'}>
                        <div className={'md:w-[48%] w-full'}>
                            <div className={'mb-7'}>
                                <h1 className={'text-3xl mb-2 font-extrabold text-slate-200'}>Not into component frameworks?</h1>
                                <p className={'mb-3 text-base font-normal text-slate-400'}>Use Tailwind's <span className={'text-white font-mono'}>@apply</span> directive to extract repeated utility patterns into custom CSS classes just by copying and pasting the list of class names.</p>
                                <a href="#"><button className='bg-slate-700 rounded-3xl px-4 py-2 font-bold text-[12px] text-white hover:bg-slate-600 flex items-center'><span className={'mr-2'}>Learn More</span> <IconComponent type={'chevron-right'}/></button></a>
                            </div>
                            <div className="relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800 dark:highlight-white/10">
                                <article>
                                    <h2 className="text-lg font-semibold text-slate-900 pt-4 pb-2 px-4 sm:px-6 lg:px-4 xl:px-6 dark:text-slate-100 transition-opacity duration-[1.5s] delay-500 opacity-25">Weekly one-on-one</h2>
                                    <dl className="flex flex-wrap divide-y divide-slate-200 border-b border-slate-200 text-sm sm:text-base lg:text-sm xl:text-base dark:divide-slate-200/5 dark:border-slate-200/5">
                                        <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pb-4">
                                            <dt className="sr-only">Date and time</dt>
                                            <dd className="transition-opacity duration-[1.5s] delay-500 opacity-25 text-white">
                                                <time dateTime="2020-11-15T10:00:00-05:00">Thu Nov 15, 2020 10:00am</time>
                                                <time dateTime="2020-11-15T11:00:00-05:00">11:00am<span className="sr-only sm:not-sr-only"> EST</span></time>
                                            </dd>
                                        </div>
                                        <div className="w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6">
                                            <dt className="w-2/5 sm:w-1/4 flex-none text-slate-900 font-medium dark:text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25">Location</dt>
                                            <dd className="transition-opacity duration-[1.5s] delay-500 opacity-25 text-white">Kitchener, <abbr title="Ontario">ON</abbr></dd>
                                        </div>
                                        <div className="w-full flex-none flex items-center p-4 sm:p-6 lg:p-4 xl:p-6">
                                            <dt className="w-2/5 sm:w-1/4 flex-none text-slate-900 font-medium dark:text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25">Description</dt>
                                            <dd className="italic transition-opacity duration-[1.5s] delay-500 opacity-25 text-white">No meeting description</dd>
                                        </div>
                                        <div className="w-full flex-none flex items-center p-4 sm:py-5 sm:px-6 lg:p-4 xl:py-5 xl:px-6">
                                            <dt className="w-2/5 sm:w-1/4 flex-none text-slate-900 font-medium dark:text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25">Attendees</dt>
                                            <dd className="text-sm font-medium text-slate-700 bg-slate-100 rounded-full py-1 px-3 dark:bg-slate-700 dark:text-slate-300 transition-opacity duration-[1.5s] delay-500 opacity-25">Andrew McDonald</dd>
                                        </div>
                                    </dl>
                                    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6 p-4 sm:px-6 sm:py-5 lg:p-4 xl:px-6 xl:py-5">
                                        <div className="text-base font-medium rounded-lg bg-slate-100 text-slate-900 py-3 text-center cursor-pointer dark:bg-slate-600 dark:text-slate-400 dark:highlight-white/10">Decline</div>
                                        <div className="text-base font-medium rounded-lg bg-sky-500 text-white py-3 text-center cursor-pointer dark:highlight-white/20">Accept</div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <EditorComponent
                            className={'md:w-[50%] w-[100vw] mt-[70px] md:static absolute top-[550px] -left-4'}
                            openedSide={2}
                            languageSide1={'css'}
                            fileSide1={'styles.css'}
                            codeSide1={exampleCodes.seventhCssCode}
                            languageSide2={'html'}
                            fileSide2={'index.html'}
                            codeSide2={exampleCodes.seventhHtmlCode} />
                    </div>
                </ContainerComponent>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <FeaturesComponent
                        color={'text-slate-400'}
                        img={EighthSectionIcon}
                        title={'Dark mode'}
                        subtitle={'Now with Dark Mode.'}
                        borderColor={'border-slate-400'}
                        cta={'Learn More'} hasNoButtons>
                        Don’t want to be one of those websites that blinds people when they open it on their phone at 2am? Enable dark mode in your configuration file then throw <span className={'font-mono text-white'}>dark:</span> in front of any color utility to apply it when dark mode is active. Works for background colors, text colors, border colors, and even gradients.
                    </FeaturesComponent>
                </ContainerComponent>
                <FeaturesCodeComponent code={exampleCodes.eightsSectionsCode}/>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <FeaturesComponent
                        color={'text-pink-400'}
                        img={NinethSectionIcon}
                        title={'Customization'}
                        subtitle={'Extend it, tweak it, change it.'}
                        borderColor={'border-pink-400'}
                        cta={'Learn More'}>
                        Tailwind includes an expertly crafted set of defaults out-of-the-box, but literally everything can be customized — from the color palette to the spacing scale to the box shadows to the mouse cursor. <br/><br/>
                        Use the tailwind.config.js file to craft your own design system, then let Tailwind transform it into your own custom CSS framework.
                    </FeaturesComponent>
                </ContainerComponent>
                <div className={'border-t border-t-slate-100/20 pt-10 md:h-[650px] h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
                    <ContainerComponent>
                        <div className={'relative md:h-auto h-[1130px]'}>
                            <EditorComponent language={'json'} height={'h-[600px]'} code={exampleCodes.ninethSectionsCode} className={'md:w-[50%] w-[100vw] absolute md:right-0 right-auto md:left-auto -left-4 md:top-[-104px] top-[400px] md:bottom-auto bottom-0'}/>
                            <PreviewCodeComponent code={exampleCodes.ninethSectionsPreview}/>
                        </div>
                    </ContainerComponent>
                </div>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <FeaturesComponent
                        color={'text-indigo-400'}
                        img={TenthSectionIcon}
                        title={'Modern features'}
                        subtitle={'Cutting-edge is our comfort zone.'}
                        borderColor={'border-indigo-400'}
                        cta={'Learn More'}>
                        Tailwind is unapologetically modern, and takes advantage of all the latest and greatest CSS features to make the developer experience as enjoyable as possible. <br/> <br/>
                        We've got first-class CSS grid support, composable transforms and gradients powered by CSS variables, support for modern state selectors like <span className={'text-white'}>:focus-visible</span>, and tons more.
                    </FeaturesComponent>
                </ContainerComponent>
                <FeaturesCodeComponent code={exampleCodes.tenthSectionsCode}/>
            </SectionComponent>
            <SectionComponent>
                <ContainerComponent>
                    <div className={'pb-[100px]'}>
                        <FeaturesComponent
                            color={'text-blue-400'}
                            img={EleventhSectionIcon}
                            title={'Editor tools'}
                            subtitle={'World-class IDE integration.'}
                            borderColor={'border-blue-400'}
                            cta={'Learn More'} hasNoButtons>
                            Worried about remembering all of these class names? The Tailwind CSS IntelliSense extension for VS Code has you covered. <br/><br/>
                            Get intelligent autocomplete suggestions, linting, class definitions and more, all within your editor and with no configuration required.
                        </FeaturesComponent>
                    </div>
                </ContainerComponent>
                <div className={'border-t border-t-slate-100/20 md:h-[650px] h-auto bg-[url("./assets/img/img-sect-2.png")] bg-top bg-no-repeat bg-cover'}>
                    <div className={'max-w-[1200px] mx-auto relative'}><VscodeEditorComponent selfLang={'html'} selfCode={exampleCodes.eightsSectionsCode}/></div>
                </div>
            </SectionComponent>
        </>
    );
}