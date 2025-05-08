import { Link } from "@heroui/link";
import React from "react";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { generateQuestionnaireData } from "./api/questionnaire/route";
import { ensureDefaultQuestionnaire } from "@/utils/ensureDefaultQuestionnaire";

// 服务端获取问卷数据
async function getQuestionnaireInfo() {
  // 确保MongoDB中有默认问卷数据
  await ensureDefaultQuestionnaire();

  try {
    const data = generateQuestionnaireData();
    return {
      title: data.metadata.title,
      creator: data.metadata.creator
    };
  } catch (error) {
    console.error("Error loading questionnaire info:", error);
    return {
      title: "问卷调查",
      creator: "系统"
    };
  }
}

export default async function Home() {
  // 获取问卷元数据并初始化数据库
  const { title: questionnaireTitle, creator } = await getQuestionnaireInfo();

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
        <div className={subtitle()}>本次问卷主题: {questionnaireTitle}</div>
        <div className={subtitle()}>发起人: {creator}</div>
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
