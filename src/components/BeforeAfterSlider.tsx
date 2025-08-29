import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface BeforeAfterCase {
  id: number;
  title: string;
  procedure: string;
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const cases: BeforeAfterCase[] = [
    {
      id: 1,
      title: "Smile Transformation",
      procedure: "Cosmetic Dentistry",
      beforeImage: "/lovable-uploads/28b405f8-7a3b-4d32-b382-99db6a21e960.png",
      afterImage: "/lovable-uploads/28b405f8-7a3b-4d32-b382-99db6a21e960.png"
    },
    {
      id: 2,
      title: "Dental Implant",
      procedure: "Implantology",
      beforeImage: "/lovable-uploads/be251724-f14a-4dfe-8fb8-0c3c4c30fb6d.png",
      afterImage: "/lovable-uploads/be251724-f14a-4dfe-8fb8-0c3c4c30fb6d.png"
    },
    {
      id: 3,
      title: "Orthodontic Treatment",
      procedure: "Orthodontics",
      beforeImage: "/lovable-uploads/d82e0123-d9cc-4224-aadf-ec28b275012e.png",
      afterImage: "/lovable-uploads/d82e0123-d9cc-4224-aadf-ec28b275012e.png"
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
    setSliderPosition(50);
  };

  const handleSliderMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const currentCaseData = cases[currentCase];

  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden bg-gradient-card">
        <div className="p-6 text-center">
          <h4 className="text-xl font-semibold mb-2">{currentCaseData.title}</h4>
          <span className="text-sm text-primary font-medium">{currentCaseData.procedure}</span>
        </div>
        
        <div 
          className="relative aspect-video cursor-ew-resize select-none"
          onMouseMove={handleSliderMove}
          onClick={handleSliderMove}
        >
          {/* After Image (base layer) */}
          <img 
            src={currentCaseData.afterImage} 
            alt={`After - ${currentCaseData.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Before Image (clipped layer) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={currentCaseData.beforeImage} 
              alt={`Before - ${currentCaseData.title}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transform -translate-x-1/2 cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full" />
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            After
          </div>
          
          {/* Lightbox Button */}
          <Button
            size="sm"
            variant="secondary"
            className="absolute bottom-4 right-4"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Eye className="h-4 w-4 mr-2" />
            View Full
          </Button>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={prevCase}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        
        <div className="flex gap-2">
          {cases.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentCase ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => {
                setCurrentCase(index);
                setSliderPosition(50);
              }}
            />
          ))}
        </div>
        
        <Button variant="outline" size="sm" onClick={nextCase}>
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <h4 className="text-white text-lg font-semibold mb-2">Before</h4>
                <img 
                  src={currentCaseData.beforeImage} 
                  alt={`Before - ${currentCaseData.title}`}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="text-center">
                <h4 className="text-white text-lg font-semibold mb-2">After</h4>
                <img 
                  src={currentCaseData.afterImage} 
                  alt={`After - ${currentCaseData.title}`}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <div className="text-center">
              <Button variant="secondary" onClick={() => setIsLightboxOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;