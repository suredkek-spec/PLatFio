type SkeletonProps = {
  lines?: number;
  height?: number;
};

export function Skeleton({ lines = 3, height = 14 }: SkeletonProps) {
  return (
    <div className="skeleton-group" aria-hidden="true">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="skeleton-line"
          style={{ height: `${height}px`, width: `${100 - index * 12}%` }}
        />
      ))}
    </div>
  );
}
