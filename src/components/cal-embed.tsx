"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed({ link = "savoca/discovery" }: { link?: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#2F5D50",
            "cal-brand-emphasis": "#264B40",
            "cal-brand-text": "#fbf9f4",
          },
          dark: {
            "cal-brand": "#2F5D50",
          },
        },
      });
    })();
  }, []);

  return (
    <div
      className="cal-shell relative border border-[var(--rule)] overflow-hidden"
      style={{
        background: "var(--bone)",
        isolation: "isolate",
        zIndex: 1,
        minHeight: 700,
      }}
    >
      <Cal
        namespace="discovery"
        calLink={link}
        style={{
          width: "100%",
          height: "100%",
          minHeight: 700,
          overflow: "scroll",
          background: "var(--bone)",
        }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
