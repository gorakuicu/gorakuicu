import { FlashingDot } from '~/shared/ui/flashing-dot';

export default function SiteLabel() {
  return (
    <h2 className="text-gradient bg-gradient-to-r from-[#EC32C0] to-purple-500 bg-clip-text text-xl font-black text-transparent md:text-2xl">
      goraku
      <FlashingDot />
      icu
    </h2>
  );
}
