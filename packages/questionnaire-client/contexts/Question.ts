import { QuestionContextType } from "@/types/question";
import { createContext } from "react";

export const QuestionContext = createContext<QuestionContextType | null>(null);
