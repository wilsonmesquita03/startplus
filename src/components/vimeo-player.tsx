"use client"
import { useSidebar } from "@/app/course/[slug]/learn/sidebar-provider"
import Script from "next/script"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const VimeoPlayer = ({ src, title }: { src?: string, title?: string }) => {
  const { isOpen, toggleSidebar } = useSidebar()

  function convertVimeoUrlToEmbed(url?: string) {
    // Extract the video ID from the URL using regex
    const match = url?.match(/vimeo\.com\/(\d+)/);
    
    if (match && match[1]) {
      const videoId = match[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
  }

  return (
    <div className="w-full pb-[56.25%] max-h-[calc(100vh-96px)] relative overflow-hidden">
      <iframe
        src={convertVimeoUrlToEmbed(src) + "?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title={title}
        className="absolute top-0 left-0 w-full h-full"
      >
      </iframe>
      {
        !isOpen && (
          <button
            className="flex items-center gap-2 rounded absolute top-24 bg-[#6d28d2] px-4 py-2 right-0 text-white font-bold max-w-[48px] hover:max-w-[230px] transition-all duration-300 overflow-hidden border border-[#9194ac]"
            onClick={toggleSidebar}
          >
            <ArrowBackIcon />
            <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 ml-2 whitespace-nowrap">Conteúdo do curso</span>
          </button>
        )
      }
      <Script src="https://player.vimeo.com/api/player.js"></Script>
    </div>
  )
}

export default VimeoPlayer