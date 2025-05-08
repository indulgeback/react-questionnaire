import { useRouter } from "next/navigation";

declare module "@heroui/system" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}
