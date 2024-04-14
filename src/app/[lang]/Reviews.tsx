import {Wrapper} from "@/app/layouts/Wrapper";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import Image from "next/image";

export const Reviews = async ({lang}: Props) => {
  const { page } = await getDictionary(lang)

  return (
    <Wrapper small={true}>
      <section className="my-12">
        <h1 className="text-2xl font-bold mb-6 text-center">{page.review.title}</h1>
        {/*<video className="vjs-tech" data-testid="video-markup" playsInline="playsinline" id="vjs_video_3_html5_api"*/}
        {/*       tabIndex="-1" role="application" preload="metadata"*/}
        {/*       src="blob:https://player.hotmart.com/8f64e1b0-ff47-472a-b31f-fe671743d795"></video>*/}
        <div className="flex justify-center">
          <iframe width="800" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
        <div className="my-6 gap-8 sm:flex">
          <div>
            <ReviewCard name={page.review.list[0].name} num={1}/>
            <ReviewCard name={page.review.list[3].name} num={4}/>
            <ReviewCard name={page.review.list[6].name} num={7}/>
          </div>
          <div>
            <ReviewCard name={page.review.list[1].name} num={2}/>
            <ReviewCard name={page.review.list[4].name} num={5}/>
            <ReviewCard name={page.review.list[7].name} num={8}/>
          </div>
          <div>
            <ReviewCard name={page.review.list[2].name} num={3}/>
            <ReviewCard name={page.review.list[5].name} num={6}/>
            <ReviewCard name={page.review.list[8].name} num={9}/>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">{page.prepare.title}</h2>
        <div className="sm:flex gap-8">
          <div className="flex-1 text-center mb-4">
            <Image src="/images/main3.jpg" width={200} height={150} alt="students" className="w-full rounded-lg m-auto max-w-[400px]" />
          </div>
          <ul className="flex-1">
            <li className="mb-2 text-sm">{page.prepare.list.item_1}</li>
            <li className="my-2 text-sm">{page.prepare.list.item_2}</li>
            <li className="my-2 text-sm">{page.prepare.list.item_3}</li>
            <li className="my-2 text-sm">{page.prepare.list.item_4}</li>
            <li className="my-2 text-sm">{page.prepare.list.item_5}</li>
            <li className="my-2 text-sm">{page.prepare.list.item_6}</li>
            <li className="my-2 text-sm">{page.prepare.list.item_7}</li>
          </ul>
        </div>

      </section>
    </Wrapper>
  )
}

type Props = {
  lang: Locale
}

function ReviewCard({name, num}: ReviewCardProps) {
  const src = `/images/reviews/review${num}.jpg`
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2 text-center sm:text-left">{name}</h2>
      <div className="review-card rounded-lg overflow-hidden ">
        <Image src={src} width={350} height={200} alt="review" className="w-full object-cover max-w-[250px] m-auto"/>
      </div>
    </div>
  )
}

type ReviewCardProps = {
  name: string,
  num: number
}