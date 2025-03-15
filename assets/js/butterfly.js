// Butterfly Strange Attractor Animation
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('butterfly-canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas to full size of container
  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // Butterfly attractor parameters
  const a = 0.4;
  const b = 1.2;
  const c = 0.7;
  const d = 0.9;
  
  let x = 0.1;
  let y = 0.1;
  let z = 0;
  
  // Animation properties
  const scale = 10;
  const speed = 0.008;
  const numPoints = 2000;
  const fadeOpacity = 0.005;
  const points = [];
  const wingSpan = 15;
  const flapSpeed = 0.05;
  let flapAngle = 0;
  
  // Generate color gradient
  function getGradientColor(t) {
    // Purple to teal gradient
    const r = Math.round(138 * (1-t) + 64 * t);
    const g = Math.round(43 * (1-t) + 224 * t);
    const b = Math.round(226 * (1-t) + 208 * t);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Initialize points array
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: 0,
      y: 0,
      color: getGradientColor(i / numPoints)
    });
  }
  
  // Animation loop
  function animate() {
    // Apply semi-transparent background for trail effect
    ctx.fillStyle = 'rgba(15, 15, 20, ' + fadeOpacity + ')';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update butterfly position using strange attractor equations
    const dx = Math.sin(a * y) - z * Math.cos(b * x);
    const dy = z * Math.sin(c * x) - Math.cos(d * y);
    const dz = Math.sin(x);
    
    x += dx * speed;
    y += dy * speed;
    z += dz * speed;
    
    // Update flapping motion
    flapAngle += flapSpeed;
    const wingFlap = Math.sin(flapAngle) * wingSpan;
    
    // Update points array (shift all points and add new point at beginning)
    for (let i = numPoints - 1; i > 0; i--) {
      points[i].x = points[i-1].x;
      points[i].y = points[i-1].y;
    }
    
    // Set new head position
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    points[0].x = centerX + x * scale * 20;
    points[0].y = centerY + y * scale * 20;
    
    // Draw butterfly
    for (let i = 0; i < numPoints; i++) {
      const t = i / numPoints;
      const size = Math.max(1, (1 - t) * 4);
      const wingOffset = Math.sin(t * Math.PI) * wingFlap * (1 - t);
      
      // Draw body
      ctx.fillStyle = points[i].color;
      ctx.beginPath();
      ctx.arc(points[i].x, points[i].y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw wings (only for first half of points)
      if (i < numPoints / 2 && i % 2 === 0) {
        const angle = Math.atan2(
          points[i].y - (i > 0 ? points[i-1].y : points[i].y), 
          points[i].x - (i > 0 ? points[i-1].x : points[i].x)
        );
        
        // Left wing
        ctx.beginPath();
        ctx.ellipse(
          points[i].x, 
          points[i].y, 
          wingOffset * 2, 
          wingOffset * 1.5, 
          angle + Math.PI/2, 
          0, Math.PI * 2
        );
        ctx.fillStyle = points[i].color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        
        // Right wing
        ctx.beginPath();
        ctx.ellipse(
          points[i].x, 
          points[i].y, 
          wingOffset * 2, 
          wingOffset * 1.5, 
          angle - Math.PI/2, 
          0, Math.PI * 2
        );
        ctx.fillStyle = points[i].color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        
        ctx.globalAlpha = 1.0;
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  animate();
});