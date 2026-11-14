const SILLAGE: Record<string, number> = {
  Nhẹ: 25,
  "Vừa phải": 50,
  "Vừa đến mạnh": 65,
  Mạnh: 80,
  "Rất mạnh": 100,
};

/** "8-10 giờ (Bám lâu)" → percent of a 12h scale, using the upper bound. */
function longevityPercent(text: string) {
  const hours = (text.match(/\d+/g) ?? []).map(Number);
  const max = hours.length ? Math.max(...hours) : 6;
  return Math.min(100, Math.round((max / 12) * 100));
}

function Meter({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline gap-4 mb-2">
        <p className="text-[10px] uppercase tracking-widest opacity-50">
          {label}
        </p>
        <p className="font-light text-sm text-right">{value}</p>
      </div>
      <div
        className="h-px bg-white/15"
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={value}
      >
        <div
          className="meter-fill h-[3px] -mt-px bg-gradient-to-r from-brand-gold/40 to-brand-gold"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function PerformanceMeters({
  longevity,
  sillage,
}: {
  longevity: string;
  sillage: string;
}) {
  return (
    <div className="space-y-6">
      <Meter
        label="Độ lưu hương"
        value={longevity}
        percent={longevityPercent(longevity)}
      />
      <Meter label="Độ tỏa hương" value={sillage} percent={SILLAGE[sillage] ?? 50} />
    </div>
  );
}
