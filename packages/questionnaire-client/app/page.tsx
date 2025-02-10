import { Link } from "@heroui/link";
import React from "react";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        <span className={title()}>XM&nbsp;</span>
        <span className={title({ color: "turquoise" })}>questionnaire&nbsp;</span>
        <br />
        <span className={clsx("mt-3", title({ fullWidth: true }))}>
          Create surveys effortlessly, no design skills needed.
        </span>
        <div className={subtitle()}>Simple, fast, and powerful survey creation tool.</div>
        <div className={subtitle()}>本次问卷主题: 校园暴力行为</div>
        <div className={subtitle()}>发起人: IndulgeBack</div>
      </div>

      <div className="flex gap-3">
        <Button
          className="bg-gradient-to-tr from-sky-500 to-pink-500 text-white shadow-lg"
          radius="full"
          as={Link}
          href="/question"
        >
          <PencilSquareIcon className="size-4" />
          填写问卷
        </Button>
      </div>
    </section>
  );
}
