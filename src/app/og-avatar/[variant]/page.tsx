import { notFound } from "next/navigation";
import { SVMonogram } from "@/components/brand/v2";

type VariantSpec = {
  fg: string;
  bg: string;
  accent: string;
  showRing?: boolean;
  showDot?: boolean;
  pageBg: string;
};

// Mirror the profile/ naming from ig_posts_v2_handoff
const variants: Record<string, VariantSpec> = {
  "money-on-bone": {
    fg: "var(--money)",
    bg: "var(--bone)",
    accent: "var(--signal)",
    showRing: false,
    showDot: false,
    pageBg: "#F5F2EC",
  },
  "money-on-bone-comfort": {
    fg: "var(--money)",
    bg: "var(--bone-2)",
    accent: "var(--signal)",
    showRing: false,
    showDot: false,
    pageBg: "#E8E2D3",
  },
  "bone-on-ink": {
    fg: "var(--bone)",
    bg: "var(--ink)",
    accent: "var(--money-2)",
    showRing: false,
    showDot: false,
    pageBg: "#0E0E0C",
  },
  "bone-on-money": {
    fg: "var(--bone)",
    bg: "var(--money)",
    accent: "var(--gold)",
    showRing: false,
    showDot: false,
    pageBg: "#1B4D3E",
  },
  ringed: {
    fg: "var(--money)",
    bg: "var(--bone)",
    accent: "var(--signal)",
    showRing: true,
    showDot: true,
    pageBg: "#F5F2EC",
  },
};

export function generateStaticParams() {
  return Object.keys(variants).map((variant) => ({ variant }));
}

export default async function OgAvatar({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  const spec = variants[variant];
  if (!spec) notFound();

  return (
    <div
      style={{
        width: "1080px",
        height: "1080px",
        background: spec.pageBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <SVMonogram
        size={920}
        fg={spec.fg}
        bg={spec.bg}
        accent={spec.accent}
        showRing={spec.showRing}
        showDot={spec.showDot}
      />
    </div>
  );
}
