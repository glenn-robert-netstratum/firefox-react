import { useEffect, useState } from "react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

const API_KEY = import.meta.env.VITE_NEWS_API_KEY

interface Article {
  article_id: string
  title: string
  image_url: string
  link: string
  source_name:string
}

function NewsGrid({search,}: { search: string}) {
  const defalutImage = "https://c4.wallpaperflare.com/wallpaper/312/851/784/dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840%C3%972400-wallpaper-thumb.jpg"
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState<Article[]>([])
  useEffect(()=>{
    async function fetchNews() {
      try{
        const response = await fetch(
          `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en`
        )
        const data = await response.json()
        
        console.log(data.results)
        setNews(data.results.slice(0,9))
      }catch(error){
        console.error(error)
      }
      finally{
        setLoading(false)
      }
    }
    fetchNews()
  },[])

  if (loading) {
    return (
      <div className="flex justify-center pb-10">
        <div className="flex items-start justify-center gap-5 flex-wrap w-6xl">

          {Array.from({ length: 9 }).map((_, index) => (
            <Card
              key={index}
              className="
                h-80
                w-80
                border-none
                bg-black/60
                animate-pulse
              "
            >
              <CardContent className="flex flex-col gap-4 pt-4">
                <div className="h-40 w-full rounded bg-zinc-700" />
                <div className="h-4 w-full rounded bg-zinc-700" />
                <div className="h-4 w-full rounded bg-zinc-700" />
                <div className="mt-auto h-3 w-20 rounded bg-zinc-700" />
              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    )
  }

  const filteredNews = news.filter(
    (article) =>

      article.title ?.toLowerCase().includes(search.toLowerCase())
  )

  if (filteredNews.length === 0) {
    return (
      <div className="flex justify-center items-center mt-20">
        <p className="text-white text-4xl">
          No Results Found
        </p>
      </div>
    )
  }

  return (
    <div className="flex justify-center pb-10 mt-15">
  
        <div className="flex items-start justify-center gap-5 flex-wrap w-6xl">
  
          {filteredNews.map((article) => (
  
            <Card
              key={article.title}
              className="relative flex items-center justify-center h-80 w-80 border-none hover:bg-black bg-black/60 backdrop-blur-lg text-white transition cursor-pointer hover:-translate-y-3"
              onClick={()=>window.open(article.link)}
            >
  
              <CardContent className="absolute flex flex-col gap-2 top-4">
  
                <img
                  src={article.image_url || defalutImage}
                  alt={article.title}
                  className="h-40 w-70"
                />
  
                <p className="text-sm">
                  {article.title}
                </p>

                <div className="fixed bottom-5 left-5">
                  <p>
                    {article.source_name}
                  </p>
                </div>
  
              </CardContent>
  
            </Card>
  
          ))}
  
        </div>
  
      </div>
    )
  }
  
  export default NewsGrid