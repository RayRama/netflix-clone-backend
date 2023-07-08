export function useFormatDuration(duration: number) {
  if (duration < 60) return `${duration}m`;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}h ${minutes}m`;
}

// Jangan menggebu - gebu
// #1sksaja
