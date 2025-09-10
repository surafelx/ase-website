import React, { useRef, useEffect } from 'react';

const EthiopiaMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Animation state
    let animationId: number;
    let rotation = 0;

    // Ethiopia map outline points (simplified)
    const ethiopiaOutline = [
      [0.15, 0.25], [0.25, 0.2], [0.4, 0.15], [0.6, 0.2], [0.75, 0.25], [0.85, 0.35],
      [0.9, 0.5], [0.85, 0.65], [0.75, 0.75], [0.6, 0.8], [0.4, 0.85], [0.25, 0.8],
      [0.1, 0.7], [0.05, 0.5], [0.1, 0.35], [0.15, 0.25]
    ];

    // Solar panel locations
    const solarSites = [
      [0.3, 0.4], [0.5, 0.35], [0.7, 0.45], [0.4, 0.6], [0.6, 0.65]
    ];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Save context for transformations
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(0.8, 0.8);
      ctx.rotate(Math.sin(rotation * 0.01) * 0.1);

      // Draw Ethiopia outline with 3D effect
      ctx.beginPath();
      ethiopiaOutline.forEach((point, index) => {
        const x = (point[0] - 0.5) * width;
        const y = (point[1] - 0.5) * height;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.closePath();

      // Create gradient for 3D effect
      const gradient = ctx.createLinearGradient(-width/2, -height/2, width/2, height/2);
      gradient.addColorStop(0, 'hsl(142, 71%, 65%)');
      gradient.addColorStop(0.5, 'hsl(142, 71%, 45%)');
      gradient.addColorStop(1, 'hsl(142, 71%, 25%)');

      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.strokeStyle = 'hsl(142, 71%, 35%)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Add shadow for 3D depth
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;

      // Draw solar panel sites with pulsing effect
      solarSites.forEach((site, index) => {
        const x = (site[0] - 0.5) * width;
        const y = (site[1] - 0.5) * height;
        const pulseSize = 8 + Math.sin(rotation * 0.02 + index) * 3;
        
        // Solar panel glow
        ctx.beginPath();
        ctx.arc(x, y, pulseSize + 5, 0, Math.PI * 2);
        const solarGradient = ctx.createRadialGradient(x, y, 0, x, y, pulseSize + 5);
        solarGradient.addColorStop(0, 'hsl(46, 87%, 75%)');
        solarGradient.addColorStop(1, 'hsla(46, 87%, 65%, 0.2)');
        ctx.fillStyle = solarGradient;
        ctx.fill();

        // Solar panel core
        ctx.beginPath();
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(46, 87%, 65%)';
        ctx.fill();
        ctx.strokeStyle = 'hsl(46, 87%, 55%)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Reset shadow
      ctx.shadowColor = 'transparent';
      
      // Add connecting lines between solar sites
      ctx.strokeStyle = 'hsla(46, 87%, 65%, 0.5)';
      ctx.lineWidth = 1;
      for (let i = 0; i < solarSites.length - 1; i++) {
        const site1 = solarSites[i];
        const site2 = solarSites[i + 1];
        const x1 = (site1[0] - 0.5) * width;
        const y1 = (site1[1] - 0.5) * height;
        const x2 = (site2[0] - 0.5) * width;
        const y2 = (site2[1] - 0.5) * height;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.restore();
      rotation++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-80 bg-gradient-to-b from-sky-blue to-agriculture-green-light rounded-2xl overflow-hidden shadow-elegant">
      <canvas
        ref={canvasRef}
        width={400}
        height={320}
        className="w-full h-full"
      />
      <div className="absolute bottom-4 left-4 text-foreground font-semibold">
        AgriSun Ethiopia Coverage
      </div>
      <div className="absolute top-4 right-4 text-sm text-muted-foreground">
        ☀️ Solar Sites Active
      </div>
    </div>
  );
};

export default EthiopiaMap;