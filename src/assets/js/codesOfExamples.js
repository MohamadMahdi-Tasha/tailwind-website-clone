// Codes By Mahdi Tasha. Inspired By Tailwind Website
export const firstSectionsCode = `<figure class="absolute md:top-[50%] top-[69%] md:translate-y-[-50%] translate-y-0 left-0 z-10 md:flex overflow-hidden bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 border-t-[1.5px] border-t-slate-500/30 md:border-t-0 md:border-t-transparent md:w-[56%] w-full">
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

export const secondSectionsCode = `<div class="p-4 rounded-xl bg-slate-800 md:w-[48%] w-full absolute left-0 md:top-auto top-0">
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
</div>`

export const thirdSectionsCode = `<div class="rounded-xl overflow-hidden flex bg-white md:w-[48%] w-full absolute left-0 md:top-auto top-0 font-sans">
  <div class="w-56 object-cover bg-indigo-400"></div>
  <div class="p-6 w-full">
    <div class="flex items-center justify-between mb-2">
        <h1 class="text-lg font-semibold">Classic Utility</h1>
        <h6 class="text-lg font-semibold text-slate-500">$110.00</h6>
    </div>
    <h6 class="text-sm font-medium text-slate-700 mb-4">In stock</h6>
    <div class="flex gap-3 mb-6">
        <button class="w-9 h-9 rounded-lg flex bg-slate-900 items-center font-semibold justify-center text-white">XS</button>
        <button class="w-9 h-9 rounded-lg flex text-slate-900 items-center font-light justify-center bg-white">S</button>
        <button class="w-9 h-9 rounded-lg flex text-slate-900 items-center font-light justify-center bg-white">M</button>
        <button class="w-9 h-9 rounded-lg flex text-slate-900 items-center font-light justify-center bg-white">L</button>
        <button class="w-9 h-9 rounded-lg flex text-slate-900 items-center font-light justify-center bg-white">XL</button>
    </div>
    <div class="flex space-x-4 mb-6 pt-6 text-sm font-medium border-t border-t-slate-200">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-slate-900 text-white" type="submit">
          Buy now
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        L
      </button>
    </div>
    <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </div>
</div>`

export const fifthSectionsCode = `<main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Beach House in Collingwood</h1>
      <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
    </div>
    <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <div class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full bg-amber-400"></div>
      <div class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32 bg-amber-400"></div>
      <div class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32 bg-amber-400"></div>
    </div>
    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
      <dt class="sr-only">Reviews</dt>
      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>4.89 <span class="text-slate-400 font-normal">(128)</span></span>
      </dd>
      <dt class="sr-only">Location</dt>
      <dd class="flex items-center dark:text-slate-400">
        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
        Collingwood, Ontario
      </dd>
    </dl>
    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</button>
    </div>
    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
      This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
    </p>
  </div>
