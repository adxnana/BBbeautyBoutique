import { X } from "lucide-react";

const ROWS = [
  { size: "XS", bust: "32", waist: "24", hips: "34" },
  { size: "S", bust: "34", waist: "26", hips: "36" },
  { size: "M", bust: "36", waist: "28", hips: "38" },
  { size: "L", bust: "38", waist: "30", hips: "40" },
  { size: "XL", bust: "40", waist: "32", hips: "42" },
];

export default function SizeGuideModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bbespresso/40 animate-fade-in p-4">
      <div className="bg-bbcream max-w-lg w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4" aria-label="Close">
          <X size={20} />
        </button>
        <h3 className="font-serif text-2xl mb-1">Size Guide</h3>
        <p className="text-sm text-bbespresso/70 mb-6">Measurements in inches.</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-bbespresso/30 text-left uppercase tracking-widest text-xs">
              <th className="py-2">Size</th>
              <th>Bust</th>
              <th>Waist</th>
              <th>Hips</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.size} className="border-b border-bbespresso/15">
                <td className="py-2 font-medium">{r.size}</td>
                <td>{r.bust}</td>
                <td>{r.waist}</td>
                <td>{r.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
