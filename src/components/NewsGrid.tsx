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

function NewsGrid() {
  const [news, setNews] = useState<Article[]>([])
  useEffect(()=>{
    async function fetchNews() {
      const response = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en`
      )
      const data = await response.json()
      console.log(data.results)
      setNews(data.results)
    }
    fetchNews()
  },[])
  return (
    <div className="mt-25 flex justify-center">
  
        <div className="flex items-start justify-between gap-20 flex-wrap w-7xl p-15">
  
          {news.map((article) => (
  
            <Card
              key={article.title}
              className="relative flex items-center justify-center h-80 w-80 border-none hover:bg-black bg-black/80 backdrop-blur-lg text-white transition cursor-pointer hover:-translate-y-3"
              onClick={()=>window.open(article.link)}
            >
  
              <CardContent className="absolute flex flex-col gap-2 top-4">
  
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="h-30 w-70"
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