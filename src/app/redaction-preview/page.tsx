"use client";

// Throwaway compare route: renders the live tab app but remaps every font-[Fraunces]
// to Redaction (self-hosted woff2 still in /public). Not linked anywhere. Delete after compare.
import Home from "../v2/page";

export default function RedactionPreview() {
  return (
    <>
      <style>{`
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Regular.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Italic.woff2') format('woff2');font-weight:400;font-style:italic;font-display:swap}
        .font-\\[Fraunces\\]{font-family:'Redaction' !important}
      `}</style>
      <Home />
    </>
  );
}
