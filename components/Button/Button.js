import {Button} from '@nextui-org/react'

const OutlinedButton = () => {
    return (
      <Button className="ml-4 group flex h-min ring-none items-center justify-center hover:opacity-95 disabled:opacity-50 rounded-lg py-2 px-4 font-dm focus:outline-none !ring-transparent text-secondary-600 border border-secondary-400 border-b-secondary-300 border-b-4 hover:border active:border bg-white hover:text-primary hover:bg-gray-50 active:bg-gray-100 active:text-violet-600 focus-visible:outline-violet-600 focus-visible:ring-violet-700 text-sm sm:text-base dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900 dark:text-white" variant="shadow">
      <svg aria-hidden="true" class="h-3 w-3 flex-none fill-secondary group-active:fill-current">
            <path
                d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z">
            </path>
        </svg>
        How it works ?
      </Button>
    );
  };
  
  export default OutlinedButton;
  