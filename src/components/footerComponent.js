// Codes By Mahdi Tasha
// Importing Part
import IconComponent from "./chunks/iconComponent";
import ContainerComponent from "./chunks/containerComponent";

// Creating Functional Component And Exporting It As Defualt
export default function FooterComponent() {
    // Returning JSX
    return(
        <footer className={'pt-10'}>
            <ContainerComponent>
                <ul className={'flex md:flex-row flex-col items-start justify-between gap-5 border-b border-b-slate-500/30 pb-8'}>
                    <li>
                        <ul className={'space-y-3'}>
                            <li className={'font-semibold text-base text-white'}><a href="#">Getting Started</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Installation</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Editor Setup</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Using with Preprocessors</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Optimizing for Production</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Browser Support</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Upgrade Guide</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className={'space-y-3'}>
                            <li className={'font-semibold text-base text-white'}><a href="#">Core Concepts</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Utility-First Fundamentals</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Handling Hover, Focus, and Other States</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Responsive Design</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Dark Mode</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Reusing Styles</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Adding Custom Styles</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Functions & Directives</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className={'space-y-3'}>
                            <li className={'font-semibold text-base text-white'}><a href="#">Customization</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Configuration</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Content Configuration</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Theme Configuration</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Customizing Screens</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Customizing Colors</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Customizing Spacing</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Plugins</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Presets</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul className={'space-y-3'}>
                            <li className={'font-semibold text-base text-white'}><a href="#">Community</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">GitHub</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Discord</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">Twitter</a></li>
                            <li className={'text-base text-slate-500'}><a href="#">YouTube</a></li>
                        </ul>
                    </li>
                </ul>
                <div className={'py-8'}>
                    <a href="#"><IconComponent type={'logo-typo'}/></a>
                </div>
            </ContainerComponent>
        </footer>
    );
}