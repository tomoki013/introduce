"use client";
import Link from "next/link";
import { Section } from "@/components/common/Section";
import { MotionDiv, MotionH1, MotionP } from "@/components/common/Motion";

export default function NotFound() {
  return (
    <Section className="flex min-h-[calc(100vh-160px)] items-center justify-center text-center">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MotionH1
          className="glitch text-4xl font-bold md:text-6xl"
          data-text="404"
        >
          404
        </MotionH1>
        <MotionP
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="glitch inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/80"
            data-text="Go Home"
          >
            Go Home
          </Link>
        </MotionDiv>
      </MotionDiv>
    </Section>
  );
}
