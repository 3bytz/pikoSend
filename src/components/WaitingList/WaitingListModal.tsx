import React, { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { WaitingListFormWithProvider } from "./WaitingListForm";
import { useWaitingListModal } from "../../contexts/WaitingListContext";

export const WaitingListModal: React.FC = () => {
  const { isModalOpen, closeModal } = useWaitingListModal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  if (!isModalOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-fade-in"
        onClick={closeModal}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-piko-soft-grey flex items-center justify-center hover:bg-gray-100 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-piko-medium-grey" />
          </button>

          <div className="bg-gradient-to-r from-piko-purple to-piko-violet text-white p-6 rounded-t-3xl">
            <div className="flex items-center gap-3 max-w-[90%]">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-poppins">
                  Priority Access Waitlist
                </h2>
                <p className="text-white/80 text-sm">
                  Join 500+ early adopters
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-piko-purple/5 rounded-xl">
                <Users className="w-5 h-5 text-piko-purple mx-auto mb-2" />
                <div className="text-lg font-bold text-piko-black">500+</div>
                <div className="text-xs text-piko-medium-grey">Joined</div>
              </div>
              <div className="text-center p-3 bg-piko-purple/5 rounded-xl">
                <Clock className="w-5 h-5 text-piko-purple mx-auto mb-2" />
                <div className="text-lg font-bold text-piko-black">24h</div>
                <div className="text-xs text-piko-medium-grey">Response</div>
              </div>
              <div className="text-center p-3 bg-piko-purple/5 rounded-xl">
                <TrendingUp className="w-5 h-5 text-piko-purple mx-auto mb-2" />
                <div className="text-lg font-bold text-piko-black">75%</div>
                <div className="text-xs text-piko-medium-grey">
                  Early Access
                </div>
              </div>
            </div> */}

            <WaitingListFormWithProvider />
          </div>
          
          {/* <div className="p-4 border-t border-piko-soft-grey">
            <button
              onClick={() => {
                localStorage.setItem("pikosend_seen_waitlist", "true");
                closeModal();
              }}
              className="w-full py-2 text-piko-medium-grey hover:text-piko-black transition-colors"
            >
              Not now, continue browsing →
            </button>
          </div> */}
          {/* Footer */}
          <div className="p-6 bg-piko-soft-grey/50 rounded-b-3xl">
            <p className="text-center text-sm text-piko-medium-grey">
              🔒 Your data is secure. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
