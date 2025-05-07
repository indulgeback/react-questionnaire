import { Question } from "@/types/question";
import React, { useState } from "react";

const QuestionImageChoice = ({ question }: { question: Question }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const images = question.images || [];

  const toggleImage = (imageUrl: string) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter(url => url !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative border rounded-lg overflow-hidden cursor-pointer ${
              selectedImages.includes(image.url) ? "ring-2 ring-secondary" : "hover:shadow-md"
            }`}
            onClick={() => toggleImage(image.url)}
          >
            <img src={image.url} alt={image.text} className="w-full h-32 object-cover" />
            <div className="p-2 bg-white">
              <p className="text-sm">{image.text}</p>
            </div>
            {selectedImages.includes(image.url) && (
              <div className="absolute top-2 right-2 bg-secondary rounded-full p-1">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionImageChoice;
