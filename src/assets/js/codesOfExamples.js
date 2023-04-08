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

export const seventhSectionsCodePreview = `<div class="relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18 dark:bg-slate-800 dark:divide-slate-200/5 dark:highlight-white/10 md:w-[48%] w-full">
  <nav class="py-4 px-4 sm:px-6 lg:px-4 xl:px-6 text-sm font-medium">
    <ul class="flex space-x-3">
      <li>
        <div class="px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer">New<span
                class="hidden sm:inline lg:hidden xl:inline"> Releases</span></div>
      </li>
      <li>
        <div class="px-3 py-2 rounded-md bg-slate-50 cursor-pointer dark:bg-transparent dark:text-slate-300 dark:ring-1 dark:ring-slate-700">
          Top<span class="hidden sm:inline"> Rated</span></div>
      </li>
      <li>
        <div class="px-3 py-2 rounded-md bg-slate-50 cursor-pointer dark:bg-transparent dark:text-slate-300 dark:ring-1 dark:ring-slate-700">
          Vincent’s Picks
        </div>
      </li>
    </ul>
  </nav>
  <article class="p-4 sm:p-6 lg:p-4 xl:p-6 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
  <div class="flex-none rounded-md w-[60px] h-[88px] bg-amber-400"></div>
    <div class="min-w-0 relative flex-auto"><h2
            class="font-semibold text-slate-900 truncate sm:pr-20 dark:text-slate-100">Prognosis Negative</h2>
      <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div class="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
          <dt class="text-sky-500"><span class="sr-only">Star rating</span>
            <svg width="16" height="20" fill="currentColor">
              <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path>
            </svg>
          </dt>
          <dd>2.66</dd>
        </div>
        <div class="dark:text-slate-200">
          <dt class="sr-only">Rating</dt>
          <dd class="px-1.5 ring-1 ring-slate-200 rounded dark:ring-slate-600">PG-13</dd>
        </div>
        <div class="ml-2">
          <dt class="sr-only">Year</dt>
          <dd>2021</dd>
        </div>
        <div>
          <dt class="sr-only">Genre</dt>
          <dd class="flex items-center">
            <svg width="2" height="2" fill="currentColor" class="mx-2 text-slate-300" aria-hidden="true">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            Comedy
          </dd>
        </div>
        <div>
          <dt class="sr-only">Runtime</dt>
          <dd class="flex items-center">
            <svg width="2" height="2" fill="currentColor" class="mx-2 text-slate-300" aria-hidden="true">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            1h 46m
          </dd>
        </div>
        <div class="flex-none w-full mt-2 font-normal">
          <dt class="sr-only">Cast</dt>
          <dd class="text-slate-400">Simon Pegg, Zach Galifianakis</dd>
        </div>
      </dl>
    </div>
  </article>
  <article class="p-4 sm:p-6 lg:p-4 xl:p-6 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
    <div class="flex-none rounded-md w-[60px] h-[88px] bg-amber-400"></div>
    <div class="min-w-0 relative flex-auto"><h2
            class="font-semibold text-slate-900 truncate sm:pr-20 dark:text-slate-100">Rochelle, Rochelle</h2>
      <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div class="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
          <dt class="text-sky-500"><span class="sr-only">Star rating</span>
            <svg width="16" height="20" fill="currentColor">
              <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path>
            </svg>
          </dt>
          <dd>3.25</dd>
        </div>
        <div class="dark:text-slate-200">
          <dt class="sr-only">Rating</dt>
          <dd class="px-1.5 ring-1 ring-slate-200 rounded dark:ring-slate-600">R</dd>
        </div>
        <div class="ml-2">
          <dt class="sr-only">Year</dt>
          <dd>2020</dd>
        </div>
        <div>
          <dt class="sr-only">Genre</dt>
          <dd class="flex items-center">
            <svg width="2" height="2" fill="currentColor" class="mx-2 text-slate-300" aria-hidden="true">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            Romance
          </dd>
        </div>
        <div>
          <dt class="sr-only">Runtime</dt>
          <dd class="flex items-center">
            <svg width="2" height="2" fill="currentColor" class="mx-2 text-slate-300" aria-hidden="true">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            1h 56m
          </dd>
        </div>
        <div class="flex-none w-full mt-2 font-normal">
          <dt class="sr-only">Cast</dt>
          <dd class="text-slate-400">Emilia Clarke</dd>
        </div>
      </dl>
    </div>
  </article>
  <article class="p-4 sm:p-6 lg:p-4 xl:p-6 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 hidden sm:flex">
     <div class="flex-none rounded-md w-[60px] h-[88px] bg-amber-400"></div>
    <div class="min-w-0 relative flex-auto"><h2
            class="font-semibold text-slate-900 truncate sm:pr-20 dark:text-slate-100">Death Blow</h2>
      <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div class="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
          <dt class="text-sky-500"><span class="sr-only">Star rating</span>
            <svg width="16" height="20" fill="currentColor">
              <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path>
            </svg>
          </dt>
          <dd>4.95</dd>
        </div>
        <div class="dark:text-slate-200">
          <dt class="sr-only">Rating</dt>
          <dd class="px-1.5 ring-1 ring-slate-200 rounded dark:ring-slate-600">18A</dd>
        </div>
        <div class="ml-2">
          <dt class="sr-only">Year</dt>
          <dd>2020</dd>
        </div>
        <div>
          <dt class="sr-only">Genre</dt>
          <dd class="flex items-center">
            <svg width="2" height="2" fill="currentColor" class="mx-2 text-slate-300" aria-hidden="true">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            Action
          </dd>
        </div>
        <div>
          <dt class="sr-only">Runtime</dt>
          <dd class="flex items-center">
            <svg width="2" height="2" fill="currentColor" class="mx-2 text-slate-300" aria-hidden="true">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            2h 5m
          </dd>
        </div>
        <div class="flex-none w-full mt-2 font-normal">
          <dt class="sr-only">Cast</dt>
          <dd class="text-slate-400">Idris Elba, John Cena, Thandiwe Newton</dd>
        </div>
      </dl>
    </div>
  </article>
</div>`