import { create } from "zustand";
import { Question, QuestionType } from "@/types/question";

interface QuestionState {
  currentIndex: number;
  questionnaireData: Question[];
  initialize: (data: Question[]) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  isLastQuestion: () => boolean;
  isFirstQuestion: () => boolean;
}

const useQuestionStore = create<QuestionState>((set, get) => ({
  currentIndex: 0,
  questionnaireData: Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    type: QuestionType.SINGLE_CHOICE,
    question: `Question ${index + 1}`,
    options: ["Option 1", "Option 2", "Option 3"]
  })),

  initialize: data => set({ questionnaireData: data }),

  nextQuestion: () => {
    const { currentIndex, questionnaireData } = get();
    if (currentIndex < questionnaireData.length - 1) {
      set({ currentIndex: currentIndex + 1 });
    }
  },

  prevQuestion: () => {
    const { currentIndex } = get();
    if (currentIndex > 0) {
      set({ currentIndex: currentIndex - 1 });
    }
  },

  jumpToQuestion: index => {
    const { questionnaireData } = get();
    if (index >= 0 && index < questionnaireData.length) {
      set({ currentIndex: index });
    }
  },

  isLastQuestion: () => {
    const { currentIndex, questionnaireData } = get();
    return currentIndex === questionnaireData.length - 1;
  },

  isFirstQuestion: () => {
    const { currentIndex } = get();
    return currentIndex === 0;
  }
}));

export default useQuestionStore;
