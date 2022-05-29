import { FC } from "react";
const divStyle = {
    position:'absolute',
   bottom:0,
   width:'100%'
  };


export const Footer: FC = ({ }) => {
  return (
	<footer  style={divStyle} className="mx-auto  flex flex-row p-2 text-center items-center footer bg-neutral text-neutral-content">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://solana.com/">
            <img src="https://prcdn.freetls.fastly.net/release_image/36801/28/36801-28-02a3e240e2e7e1657a3bbd4bd3eb211f-800x460.png?format=jpeg&auto=webp&quality=85&width=1950&height=1350&fit=bounds" class="mr-3 h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tokyo Solana Hackathon</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="https://github.com/xuanbao2008/solana-nft-fiat-wallet" class="mr-4 hover:underline md:mr-6 ">GitHub</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://solana.com/" class="hover:underline">Solana Tokyo Hackathon</a>. All Rights Reserved.
    </span>
</footer>
  );
};