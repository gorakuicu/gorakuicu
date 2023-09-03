import { FlashingDot } from '~/shared/ui/flashing-dot';

export default function SiteLabel() {
  return (
    <h2 className="text-gradient bg-gradient-to-r from-[#EC32C0] to-purple-500 bg-clip-text text-transparent font-black text-xl md:text-3xl leading-10">
      GORAKU
      <FlashingDot />
      ICU
    </h2>
  );
}
