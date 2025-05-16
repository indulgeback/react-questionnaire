import { create } from "zustand";
import { Question } from "@/types/question";

interface QuestionState {
  metadata: {
    title: string;
    creator: string;
    id?: string;
    createTime?: string;
    updateTime?: string;
    version?: number;
    description?: string;
  };
  questionnaireData: Question[];
  initializeMetadata: (metadata: {
    title: string;
    creator: string;
    id?: string;
    createTime?: string;
    updateTime?: string;
    version?: number;
    description?: string;
  }) => void;
  initializeQuestionnaireData: (data: Question[]) => void;
}

const useQuestionStore = create<QuestionState>((set, get) => ({
  metadata: {
    title: "",
    creator: ""
  },
  questionnaireData: [],

  initializeMetadata: metadata => set({ metadata }),
  initializeQuestionnaireData: data => set({ questionnaireData: data })
}));

export default useQuestionStore;
