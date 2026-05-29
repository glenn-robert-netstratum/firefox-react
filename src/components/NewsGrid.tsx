import { news } from "@/data/News"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

function NewsGrid() {
  return (
    <div className="mt-25 flex justify-center">
  
        <div className="flex gap-15 flex-wrap w-7xl p-15">
  
          {news.map((article) => (
  
            <Card
              key={article.title}
              className="relative flex items-center justify-center h-50 w-15 basis-1/5 border-none text-white hover:bg-black backdrop-blur-3xl backdrop-grayscale-30 transition cursor-pointer"
            >
  
              <CardContent className="absolute flex flex-col items-center gap-2">
  
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-8 w-8"
                />
  
                <p className="text-sm">
                  {article.title}
                </p>
  
              </CardContent>
  
            </Card>
  
          ))}
  
        </div>
  
      </div>
    )
  }
  
  export default NewsGrid