</main>`

export const sixthSectionsCode = `<div class='bg-slate-800 rounded-xl md:w-[48%] w-full'>
    <div class='bg-slate-700/20 rounded-t-xl p-5 border-b border-b-slate-500/30'>
        <div class='flex items-center justify-between mb-5'>
            <h6 class='text-white font-semibold text-lg'>Projects</h6>
            <button
                class='px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white font-sm font-semibold'>
                <span class='mr-2'>+</span> New
            </button>
        </div>
        <form class="relative">
            <svg width="20" height="20" fill="currentColor" class='text-slate-500 pointer-events-none absolute left-3 top-[50%] translate-y-[-50%]'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
            <input
                class='pl-11 w-full pr-3 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-transparent pt-2 pb-3 bg-slate-600 placeholder:text-slate-500 text-white border-t-2 border-t-slate-500/50 rounded-md'
                type="text" aria-label="Filter projects" placeholder="Filter projects..."></input>
        </form>
    </div>
    <div class='bg-slate-800 p-5'>
        <div class='grid grid-cols-2 grid-rows-2 gap-4'>
            <a class='p-3 block border-t-2 border-t-slate-500/30 rounded-md bg-slate-600 hover:bg-blue-500'
            href="#">
                <h6 class='text-white font-bold text-lg mb-2'>Api Integration</h6>
                <h6 class='text-slate-400 font-light text-sm mb-4'>Engineering</h6>
                <div class='flex'>
                    <div class='w-5 h-5 rounded-full bg-indigo-900'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-800'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-700'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-600'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-500'></div>
                </div>
            </a>
            <a class='p-3 block border-t-2 border-t-slate-500/30 rounded-md bg-slate-600 hover:bg-blue-500'
            href="#">
                <h6 class='text-white font-bold text-lg mb-2'>New Benefits Plan</h6>
                <h6 class='text-slate-400 font-light text-sm mb-4'>Human Resources</h6>
                <div class='flex'>
                    <div class='w-5 h-5 rounded-full bg-indigo-900'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-800'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-700'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-600'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-500'></div>
                </div>
            </a>
            <a class='p-3 block border-t-2 border-t-slate-500/30 rounded-md bg-slate-600 hover:bg-blue-500'
            href="#">
                <h6 class='text-white font-bold text-lg mb-2'>Onboarding Emails</h6>
                <h6 class='text-slate-400 font-light text-sm mb-4'>Customer Success</h6>
                <div class='flex'>
                    <div class='w-5 h-5 rounded-full bg-indigo-900'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-800'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-700'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-600'></div>
                    <div class='w-5 -ml-2 h-5 rounded-full bg-indigo-500'></div>
                </div>
            </a>
            <a class='flex p-5 rounded-md border-2 border-dashed hover:border-solid hover:border-blue-500 border-slate-500/30 flex-col items-center justify-center gap-3 group'href="#">
                <span class='group-hover:text-blue-500 text-slate-400 text-base'>+</span>
                <span class='group-hover:text-blue-500 text-white font-semibold text-base'>New Project</span>
            </a>
        </div>
    </div>
</div>`

export const seventhSectionsCode = `import Nav from './Nav.js'
import NavItem from './NavItem.js'
import List from './List.js'
import ListItem from './ListItem.js'

