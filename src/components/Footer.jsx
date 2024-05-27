import { FilmIcon } from "@heroicons/react/24/outline"

function Footer() {
  return (
    <div className="py-20">
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 m-auto justify-center pb-5'>
                <FilmIcon className='w-7 h-7 text-[#2FC4EC]'/>
                <span className='text-white pl-2'>MovieRank</span>
        </div>
        <div className="border-y-2 border-gray-500 py-10 md:flex flex-wrap justify-around items-center">
                <ul className="md:flex flex-wrap gap-2 text-white pb-4">
                  <li>
                    <a target="_blank" href="#" title="Follow Movierank  on Facebook" aria-label="Movierank  on Facebook">Facebook</a>
                  </li> |
                  <li>
                    <a target="_blank" href="#" title="Follow Movierank  on X" aria-label="Movierank  on X" >X</a>
                  </li> |
                  <li>
                  <a target="_blank" href="#" title="Follow Movierank  on Instagram" aria-label="Movierank  on Instagram" >Instagram</a>
                  </li> |
                  <li>

                <a target="_blank" href="#" title="Follow Movierank  on Pinterest" aria-label="Movierank  on Pinterest" >Pinterest</a>
                  </li> |
                  <li>
                <a target="_blank" href="#" title="Subscribe to Movierank  on YouTube" aria-label="Movierank  YouTube channel">YouTube</a>

                  </li> |
                  <li>
                <a href="#" title="Link to us" aria-label="Movierank  RSS feeds" >RSS</a>

                  </li>
                </ul>
            <div className="md:flex flex-wrap gap-2 text-white text-xs font-extralight">  
                <a target="_blank" href="#" title="About Movierank" >About Us</a>
                |
                <a target="_blank" href="#" title="Contact Movierank" >Contact Us</a>
                |
                <a target="_blank" href="#" title="Movierank Sitemap" >Sitemap</a>
                |
                <a target="_blank" href="#" title="Follow Movierank  on Pinterest" aria-label="Movierank Terms of Service" >Terms of Service</a>
                |
                <a target="_blank" href="#" title="Movierank Privacy Policy" >Privacy Policy</a>
            </div>
        </div>
        <div className="text-white text-xs font-extralight text-center pt-20">Copyright © 2024 MovieRank Media LTD</div>
    </div>
  )
}

export default Footer