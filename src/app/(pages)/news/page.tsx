
import { FaRegNewspaper } from "react-icons/fa";
import { MotionDiv, MotionH2 } from "@/components/Motion";
import { Section } from "@/components/layouts/Section";
import news from "@/data/news.json";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "All news articles.",
};


export default function NewsPage() {
  return (
    <Section>
      <div className="flex items-center gap-2">
        <FaRegNewspaper className="text-xl" />
        <MotionH2>News</MotionH2>
      </div>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 space-y-4"
      >
        <ul className="space-y-4">
          {news.map((item, index) => (
            <li key={index} className="border-b border-border pb-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group"
              >
                <time
                  dateTime={item.date}
                  className="text-sm text-secondary whitespace-nowrap"
                >
                  {format(new Date(item.date), "yyyy/MM/dd", { locale: ja })}
                </time>
                <p className="text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </MotionDiv>
    </Section>
  );
}
