import React from 'react';

const HPMap = () => (
  <svg 
    viewBox="0 0 1200 800" 
    preserveAspectRatio="xMidYMid meet"
    style={{ width: '100%', height: '100%', backgroundColor: '#e4d5b7' }}
  >
    {/* Parchment Background with texture */}
    <defs>
      <pattern id="parchment-texture" patternUnits="userSpaceOnUse" width="200" height="200">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
          <feBlend mode="multiply" in2="SourceGraphic"/>
        </filter>
        <rect width="200" height="200" fill="#e4d5b7" filter="url(#noise)"/>
      </pattern>
      
      {/* Decorative Border Pattern */}
      <pattern id="border-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
        <path d="M0,10 L20,10" stroke="#4a3827" strokeWidth="0.5" fill="none"/>
        <circle cx="10" cy="10" r="1" fill="#4a3827"/>
      </pattern>
    </defs>

    {/* Main Background */}
    <rect width="100%" height="100%" fill="url(#parchment-texture)"/>
    
    {/* Decorative Border */}
    <rect x="30" y="30" width="1140" height="740" 
          fill="none" stroke="url(#border-pattern)" strokeWidth="15"/>

    {/* Title Book with Ornate Frame - Increased width */}
    <g transform="translate(600,80)">
      <path d="M-180,-60 C-200,-60 -210,-50 -210,-30 L-210,30 C-210,50 -200,60 -180,60
               L180,60 C200,60 210,50 210,30 L210,-30 C210,-50 200,-60 180,-60 Z"
            fill="#e4d5b7" stroke="#4a3827" strokeWidth="2"/>
      <path d="M-170,-50 L170,-50 L170,50 L-170,50 Z" 
            fill="none" stroke="#4a3827" strokeWidth="1"/>
      <text x="0" y="-15" 
            fontFamily="Cinzel Decorative" 
            fontSize="24" 
            textAnchor="middle" 
            fill="#4a3827">
        The Wizarding World of
      </text>
      <text x="0" y="25" 
            fontFamily="Cinzel Decorative" 
            fontSize="32" 
            textAnchor="middle" 
            fill="#4a3827">
        Harry Potter
      </text>
    </g>

    {/* The Great Lake with Enhanced Details - With contained ripples */}
    <g transform="translate(0,0)">
      {/* Main Lake Shape - Same size */}
      <path d="M30,600 
               L30,100
               Q80,130 200,185 
               Q350,190 450,185 
               Q550,190 600,175 
               Q650,160 700,180
               Q750,200 700,230
               Q650,260 600,250
               Q550,240 500,260
               Q450,280 400,310
               Q350,330 300,370
               Q250,400 200,450
               Q150,500 100,550
               Q50,580 30,600 Z"
            fill="#4a3827" 
            fillOpacity="0.1" 
            stroke="#4a3827"/>

      {/* Water Details - Adjusted to stay within lake */}
      <g className="water-details">
        {/* Contained wave lines */}
        {[...Array(10)].map((_, i) => (
          <path key={i}
                d={`M${80 + i * 50},${150 + i * 20} 
                    Q${120 + i * 50},${130 + i * 20} 
                    ${160 + i * 50},${140 + i * 20}`}
                stroke="#4a3827" 
                strokeWidth="0.5" 
                fill="none"/>
        ))}
        
        {/* Contained ripples */}
        <g className="ripples">
          {[...Array(40)].map((_, i) => {
            // Calculate position within lake bounds
            const x = 80 + Math.random() * 500; // Adjusted x range
            const y = 150 + Math.random() * 350; // Adjusted y range
            
            // Only render if within approximate lake bounds
            if (x < 700 && y < 550) {
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={1 + Math.random() * 2}
                  fill="none"
                  stroke="#4a3827"
                  strokeWidth="0.3"
                />
              );
            }
            return null;
          })}
        </g>
      </g>
      
      {/* Shoreline Details */}
      <path d="M30,200 Q100,230 200,285" 
            stroke="#4a3827" 
            strokeWidth="0.7" 
            fill="none" 
            strokeDasharray="2,1"/>
      <path d="M300,275 Q350,260 400,280" 
            stroke="#4a3827" 
            strokeWidth="0.7" 
            fill="none" 
            strokeDasharray="2,1"/>
      
      {/* Lake Label with Decorative Frame */}
      <g transform="translate(200,320)">
        <path d="M-45,-15 Q-35,-20 0,-20 Q35,-20 45,-15 Q50,-10 45,-5 Q35,0 0,0 Q-35,0 -45,-5 Q-50,-10 -45,-15"
              fill="none" 
              stroke="#4a3827" 
              strokeWidth="0.5"/>
        <text 
          fontFamily="Crimson Text" 
          fontSize="16" 
          textAnchor="middle"
          fill="#4a3827"
          y="-8"
        >
        </text>
      </g>
    </g>

    {/* Hogwarts Castle - Enhanced vintage style */}
    <g transform="translate(800,300)">
      {/* Base Structure */}
      <path d="M-80,-40 L80,-40 L80,40 L-80,40 Z" 
            fill="#4a3827" fillOpacity="0.1" stroke="#4a3827"/>
      
      {/* Main Towers */}
      <g className="towers">
        {/* Central Grand Tower */}
        <path d="M-10,-40 L-10,-90 L0,-110 L10,-90 L10,-40" 
              fill="#4a3827" fillOpacity="0.15" stroke="#4a3827"/>
        <path d="M-8,-85 L8,-85" stroke="#4a3827" strokeWidth="0.5"/>
        <path d="M-6,-95 L6,-95" stroke="#4a3827" strokeWidth="0.5"/>
        
        {/* Side Towers */}
        <path d="M-60,-40 L-60,-70 L-50,-85 L-40,-70 L-40,-40" 
              fill="#4a3827" fillOpacity="0.15" stroke="#4a3827"/>
        <path d="M40,-40 L40,-70 L50,-85 L60,-70 L60,-40" 
              fill="#4a3827" fillOpacity="0.15" stroke="#4a3827"/>
        
        {/* Additional Towers */}
        <path d="M-30,-40 L-30,-60 L-20,-75 L-10,-60 L-10,-40" 
              fill="#4a3827" fillOpacity="0.15" stroke="#4a3827"/>
        <path d="M10,-40 L10,-60 L20,-75 L30,-60 L30,-40" 
              fill="#4a3827" fillOpacity="0.15" stroke="#4a3827"/>
      </g>

      {/* Architectural Details */}
      <g className="details">
        {/* Windows */}
        {[-50, -25, 0, 25, 50].map((x) => (
          <g key={x} transform={`translate(${x},0)`}>
            <path d="M-3,-30 L3,-30 L3,-20 L-3,-20 Z" 
                  fill="#4a3827" fillOpacity="0.2"/>
            <path d="M-3,-10 L3,-10 L3,0 L-3,0 Z" 
                  fill="#4a3827" fillOpacity="0.2"/>
          </g>
        ))}
        
        {/* Tower Details */}
        {[-60, -40, -10, 10, 40, 60].map((x) => (
          <g key={x} transform={`translate(${x},-40)`}>
            <path d="M-2,0 L2,0 L2,5 L-2,5 Z" 
                  fill="#4a3827" fillOpacity="0.3"/>
          </g>
        ))}
      </g>

      {/* Base Arches */}
      <g className="arches">
        {[-60, -40, -20, 0, 20, 40, 60].map((x) => (
          <path key={x}
                d={`M${x},40 C${x},30 ${x+10},30 ${x+10},40`}
                fill="none" 
                stroke="#4a3827" 
                strokeWidth="0.5"/>
        ))}
      </g>

      <text x="0" y="-120" 
            fontFamily="Cinzel Decorative" 
            fontSize="18" 
            textAnchor="middle" 
            fill="#4a3827">
        Hogwarts Castle
      </text>
    </g>

    {/* Forbidden Forest - Improved with better tree clusters */}
    <g transform="translate(200,500)" className="forbidden-forest">
      {/* Base shape for the forest area */}
      <path 
        d="M0,0 
          C50,-20 150,-20 200,0 
          C250,20 250,80 200,100 
          C150,120 50,120 0,100 
          C-50,80 -50,20 0,0 Z" 
        fill="#4a3827" 
        fillOpacity="0.05" 
        stroke="#4a3827" 
        strokeWidth="0.5"
      />
      
      {/* Tree Clusters */}
      {[...Array(15)].map((_, i) => {
        const x = Math.random() * 200;
        const y = Math.random() * 100;
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            {/* Individual tree shape */}
            <path 
              d={`M0,0 
                L-5,-10 L0,-15 L5,-10 L0,0
                M-7,-5 L0,-12 L7,-5
                M-4,-8 L0,-14 L4,-8`} 
              fill="#4a3827" 
              fillOpacity="0.2" 
              stroke="#4a3827" 
              strokeWidth="0.3"
            />
            {/* Tree shadow */}
            <path 
              d="M-3,0 L3,0" 
              stroke="#4a3827" 
              strokeWidth="0.5" 
              strokeOpacity="0.3"
            />
          </g>
        );
      })}
      
      {/* Dense tree pattern */}
      <g className="tree-pattern">
        {[...Array(50)].map((_, i) => {
          const x = Math.random() * 200;
          const y = Math.random() * 100;
          return (
            <path 
              key={`tree-${i}`}
              d={`M${x},${y} l-3,-6 l3,-4 l3,4 l-3,6`}
              fill="#4a3827"
              fillOpacity="0.15"
              stroke="#4a3827"
              strokeWidth="0.2"
            />
          );
        })}
      </g>

      {/* Forest Label */}
      <text 
        x="100" 
        y="50" 
        fontFamily="Crimson Text" 
        fontSize="16" 
        textAnchor="middle" 
        fill="#4a3827"
        className="forest-label"
      >
        The Forbidden Forest
      </text>

      {/* Forest Boundary Details */}
      <path 
        d="M0,0 C50,-20 150,-20 200,0" 
        fill="none" 
        stroke="#4a3827" 
        strokeWidth="0.3" 
        strokeDasharray="2,2"
      />
    </g>

    {/* Paths and Trails */}
    <g className="paths" stroke="#4a3827" strokeWidth="0.5" strokeDasharray="3,3" fill="none">
      <path d="M400,350 C500,300 600,300 700,350
               M300,400 C400,350 500,350 600,400
               M700,300 C750,250 800,250 850,300"/>
    </g>

    {/* Ornate Compass Rose */}
    <g transform="translate(100,100)">
      <circle cx="0" cy="0" r="40" fill="none" stroke="#4a3827" strokeWidth="1"/>
      <circle cx="0" cy="0" r="30" fill="none" stroke="#4a3827" strokeWidth="0.5"/>
      <path d="M0,-40 L0,40 M-40,0 L40,0" stroke="#4a3827" strokeWidth="1"/>
      <path d="M-28,-28 L28,28 M-28,28 L28,-28" stroke="#4a3827" strokeWidth="0.5"/>
      {/* Compass Points */}
      {['N', 'E', 'S', 'W'].map((dir, i) => (
        <text key={dir}
              x={Math.sin((i * Math.PI/2)) * 45}
              y={-Math.cos((i * Math.PI/2)) * 45}
              fontFamily="Crimson Text"
              fontSize="14"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#4a3827">
          {dir}
        </text>
      ))}
    </g>

    {/* Decorative Creatures */}
    <g className="creatures">
      {/* Dragon */}
      <path d="M900,600 C920,580 940,590 960,570 C980,550 990,560 1000,540"
            stroke="#4a3827" strokeWidth="1" fill="none"/>
      {/* Hippogriff */}
      <path d="M100,700 C120,680 140,690 160,670 C180,650 190,660 200,640"
            stroke="#4a3827" strokeWidth="1" fill="none"/>
    </g>

    {/* Location Labels with Decorative Frames */}
    <g className="labels">
      {[].map((location, i) => (
        <g key={i} transform={`translate(${location.x},${location.y})`}>
          <path d="M-50,-10 Q-40,-20 0,-20 Q40,-20 50,-10 Q60,0 50,10 Q40,20 0,20 Q-40,20 -50,10 Q-60,0 -50,-10"
                fill="none" stroke="#4a3827" strokeWidth="0.5"/>
          <text x="0" y="0"
                fontFamily="Crimson Text"
                fontSize="12"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#4a3827">
            {location.label}
          </text>
        </g>
      ))}
    </g>

    {/* Whomping Willow - Enhanced with more dramatic design */}
    <g transform="translate(700,400)">
      {/* Main trunk with texture and character */}
      <path d="M-15,30 C-20,20 -15,0 0,-5 C15,0 20,20 15,30" 
            fill="#4a3827" fillOpacity="0.1" stroke="#4a3827"/>
      <path d="M-8,25 C-12,15 -8,0 0,-5 C8,0 12,15 8,25" 
            stroke="#4a3827" strokeWidth="0.5" fill="none"/>
      
      {/* Trunk texture details */}
      <path d="M-5,20 C-8,15 -5,5 0,0 M5,20 C8,15 5,5 0,0" 
            stroke="#4a3827" strokeWidth="0.3" fill="none"/>
      
      {/* Dramatic drooping branches */}
      <g className="main-branches">
        {/* Left side branches */}
        <path d="M0,-5 C-40,-30 -50,-10 -45,20" stroke="#4a3827" strokeWidth="0.8" fill="none"/>
        <path d="M0,-5 C-30,-35 -35,-15 -30,15" stroke="#4a3827" strokeWidth="0.6" fill="none"/>
        <path d="M0,-5 C-20,-40 -25,-20 -20,10" stroke="#4a3827" strokeWidth="0.5" fill="none"/>
        
        {/* Right side branches */}
        <path d="M0,-5 C40,-30 50,-10 45,20" stroke="#4a3827" strokeWidth="0.8" fill="none"/>
        <path d="M0,-5 C30,-35 35,-15 30,15" stroke="#4a3827" strokeWidth="0.6" fill="none"/>
        <path d="M0,-5 C20,-40 25,-20 20,10" stroke="#4a3827" strokeWidth="0.5" fill="none"/>
      </g>
      
      {/* Secondary branches and twigs */}
      <g className="secondary-branches">
        {[...Array(18)].map((_, i) => (
          <path
            key={i}
            d={`M${-20 + Math.random() * 40},${-20 + Math.random() * 30} 
               c${-5 + Math.random() * 10},${-5 + Math.random() * 10} 
                ${-5 + Math.random() * 10},${-5 + Math.random() * 10} 
                ${-5 + Math.random() * 10},${5 + Math.random() * 10}`}
            stroke="#4a3827"
            strokeWidth="0.3"
            fill="none"
          />
        ))}
      </g>
      
      {/* Leaf clusters */}
      <g className="leaves">
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`translate(${-25 + Math.random() * 50},${-30 + Math.random() * 40})`}>
            <path d={`M0,0 
                     c${-2 + Math.random() * 4},${-2 + Math.random() * 4} 
                      ${-2 + Math.random() * 4},${-2 + Math.random() * 4} 
                      0,${-4 + Math.random() * 8}`}
                  stroke="#4a3827"
                  strokeWidth="0.2"
                  fill="#4a3827"
                  fillOpacity="0.1"/>
          </g>
        ))}
      </g>
      
      {/* Enhanced root system */}
      <g className="roots">
        <path d="M-15,30 C-25,35 -20,40 -10,38" stroke="#4a3827" strokeWidth="0.5" fill="none"/>
        <path d="M15,30 C25,35 20,40 10,38" stroke="#4a3827" strokeWidth="0.5" fill="none"/>
        <path d="M-5,30 C-10,35 -8,38 -3,36" stroke="#4a3827" strokeWidth="0.3" fill="none"/>
        <path d="M5,30 C10,35 8,38 3,36" stroke="#4a3827" strokeWidth="0.3" fill="none"/>
      </g>
      
      {/* Ground detail */}
      <path d="M-20,30 C-10,32 10,32 20,30" 
            stroke="#4a3827" strokeWidth="0.3" fill="none"/>
      
      {/* Decorative frame for label */}
      <path d="M-40,45 Q-30,43 0,43 Q30,43 40,45" 
            fill="none" stroke="#4a3827" strokeWidth="0.3"/>
      
      <text x="0" y="50" 
            fontFamily="Crimson Text" 
            fontSize="12" 
            textAnchor="middle" 
            fill="#4a3827">
        Whomping Willow
      </text>
    </g>

    {/* Hogsmeade Village - More diverse buildings and organic shape */}
    <g transform="translate(600,600)">
      {/* Organic village boundary */}
      <path d="M-100,-70 
               C-80,-90 -20,-80 20,-70 
               C60,-65 90,-40 100,-10
               C110,20 100,50 80,70
               C60,90 20,95 -20,90
               C-60,85 -90,60 -105,30
               C-120,0 -120,-50 -100,-70"
            fill="none" stroke="#4a3827" strokeWidth="0.5" strokeDasharray="3,3"/>

      {/* Historic and diverse buildings */}
      {[
        // Three Broomsticks - Large Inn
        { x: -40, y: -20, type: 'inn', scale: 1.5 },
        // Honeydukes - Shop with decorative front
        { x: 20, y: -30, type: 'shop', scale: 1.3 },
        // Zonko's Joke Shop - Quirky building
        { x: -60, y: 20, type: 'quirky', scale: 1.2 },
        // Post Office - Official building
        { x: 40, y: 10, type: 'official', scale: 1.4 },
        // Various houses and shops
        ...Array(8).fill().map((_, i) => ({
          x: -70 + Math.random() * 140,
          y: -40 + Math.random() * 80,
          type: 'house',
          scale: 0.8 + Math.random() * 0.4
        }))
      ].map((building, i) => (
        <g key={i} transform={`translate(${building.x},${building.y}) scale(${building.scale})`}>
          {building.type === 'inn' ? (
            // Inn design - larger with multiple sections
            <g>
              <path d="M-15,20 L-15,-12 L0,-20 L15,-12 L15,20 Z" 
                    fill="#4a3827" fillOpacity="0.1" stroke="#4a3827" strokeWidth="0.5"/>
              <path d="M-12,-10 L12,-10" stroke="#4a3827" strokeWidth="0.3"/>
              <path d="M-8,20 L-8,10 L-4,10 L-4,20 M4,20 L4,10 L8,10 L8,20" 
                    stroke="#4a3827" strokeWidth="0.3"/>
              {/* Multiple windows */}
              {[-8, 0, 8].map((x, j) => (
                <path key={j} d={`M${x-2},0 L${x+2},0 L${x+2},4 L${x-2},4 Z`} 
                      stroke="#4a3827" strokeWidth="0.2"/>
              ))}
            </g>
          ) : building.type === 'shop' ? (
            // Shop design with decorative elements
            <g>
              <path d="M-10,15 L-10,-8 L0,-15 L10,-8 L10,15 Z" 
                    fill="#4a3827" fillOpacity="0.1" stroke="#4a3827" strokeWidth="0.5"/>
              <path d="M-8,5 L8,5" stroke="#4a3827" strokeWidth="0.3"/>
              <path d="M-6,15 L-6,8 L6,8 L6,15" stroke="#4a3827" strokeWidth="0.3"/>
              {/* Shop window */}
              <path d="M-5,0 L5,0 L5,4 L-5,4 Z" stroke="#4a3827" strokeWidth="0.2"/>
            </g>
          ) : building.type === 'quirky' ? (
            // Quirky asymmetrical design
            <g>
              <path d="M-8,15 L-12,-5 L0,-18 L8,-5 L6,15 Z" 
                    fill="#4a3827" fillOpacity="0.1" stroke="#4a3827" strokeWidth="0.5"/>
              <path d="M-6,-8 L-3,-15 L0,-8" stroke="#4a3827" strokeWidth="0.3"/>
              <path d="M-4,15 L-4,5 L0,5 L0,15" stroke="#4a3827" strokeWidth="0.3"/>
            </g>
          ) : (
            // Standard house design
            <g>
              <path d="M-8,15 L-8,-5 L0,-12 L8,-5 L8,15 Z" 
                    fill="#4a3827" fillOpacity="0.1" stroke="#4a3827" strokeWidth="0.5"/>
              <path d="M-3,15 L-3,8 L3,8 L3,15" stroke="#4a3827" strokeWidth="0.3"/>
              <path d="M-4,0 L-1,0 L-1,3 L-4,3 Z M4,0 L1,0 L1,3 L4,3 Z" 
                    stroke="#4a3827" strokeWidth="0.2"/>
            </g>
          )}
        </g>
      ))}

      {/* Village paths - more organic */}
      <g className="village-paths">
        <path d="M-80,-20 C-40,-30 40,-30 80,-20" 
              stroke="#4a3827" strokeWidth="0.3" strokeDasharray="2,2"/>
        <path d="M-60,20 C-20,30 20,30 60,20" 
              stroke="#4a3827" strokeWidth="0.3" strokeDasharray="2,2"/>
        <path d="M0,-60 C10,-20 10,20 0,60" 
              stroke="#4a3827" strokeWidth="0.3" strokeDasharray="2,2"/>
      </g>

      {/* Village label */}
      <text x="0" y="-85" 
            fontFamily="Crimson Text" 
            fontSize="14" 
            textAnchor="middle" 
            fill="#4a3827">
        Hogsmeade Village
      </text>
    </g>

    {/* Quidditch Pitch - Modified to be circular */}
    <g transform="translate(950,200)">
      {/* Main circular stadium */}
      <circle cx="0" cy="0" r="40" 
              fill="none" stroke="#4a3827" strokeWidth="0.5"/>
      
      {/* Inner pitch circle */}
      <circle cx="0" cy="0" r="30" 
              fill="none" stroke="#4a3827" strokeWidth="0.3" 
              strokeDasharray="2,2"/>
      
      {/* Goal posts - three on each side */}
      {/* Left side */}
      <path d="M-40,0 h-5 M-40,-10 h-5 M-40,10 h-5" 
            stroke="#4a3827" strokeWidth="1"/>
      {/* Right side */}
      <path d="M40,0 h5 M40,-10 h5 M40,10 h5" 
            stroke="#4a3827" strokeWidth="1"/>
      
      {/* Stands detail */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const x1 = Math.cos(angle) * 40;
        const y1 = Math.sin(angle) * 40;
        const x2 = Math.cos(angle) * 35;
        const y2 = Math.sin(angle) * 35;
        return (
          <path key={i}
                d={`M${x1},${y1} L${x2},${y2}`}
                stroke="#4a3827" 
                strokeWidth="0.5"/>
        );
      })}
      
      <text x="0" y="-55" 
            fontFamily="Crimson Text" 
            fontSize="12" 
            textAnchor="middle" 
            fill="#4a3827">
        Quidditch Pitch
      </text>
    </g>

    {/* Hagrid's Hut - South-East of Castle */}
    <g transform="translate(1000,500)">
      {/* Main circular hut */}
      <circle cx="0" cy="0" r="20" 
              fill="#4a3827" fillOpacity="0.1" 
              stroke="#4a3827" strokeWidth="0.5"/>
      
      {/* Conical roof */}
      <path d="M-20,0 C-20,-5 -15,-25 0,-30 C15,-25 20,-5 20,0" 
            fill="#4a3827" fillOpacity="0.1" 
            stroke="#4a3827" strokeWidth="0.5"/>
      
      {/* Chimney */}
      <path d="M10,-20 L10,-35 L13,-35 L13,-20" 
            fill="#4a3827" fillOpacity="0.2" 
            stroke="#4a3827" strokeWidth="0.5"/>
      
      {/* Door */}
      <path d="M-5,0 L-5,10 L5,10 L5,0" 
            stroke="#4a3827" strokeWidth="0.5"/>
      
      {/* Windows */}
      <path d="M-12,-5 L-8,-5 L-8,-1 L-12,-1 Z" 
            stroke="#4a3827" strokeWidth="0.3"/>
      <path d="M8,-5 L12,-5 L12,-1 L8,-1 Z" 
            stroke="#4a3827" strokeWidth="0.3"/>
      
      {/* Garden patches */}
      {[...Array(3)].map((_, i) => (
        <g key={i} transform={`translate(${-30 + i * 25},15)`}>
          <path d="M-8,0 C-8,4 8,4 8,0 C8,-4 -8,-4 -8,0 Z" 
                fill="#4a3827" fillOpacity="0.1" 
                stroke="#4a3827" strokeWidth="0.3"/>
          {/* Plants */}
          <path d="M-4,0 L-4,-3 M0,0 L0,-4 M4,0 L4,-3" 
                stroke="#4a3827" strokeWidth="0.2"/>
        </g>
      ))}

      {/* Smoke from chimney */}
      <path d="M11,-35 C13,-40 15,-42 13,-45 C11,-48 13,-50 15,-52" 
            stroke="#4a3827" strokeWidth="0.3" 
            strokeDasharray="1,1"/>

      <text x="0" y="35" 
            fontFamily="Crimson Text" 
            fontSize="12" 
            textAnchor="middle" 
            fill="#4a3827">
        Hagrid's Hut
      </text>
    </g>

    {/* Location Markers - Updated with Hagrid's Hut */}
    <g className="location-markers">
      {[
        { x: 800, y: 300, label: "Hogwarts Castle" },
        { x: 200, y: 320, label: "The Great Lake" },
        { x: 200, y: 500, label: "The Forbidden Forest" },
        { x: 600, y: 600, label: "Hogsmeade Village" },
        { x: 950, y: 200, label: "Quidditch Pitch" },
        { x: 700, y: 400, label: "Whomping Willow" },
        { x: 1000, y: 500, label: "Hagrid's Hut" }
      ].map((location, i) => (
        <g key={i} transform={`translate(${location.x},${location.y})`}>
          {/* Marker Pin - reduced size by ~40% */}
          <path
            d="M0,-12 C-5,-12 -9,-8 -9,-3 C-9,5 0,12 0,12 C0,12 9,5 9,-3 C9,-8 5,-12 0,-12"
            fill="#4a3827"
            fillOpacity="0.2"
            stroke="#4a3827"
            strokeWidth="0.8"
          />
          {/* Center Dot - reduced size */}
          <circle cx="0" cy="-3" r="2" fill="#4a3827" fillOpacity="0.3"/>
          
          {/* Hover Area - reduced size */}
          <circle 
            cx="0" 
            cy="-3" 
            r="9" 
            fill="transparent" 
            className="hover-area"
          />
        </g>
      ))}
    </g>

    {/* Add a clipping path for the map shape */}
    <defs>
      <clipPath id="map-shape">
        <path 
          d="M50,50 
            h1100 
            v700 
            h-1100 
            v-700 
            Z" 
        />
      </clipPath>
    </defs>

    {/* Apply the clipping path to the main content group */}
    <g clipPath="url(#map-shape)">
      {/* ... rest of the map elements ... */}
    </g>
  </svg>
);

export default HPMap; 