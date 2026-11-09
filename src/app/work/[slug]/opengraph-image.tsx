import { ImageResponse } from "next/og";
import { SITE_URL } from "../../constants/site";
import { getCase } from "../../content/cases";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case study";

export default function OpengraphImage({ params }: { params: { slug: string } }) {
  const study = getCase(params.slug);
  const name = study?.name ?? "Case study";
  const result = study ? `${study.result.value} · ${study.result.label}` : "";
  const eyebrow = study?.eyebrow ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#F9F9F9",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "48px", height: "4px", background: "#FF4900", marginRight: "16px" }} />
          <div style={{ fontSize: "24px", letterSpacing: "4px", color: "#FF4900" }}>CASE STUDY</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "72px", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05 }}>
            {name}
          </div>
          <div style={{ fontSize: "28px", color: "#D7D7D7", marginTop: "16px" }}>{result}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "22px" }}>
          <div style={{ color: "#7DA2FF" }}>{eyebrow}</div>
          <div style={{ color: "#7DA2FF" }}>{SITE_URL.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
