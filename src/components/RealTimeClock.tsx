'use client';

import { useState, useEffect } from 'react';

export default function RealTimeClock() {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mount flag avoids hydration mismatch; not derived state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      const jakartaTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      
      setTime(`${jakartaTime} WIB`);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="h-5 w-20 bg-hairline animate-pulse" />
    );
  }

  return (
    <p className="text-ink text-sm font-medium font-mono">
      {time}
    </p>
  );
}