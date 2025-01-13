"use client";

import React from "react";
import { ShareIcon } from "@heroicons/react/24/solid";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Snippet } from "@nextui-org/snippet";
import useNotyf from "@/hooks/useNotyf";

const ShareButton = () => {
  const { showSuccess } = useNotyf();
  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    showSuccess("分享链接已复制到剪贴板");
  };
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <ShareIcon className="text-default-500 size-6" />
      </PopoverTrigger>
      <PopoverContent>
        <Snippet color="secondary" variant="shadow" onCopy={copyShareLink}>
          点击复制分享链接🔗到剪贴板
        </Snippet>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