export default function Movies({ movies }) {
  return (
    <div className="divide-y divide-slate-100">
      <Nav>
        <NavItem href="/new" isActive>New Releases</NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </Nav>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  )
}`

export const seventhSectionsCodePreview = `<div class="border-t-2 absolute left-0 md:top-auto top-0 md:w-[48%] w-full bg-slate-800 border-t-slate-400/20 rounded-xl overflow-hidden">
    <div class="flex overflow-auto p-3 border-b gap-3 border-b-slate-500/30">
        <a href="#"><button class="px-4 py-2 text-white bg-sky-500 border-t border-t-sky-200/30 text-sm rounded-md" tabindex="-1">New Releases</button></a>
        <a href="#"><button class="px-4 py-2 text-white border border-slate-600 rounded-md text-sm" tabindex="-1">Top Rated</button></a>
        <a href="#"><button class="px-4 py-2 text-white border border-slate-600 rounded-md text-sm" tabindex="-1">Vincents Picks</button></a>
    </div>
    <ul>
        <li>
            <a href="#" class="flex p-3">
                <div class="w-[60px] h-[88px] bg-amber-400 mr-5 rounded-xl"></div>
                <div class="w-full">
                    <div class="flex items-center justify-between mb-2">
                        <h6 class="font-semibold text-white truncate">Prognosis Negative</h6>
                        <h6>
                            <svg width="16" height="20" fill="currentColor"><path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path></svg>
                            <span class="ml-1 text-white text-sm font-sans font-semibold">2.66</span>
                        </h6>
                    </div>
                    <ul class="flex items-center mb-2">
                        <li class="font-semibold mr-3 text-xs text-white p-1 border border-slate-500/30 rounded-md">PG-13</li>
                        <li class="font-semibold mr-5 text-sm relative after-content-[''] after:bg-white after:absolute after:w-[2px] after:h-[2px] after:right-0 after:top-[50%] after:translate-y-[50%] after:translate-x-[10px] text-slate-500">2021</li>
                        <li class="font-semibold mr-5 text-sm relative after-content-[''] after:bg-white after:absolute after:w-[2px] after:h-[2px] after:right-0 after:top-[50%] after:translate-y-[50%] after:translate-x-[10px] text-slate-500">Comedy</li>
                        <li class="font-semibold mr-5 text-sm text-slate-500">1h 46m</li>
                    </ul>
                    <h6 class="font-semibold text-sm text-slate-500">Simon Pegg, Zach Galifianakis</h6>
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="flex p-3 border-y-slate-400/20 border-y">
                <div class="w-[60px] h-[88px] bg-amber-400 mr-5 rounded-xl"></div>
                <div class="w-full">
                    <div class="flex items-center justify-between mb-2">
                        <h6 class="font-semibold text-white truncate">Rochelle, Rochelle</h6>
                        <h6>
                            <svg width="16" height="20" fill="currentColor"><path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path></svg>
                            <span class="ml-1 text-white text-sm font-sans font-semibold">3.25</span>
                        </h6>
                    </div>
                    <ul class="flex items-center mb-2">
                        <li class="font-semibold mr-3 text-xs text-white p-1 border border-slate-500/30 rounded-md">R</li>
                        <li class="font-semibold mr-5 text-sm relative after-content-[''] after:bg-white after:absolute after:w-[2px] after:h-[2px] after:right-0 after:top-[50%] after:translate-y-[50%] after:translate-x-[10px] text-slate-500">2020</li>
                        <li class="font-semibold mr-5 text-sm relative after-content-[''] after:bg-white after:absolute after:w-[2px] after:h-[2px] after:right-0 after:top-[50%] after:translate-y-[50%] after:translate-x-[10px] text-slate-500">Romance</li>
                        <li class="font-semibold mr-5 text-sm text-slate-500">1h 56m</li>
                    </ul>
                    <h6 class="font-semibold text-sm text-slate-500">Emilia Clarke</h6>
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="flex p-3">
                <div class="w-[60px] h-[88px] bg-amber-400 mr-5 rounded-xl"></div>
                <div class="w-full">
                    <div class="flex items-center justify-between mb-2">
                        <h6 class="font-semibold text-white truncate">Death Blow</h6>
                        <h6>
                            <svg width="16" height="20" fill="currentColor"><path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path></svg>
                            <span class="ml-1 text-white text-sm font-sans font-semibold">4.95</span>
                        </h6>
                    </div>
                    <ul class="flex items-center mb-2">
                        <li class="font-semibold mr-3 text-xs text-white p-1 border border-slate-500/30 rounded-md">18A</li>
                        <li class="font-semibold mr-5 text-sm relative after-content-[''] after:bg-white after:absolute after:w-[2px] after:h-[2px] after:right-0 after:top-[50%] after:translate-y-[50%] after:translate-x-[10px] text-slate-500">2020</li>
                        <li class="font-semibold mr-5 text-sm relative after-content-[''] after:bg-white after:absolute after:w-[2px] after:h-[2px] after:right-0 after:top-[50%] after:translate-y-[50%] after:translate-x-[10px] text-slate-500">Action</li>
                        <li class="font-semibold mr-5 text-sm relative text-slate-500">2h 5m</li>
                    </ul>
                    <h6 class="font-semibold text-sm text-slate-500">Idris Elba, John Cena, Thandiwe Newton</h6>
                </div>
            </a>
        </li>
    </ul>
</div>`

export const seventhCssCode = `.btn {
  @apply text-base font-medium rounded-lg p-3;
}

.btn--primary {
  @apply bg-sky-500 text-white;
}

.btn--secondary {
  @apply bg-slate-100 text-slate-900;
}`

export const seventhHtmlCode = `<footer class="grid grid-cols-2 gap-x-6">
    <button class="btn btn--secondary">Decline</button>
    <button class="btn btn--primary">Accept</button>
