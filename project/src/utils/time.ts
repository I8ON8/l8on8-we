export function getEndTime(): number {
  // Using the deployment timestamp you provided + 2 hours
  const deploymentTime = 1734917474132;
  return deploymentTime + (2 * 60 * 60 * 1000); // 2 hours in milliseconds
}

export function calculateTimeLeft(): { hours: number; minutes: number; seconds: number } {
  const now = Date.now();
  const endTime = getEndTime();
  const difference = endTime - now;
  
  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}