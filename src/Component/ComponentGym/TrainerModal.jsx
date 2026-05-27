import React from "react";

const TrainerModal = ({ trainer, onClose }) => {
  if (!trainer) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col overflow-y-auto">
      <div className="bg-gray-900 w-full min-h-screen">
        <div className="p-8 md:p-16 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-green-500 text-base font-semibold mb-3">
                TRAINER ADVICE
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
                {trainer.name}
              </h1>
              <p className="text-green-500 text-xl">{trainer.specialty}</p>
            </div>
            <button
              onClick={onClose}
              className="bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-lg"
            >
              Back to Home
            </button>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-green-500 text-base font-semibold mb-6">
                  COACH INSIGHT
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  {trainer.adviceTitle}
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  {trainer.advice}
                </p>
              </div>

              {/* Tips */}
              <div className="space-y-5">
                {trainer.tips.map((tip, index) => (
                  <div key={index} className="bg-gray-800  p-5 rounded-lg ">
                    <p className="text-white text-base">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerModal;
