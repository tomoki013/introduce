"use client";
import { MotionDiv } from "@/components/Motion";
import Image from "next/image";

const travelImages = [
  "/images/introduce.jpg",
  "/images/introduce.jpg",
  "/images/introduce.jpg",
];

export default function TravelJourney() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-foreground">旅と開発 (Travel & Development)</h2>
      <div className="mt-6 prose prose-lg max-w-none dark:prose-invert prose-p:leading-relaxed">
        <p>
          世界を旅する中で得たインスピレーションが、私の開発の原動力です。
          文化や価値観の違いに触れることで、多様な視点から物事を捉える力が養われました。
          この経験は、ユーザー一人ひとりに寄り添ったUI/UXを設計する上で、非常に役立っています。
        </p>
        <p>
          旅先での「もっとこうだったら便利なのに」という小さな気づきが、新しいサービスを生み出すアイデアの源泉となります。
          私の目標は、テクノロジーの力で、旅の体験をより豊かでスムーズなものにすることです。
        </p>
      </div>

      {travelImages.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {travelImages.map((src, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`Travel image ${index + 1}`}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </MotionDiv>
          ))}
        </div>
      )}
    </section>
  );
}
