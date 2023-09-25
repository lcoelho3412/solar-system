import React from "react";

class Header extends React.Component {
  render() {
    return (
      <html data-theme="dark">
        <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full">
          <nav
            class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
            aria-label="Global"
          >
            <div class="flex items-center justify-between">
              <a
                class="flex-none dark:text-white mb-4 text-4xl font-extrabold leading-none tracking-tight text-white bg-black md:text-5xl lg:text-6xl"
                href="/"
              >
                Sistema Solar
              </a>
              <div class="sm:hidden">
                <button
                  type="button"
                  class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    class="hs-collapse-open:hidden w-4 h-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    class="hs-collapse-open:block hidden w-4 h-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
            ></div>
            <div className="flex gap-4">
              <input className="switch bordered bw" type="checkbox" />
            </div>
          </nav>
        </header>

        <div className="grid gap-4">
          <div className="divider" />
        </div>
      </html>
    );
  }
}
export default Header;