</footer>`

export const eightsSectionsCode = `<div class="md:w-[48%] w-full">
    <div class="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
      <div class="flex items-center space-x-4">
        <div class="w-[88px] h-[88px] bg-purple-600 rounded-lg flex-none"></div>
        <div class="min-w-0 flex-auto space-y-1 font-semibold">
          <p class="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
            <abbr title="Episode">Ep.</abbr> 128
          </p>
          <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
            Scaling CSS at Heroku with Utility Classes
          </h2>
          <p class="text-slate-900 dark:text-slate-50 text-lg">
            Full Stack Radio
          </p>
        </div>
      </div>
      <div class="space-y-2">
        <div class="relative">
          <div class="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div class="bg-cyan-500 dark:bg-cyan-400 w-1/2 h-2" role="progressbar" aria-label="music progress" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
          </div>
          <div class="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
            <div class="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
          </div>
        </div>
        <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
          <div class="text-cyan-500 dark:text-slate-100">24:16</div>
          <div class="text-slate-500 dark:text-slate-400">75:50</div>
        </div>
      </div>
    </div>
    <div class="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
      <div class="flex-auto flex items-center justify-evenly">
        <button type="button" aria-label="Add to favorites">
          <svg width="24" height="24">
            <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Previous">
          <svg width="24" height="24" fill="none">
            <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button type="button" aria-label="Rewind 10 seconds">
          <svg width="24" height="24" fill="none">
            <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <button type="button" class="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
        <svg width="30" height="32" fill="currentColor">
          <rect x="6" y="4" width="4" height="24" rx="2" />
          <rect x="20" y="4" width="4" height="24" rx="2" />
        </svg>
      </button>
      <div class="flex-auto flex items-center justify-evenly">
        <button type="button" aria-label="Skip 10 seconds">
          <svg width="24" height="24" fill="none">
            <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Next">
          <svg width="24" height="24" fill="none">
            <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button type="button" class="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500">
          1x
        </button>
      </div>
    </div>
</div>`

export const ninethSectionsPreview = `<div class="md:w-[48%] w-full bg-slate-700 p-4 rounded-xl"><div class="bg-slate-800 border-slate-500/30 p-3 grid grid-cols-2 items-center gap-5"><div class="space-y-8"><div><div class="flex items-center justify-between border-b border-slate-200/10 pb-1"><h6 class="font-mono text-xs text-slate-500">font-display</h6><h6 class="font-mono text-xs text-slate-500">Inter</h6></div><h6 class="mt-4 col-span-2 text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-slate-200">AaBbCc</h6></div><div><div class="flex items-center justify-between border-b border-slate-200/10 pb-1"><h6 class="font-mono text-xs text-slate-500">font-body</h6><h6 class="font-mono text-xs text-slate-500">14pt</h6></div><p class="text-sm leading-6 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue gravida cras quis ac duis pretium ullamcorper consequat. Integer pellentesque eu.</p></div></div><div class="space-y-8"><div class="p-3 bg-slate-900 border-2 border-slate-700 rounded-xl"><div class="flex items-center justify-between border-b border-slate-200/10 pb-1"><h6 class="font-mono text-xs text-slate-500">bg-primary</h6><h6 class="font-mono text-xs text-slate-500">50-900</h6></div><div class="grid grid-cols-5 gap-2 pt-2"><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-50"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-100"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-200"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-300"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-400"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-500"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-600"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-700"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-800"></div><div class="w-8 h-8 rounded-sm border-t border-t-primary-300/30 bg-primary-900"></div></div></div><div class="p-3 bg-slate-900 border-2 border-slate-700 rounded-xl"><div class="flex items-center justify-between border-b border-slate-200/10 pb-1"><h6 class="font-mono text-xs text-slate-500">bg-secondary</h6><h6 class="font-mono text-xs text-slate-500">50-900</h6></div><div class="grid grid-cols-5 gap-2 pt-2"><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-50"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-100"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-200"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-300"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-400"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-500"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-600"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-700"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-800"></div><div class="w-8 h-8 rounded-sm border-t border-t-secondary-300/30 bg-secondary-900"></div></div></div></div></div></div>`

export const ninethSectionsCode = `module.exports = {
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
    },
  },
}`