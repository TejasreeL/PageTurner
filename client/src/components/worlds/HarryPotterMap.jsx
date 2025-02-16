import { useState, useRef } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import HPMap from './hp-map';

const HarryPotterMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const transformComponentRef = useRef(null);

  const locations = [
    {
      id: 'hogwarts',
      name: "Hogwarts Castle",
      x: 800,
      y: 300,
      type: 'castle',
      description: "School of Witchcraft and Wizardry",
    },
    {
      id: 'hogsmeade',
      name: "Hogsmeade Village",
      x: 300,
      y: 250,
      type: 'village',
      description: "The only all-wizard village in Britain",
    },
    {
      id: 'lake',
      name: "The Great Lake",
      x: 600,
      y: 400,
      type: 'nature',
      description: "Home to the Giant Squid and merpeople",
    },
    {
      id: 'dragon-challenge',
      name: "Dragon Challenge",
      x: 900,
      y: 500,
      type: 'location',
      description: "Site of the Triwizard Tournament's first task",
    },
    {
      id: 'forbidden-forest',
      name: "The Forbidden Forest",
      x: 200,
      y: 500,
      type: 'forest',
      description: "Dark and dangerous forest, home to many magical creatures",
    },
    {
      id: 'whomping-willow',
      name: "The Whomping Willow",
      x: 700,
      y: 350,
      type: 'nature',
      description: "A violent tree planted to guard a secret passage",
    },
    {
      id: 'quidditch-pitch',
      name: "Quidditch Pitch",
      x: 950,
      y: 400,
      type: 'sports',
      description: "The stadium where Hogwarts houses compete in Quidditch matches",
    }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        <TransformWrapper
          ref={transformComponentRef}
          initialScale={1}
          minScale={1}
          maxScale={4}
          centerOnInit={true}
          limitToBounds={true}
          boundaryRatioVertical={0.8}
          boundaryRatioHorizontal={0.8}
          initialPositionX={0}
          initialPositionY={0}
          panning={{ disabled: false, velocityDisabled: false }}
          pinch={{ disabled: false }}
          doubleClick={{ disabled: true }}
          wheel={{ disabled: false, wheelDisabled: false, touchPadDisabled: false }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <TransformComponent
                wrapperClass="!w-full !h-full"
                contentClass="!w-full !h-full"
              >
                <div className="w-full h-full">
                  <HPMap onLocationSelect={setSelectedLocation} />
                </div>
              </TransformComponent>

              {/* Title Card */}
              {/* <div className="absolute top-4 left-4 z-20">
                <div className="bg-[#e4d5b7] p-6 rounded border-2 border-[#4a3827]">
                  <h3 className="font-wizarding text-2xl text-[#4a3827]">
                    The Wizarding World
                  </h3>
                  <p className="font-quill text-sm text-[#4a3827]">Anno 1991</p>
                </div>
              </div> */}

              {/* Controls */}
              <div className="absolute bottom-4 right-4 z-20">
                <div className="bg-[#e4d5b7] p-4 rounded border-2 border-[#4a3827]">
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => zoomIn()}
                      className="p-3 hover:bg-[#d4c5a7] rounded transition-all duration-300"
                    >
                      <AiOutlinePlus className="w-6 h-6 text-[#4a3827]" />
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="p-3 hover:bg-[#d4c5a7] rounded transition-all duration-300"
                    >
                      <AiOutlineMinus className="w-6 h-6 text-[#4a3827]" />
                    </button>
                    <button
                      onClick={() => resetTransform()}
                      className="p-3 hover:bg-[#d4c5a7] rounded transition-all duration-300"
                    >
                      <AiOutlineHome className="w-6 h-6 text-[#4a3827]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Legend */}
              {/* <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-[#e4d5b7] p-6 rounded border-2 border-[#4a3827]">
                  <h4 className="font-wizarding text-lg text-[#4a3827] mb-3">Legend</h4>
                  <div className="space-y-3">
                    {[
                      { type: 'Castle', icon: '🏰' },
                      { type: 'Village', icon: '🏘️' },
                      { type: 'Lake', icon: '🌊' },
                      { type: 'Forest', icon: '🌲' }
                    ].map(item => (
                      <div key={item.type} className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-quill text-sm text-[#4a3827]">
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Location Details Popup */}
              {selectedLocation && (
                <div className="absolute right-4 top-4 w-80 bg-[#e4d5b7] p-6 rounded border-2 border-[#4a3827] z-30
                              shadow-lg transform transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-wizarding text-xl text-[#4a3827]">
                      {selectedLocation.name}
                    </h3>
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="p-2 hover:bg-[#d4c5a7] rounded transition-all duration-300"
                    >
                      <AiOutlineClose className="w-6 h-6 text-[#4a3827]" />
                    </button>
                  </div>
                  
                  <p className="font-quill text-[#4a3827] mb-4">
                    {selectedLocation.description}
                  </p>
                  
                  <div className="w-full h-1 bg-[#4a3827] opacity-20 rounded mb-4" />
                  
                  <div className="text-sm font-quill text-[#4a3827] opacity-80 italic">
                    Click anywhere on the map to explore more locations
                  </div>
                </div>
              )}
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default HarryPotterMap; 