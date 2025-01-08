import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import React from "react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        <span className={title()}>XM&nbsp;</span>
        <span className={title({ color: "turquoise" })}>questionnaire&nbsp;</span>
        <br />
        <span className={title()}>Create surveys effortlessly, no design skills needed.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Simple, fast, and powerful survey creation tool.
        </div>
        <div className={subtitle({ class: "mt-4" })}>本次问卷主题: 校园暴力行为</div>
        <div className={subtitle({ class: "mt-4" })}>发起人: IndulgeBack</div>
      </div>

      <div className="flex gap-3">
        <Button
          className="bg-gradient-to-tr from-sky-500 to-pink-500 text-white shadow-lg"
          radius="full"
          as={Link}
          href="/docs"
        >
          填写问卷
        </Button>
      </div>
    </section>
  );
}
