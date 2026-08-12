export function PoolBand() {
  return (
    <div aria-hidden className="relative h-[38vh] min-h-[280px] overflow-hidden">
      <img
        src="/images/underwater.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
      />
      <div className="absolute inset-0 bg-ink/25" />
    </div>
  );
}
