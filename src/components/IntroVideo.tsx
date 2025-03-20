
import { Play } from "lucide-react";
import { useState } from "react";

const IntroVideo = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  const handlePlay = () => {
    setVideoPlaying(true);
  };

  return (
    <section id="intro" className="section-container">
      <h2 className="section-title">Introduction</h2>
      <div className="mt-10 max-w-4xl mx-auto">
        <div className="relative aspect-video bg-muted/30 rounded-2xl overflow-hidden group">
          {!videoPlaying ? (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform duration-300" 
                  onClick={handlePlay}
                  aria-label="Play introduction video"
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-lg font-medium">Watch my introduction video</p>
                <p className="text-white/80 text-sm">Learn about my background and expertise in data analysis</p>
              </div>
            </>
          ) : (
            <div className="w-full h-full">
              <iframe
                src="<iframe src="https://player.vimeo.com/video/1067891260?h=f783e00d39" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Data Analytics Introduction"
                className="absolute inset-0"
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
