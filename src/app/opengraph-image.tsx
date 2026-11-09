import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_ROLE, SITE_URL } from "./constants/site";

export const alt = `${SITE_NAME} — ${SITE_ROLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#F9F9F9",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "48px", height: "4px", background: "#FF4900" }} />
          <div style={{ fontSize: "24px", letterSpacing: "4px", color: "#FF4900" }}>PORTFOLIO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: "88px", fontWeight: 700, letterSpacing: "-2px" }}>{SITE_NAME}</div>
          <div style={{ fontSize: "36px", color: "#D7D7D7" }}>{SITE_ROLE}</div>
        </div>

        <div style={{ fontSize: "24px", color: "#D7D7D7" }}>
          {SITE_URL.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size,
  );
}
