// Codes By Mahdi Tasha
// Creating Functional Component And Exporting It As Defualt
export default function IconComponent({type, className, width, height}) {
    // Conditional Rendering
    if (type === 'logo-typo') {
        return (
            <svg viewBox="0 0 248 31" className="text-white w-auto h-5">
                <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path>
            </svg>
        );
    } else if (type === 'moon') {
        return (
            <svg width={'24px'} height={'24px'} viewBox="0 0 24 24" fill="none" className={className}>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className={'stroke-current'}></path>
                <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className={'fill-current'}></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className={'fill-current'}></path>
            </svg>
        );
    } else if (type === 'sun') {
        return (
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={(className === undefined) ? 'w-6 h-6' : `w-6 h-6 ${className}`}>
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-white"></path>
                <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-white"></path>
            </svg>
        );
    } else if (type === 'desktop') {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={(className === undefined) ? 'w-6 h-6' : `w-6 h-6 ${className}`}>
                <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" strokeWidth="2" strokeLinejoin="round" className="stroke-white"></path>
                <path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-white"></path>
            </svg>
        );
    } else if (type === 'github') {
        return (
            <svg width={'20px'} height={'20px'} viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
        );
    } else if (type === 'search') {
        return (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400" aria-hidden="true">
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
            </svg>
        );
    } else if (type === 'sizing') {
        return (
            <svg width="48" height="48" fill="none" aria-hidden="true">
                <rect x="5" y="5" width="28" height="28" rx="4" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeWidth="2"></rect>
                <path d="M5 41h28M33 39v4M5 39v4M39 5h4M39 33h4M41 33V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    } else if (type === 'colors') {
        return (
            <svg width="48" height="48" fill="none" aria-hidden="true">
                <path d="M17.687 42.22 40.57 29.219a4 4 0 0 0 1.554-5.36L39 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M27.477 7.121a1 1 0 1 0-.954 1.758l.954-1.758Zm5.209 3.966.477-.879-.477.88Zm1.555 5.515-.866-.5-.003.006.87.494ZM26.523 8.88l5.686 3.087.954-1.758-5.686-3.087-.954 1.758Zm6.849 7.23-12.616 22.21 1.738.987 12.617-22.21-1.74-.988Zm-1.163-4.143a3 3 0 0 1 1.166 4.136l1.732 1a5 5 0 0 0-1.944-6.894l-.954 1.758Z" fill="currentColor"></path>
                <path d="M5 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v25a9 9 0 1 1-18 0V9Z" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="2"></path>
                <circle cx="14" cy="34" r="3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></circle>
            </svg>
        );
    } else if (type === 'typography') {
        return (
            <svg width="48" height="48" fill="none" aria-hidden="true">
                <path d="M5 13a8 8 0 0 1 8-8h22a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H13a8 8 0 0 1-8-8V13Z" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="2"></path>
                <path d="M15.5 25h9M13 31l5.145-12.748c.674-1.67 3.036-1.67 3.71 0L27 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M31 13s2 0 2 1.833v18.334C33 35 31 35 31 35M35 13s-2 0-2 1.833v18.334C33 35 35 35 35 35M31 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
        );
    } else if (type === 'shadows') {
        return (
            <svg width="48" height="48" fill="none" aria-hidden="true">
                <path d="M24 43c10.493 0 19-8.507 19-19S34.493 5 24 5m-4 .422C11.427 7.259 5 14.879 5 24c0 9.121 6.427 16.741 15 18.578" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M24 42.819V5.181c0-.1.081-.181.181-.181C34.574 5 43 13.607 43 24c0 10.394-8.426 19-18.819 19a.181.181 0 0 1-.181-.181Z" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                <path d="M28 10h3M28 14h7M28 18h10M28 22h11M28 26h10M28 30h9M28 34h7M28 38h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
        );
    } else if (type === 'vertical-dots') {
        return (
            <svg width="24" height="24" fill="none" aria-hidden="true">
                <path className="text-slate-400" d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    } else if (type === 'x') {
        return (
            <svg viewBox="0 0 10 10" width={(width === undefined) ? '24px' : width} height={(height === undefined) ? '24px' : height} aria-hidden="true">
                <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
        );
    } else if (type === 'simple') {
        return (
            <svg width="48" height="48" fill="none" aria-hidden="true">
                <path d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeWidth="2"></path>
                <path d="M15 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
        );
    } else if (type === 'playful') {
        return (
            <svg width="48" height="48" fill="none" aria-hidden="true">
                <path d="M5 8h36v32H5V8Z" fill="currentColor" fillOpacity="0"></path>
                <path d="M42 29V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M33.662 41.736a1 1 0 0 1-1.1-1.322l3.08-8.68a1 1 0 0 1 1.736-.274l5.6 7.299a1 1 0 0 1-.637 1.596l-8.679 1.38Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M22.8 19.949a2 2 0 0 1 2.4-1.5l5.851 1.352a2 2 0 0 1 1.5 2.399l-1.352 5.851a2 2 0 0 1-2.399 1.5l-5.851-1.352a2 2 0 0 1-1.5-2.399l1.352-5.851Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    } else if (type === 'elegant') {
        return (
            <svg width="48" height="48" fill="none" aria-hidden="true">
                <path d="M6 8h32a4 4 0 0 1 4 4v28H6V8Z" fill="currentColor" fillOpacity="0"></path>
                <path d="M43 21v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h20M15 7v34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M37 7c0 1.101 0 6-6 6 1.101 0 6 0 6 6 0-6 4.899-6 6-6-6 0-6-4.899-6-6ZM31 21c0 .734 0 4-4 4 .734 0 4 0 4 4 0-4 3.266-4 4-4-4 0-4-3.266-4-4Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    } else if (type === 'brutalist') {
        return (
            <svg width="48" height="48" fill="none" aria-hidden="true">
                <path d="M9 41h30a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4Z" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M15 7v34M17 13h-2M43 13h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M21 29V15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path d="M25 31v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
        );
    } else if (type === 'side-code') {
        return (
            <svg width="15" height="14" fill="none" stroke="currentColor">
                <rect width="14" height="13" x="0.5" y="0.5" rx="3"></rect>
                <path d="M7.5 0V14"></path>
            </svg>
        );
    } else if (type === 'horizontal-dots') {
        return (
            <svg width="12" height="2" fill="currentColor">
                <circle cx="1" cy="1" r="1"></circle>
                <circle cx="6" cy="1" r="1"></circle>
                <circle cx="11" cy="1" r="1"></circle>
            </svg>
        );
    } else if (type === 'lock') {
        return (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-slate-500">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
            </svg>
        );
    } else if (type === 'browser-resizable') {
        return (
            <svg width="24" height="24" fill="none" className="text-slate-500">
                <path
                    d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    } else if (type === 'logo-browser') {
        return (
            <svg width="17" height="10" fill="currentColor" className="text-slate-500">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.5 0C6.233 0 4.817 1.111 4.25 3.334c.85-1.112 1.842-1.528 2.975-1.25.647.158 1.109.618 1.62 1.127C9.68 4.041 10.643 5 12.75 5c2.267 0 3.683-1.111 4.25-3.333-.85 1.111-1.841 1.528-2.975 1.25-.647-.159-1.109-.619-1.62-1.128C11.57.96 10.607 0 8.5 0ZM4.25 5C1.983 5 .567 6.111 0 8.334c.85-1.112 1.842-1.528 2.975-1.25.647.158 1.109.618 1.62 1.127C5.43 9.041 6.393 10 8.5 10c2.267 0 3.684-1.11 4.25-3.333-.85 1.111-1.842 1.528-2.975 1.25-.647-.159-1.109-.619-1.62-1.128C7.32 5.96 6.357 5 4.25 5Z"></path>
            </svg>
        );
    } else if (type === 'workaction') {
        return (
            <svg width="15" height="14" fill="currentColor" className="text-slate-400">
                <path d="M6.541 11.753a1.803 1.803 0 0 1-.485 1.277c-.241.253-.552.426-.89.497-.34.07-.691.034-1.01-.103a1.736 1.736 0 0 1-.776-.67 1.79 1.79 0 0 1-.272-1c.004-.306.086-.604.239-.866.152-.262.37-.48.63-.628-.01.047.039-.024 0 0l.797-.723a3.759 3.759 0 0 0 .988-2.535c0-1.28-.734-2.581-1.788-3.262.04.024-.015-.041 0 0a1.72 1.72 0 0 1-.63-.628 1.766 1.766 0 0 1-.238-.865A1.802 1.802 0 0 1 3.592.97c.24-.253.55-.426.89-.496.338-.07.69-.035 1.008.102.319.139.59.372.776.67.187.298.282.647.272 1a3.77 3.77 0 0 0 1.006 2.552l.35.35c.14.125.287.241.44.35.265.143.489.36.644.625a1.73 1.73 0 0 1-.645 2.381c.015-.03-.027.016 0 0a3.89 3.89 0 0 0-1.296 1.393 4.007 4.007 0 0 0-.496 1.856Zm1.921-9.512c0 .348.101.69.29.979.188.29.457.515.77.648a1.678 1.678 0 0 0 1.872-.382 1.803 1.803 0 0 0 .372-1.919 1.752 1.752 0 0 0-.632-.79 1.685 1.685 0 0 0-2.168.22c-.322.33-.503.778-.504 1.244Zm1.718 7.751c-.34 0-.672.104-.954.297a1.752 1.752 0 0 0-.633.79A1.802 1.802 0 0 0 8.966 13a1.679 1.679 0 0 0 1.871.382c.314-.134.582-.36.77-.65a1.796 1.796 0 0 0-.214-2.223 1.684 1.684 0 0 0-1.214-.516Zm4.393-2.995c0-.348-.1-.688-.29-.978a1.727 1.727 0 0 0-.77-.649 1.677 1.677 0 0 0-.993-.1 1.7 1.7 0 0 0-.878.482 1.803 1.803 0 0 0-.373 1.92c.13.32.35.596.633.79a1.684 1.684 0 0 0 2.167-.22c.323-.331.504-.779.504-1.245Z"></path>
                <path d="M2.147 5.237c-.34 0-.672.103-.954.296a1.753 1.753 0 0 0-.633.79 1.803 1.803 0 0 0 .373 1.92c.24.245.545.413.878.48.333.069.679.034.993-.099.314-.133.582-.359.77-.648a1.795 1.795 0 0 0-.214-2.223 1.714 1.714 0 0 0-1.213-.516Z"></path>
            </svg>
        );
    } else if (type === 'headless-ui') {
        return (
            <svg width="15" height="16" fill="currentColor" className="text-slate-500">
                <path d="m2.973 9.822 9.154-3.056c-.183-1.144-.314-1.908-.465-2.491-.162-.627-.291-.795-.342-.853a1.785 1.785 0 0 0-.643-.467c-.071-.03-.27-.102-.917-.063-.684.042-1.581.181-3.003.406-1.42.225-2.318.37-2.98.542-.627.162-.796.292-.854.342a1.792 1.792 0 0 0-.466.643c-.03.071-.102.271-.063.918.041.683.181 1.581.406 3.002.063.399.12.755.173 1.077Z"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M.447 9.117C.012 6.367-.206 4.993.265 3.89a4.166 4.166 0 0 1 1.09-1.5C2.26 1.6 3.633 1.382 6.382.946c2.75-.436 4.125-.653 5.229-.182a4.164 4.164 0 0 1 1.5 1.09c.79.904 1.007 2.278 1.442 5.028.436 2.75.653 4.124.182 5.227a4.164 4.164 0 0 1-1.09 1.5c-.903.79-2.278 1.008-5.028 1.443-2.749.436-4.124.653-5.227.182a4.166 4.166 0 0 1-1.5-1.09C1.1 13.241.883 11.867.447 9.117Zm4.85 4.882c.735-.044 1.684-.193 3.087-.415 1.404-.222 2.351-.374 3.066-.56.691-.179 1.01-.354 1.216-.534a2.68 2.68 0 0 0 .7-.964c.108-.252.176-.609.133-1.322-.045-.736-.193-1.685-.416-3.088-.222-1.404-.373-2.352-.559-3.066-.18-.692-.354-1.01-.534-1.216a2.678 2.678 0 0 0-.964-.7c-.252-.108-.609-.176-1.323-.133-.736.044-1.684.193-3.088.415-1.403.223-2.35.374-3.065.56-.692.179-1.01.354-1.216.534a2.678 2.678 0 0 0-.7.964c-.108.251-.176.609-.133 1.322.045.737.193 1.685.415 3.088.223 1.404.374 2.352.56 3.066.179.692.354 1.01.534 1.216.265.303.594.543.964.7.252.109.608.176 1.323.133Z"></path>
            </svg>
        );
    } else if (type === 'chevron-left') {
        return (
            <svg width="24" height="24" fill="none" className="text-slate-500">
                <path d="m15 7-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    } else if (type === 'chevron-right') {
        return (
            <svg width="24" height="24" fill="none" className="text-slate-500">
                <path d="m10 7 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    }

}
