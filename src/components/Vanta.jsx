import React, { useRef, useEffect, useState } from 'react'

const Vanta = () => {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.WAVES) {
      setVantaEffect(
        window.VANTA.WAVES({
          el: vantaRef.current, 
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color:0x0a101e
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      style={{
      position: 'absolute',  // ✅ stays inside .home-section
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1  
      }}
    >
     
    </div>
  )
}

export default Vanta
