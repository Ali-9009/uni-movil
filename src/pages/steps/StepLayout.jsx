import StepProgress from "../../components/StepProgress";

export default function StepLayout({ title, step, children, hideSteps }) {
  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-10">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-3 sm:px-10 mt-8">
        <div className="bg-(--primary-color) rounded-2xl py-6 flex justify-center">
          <h1 className="font-semibold text-white text-center lg:text-6xl text-4xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Card Wrapper */}

      <div className="shadow-md px-4 rounded-2xl py-8 sm:py-14 my-12 max-w-6xl sm:px-10 sm:mx-auto">
        {/* Progress Bar */}
        {!hideSteps && <StepProgress step={step} />}
        {/* Step Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
