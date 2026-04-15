import { ImageResponse } from "next/og";

export const alt = "Ahmad Kurniawan Ibrahim portfolio social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f8fafc",
          background:
            "linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e3a8a 100%)",
          position: "relative",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "820px",
          }}
        >
          <div
            style={{
              display: "flex", // changed from 'inline-flex' to 'flex'
              alignItems: "center",
              alignSelf: "flex-start",
              padding: "12px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Apple Developer Academy Alumnus
          </div>

          <div
            style={{
              fontSize: "74px",
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Ahmad Kurniawan Ibrahim
          </div>

          <div
            style={{
              fontSize: "32px",
              lineHeight: 1.4,
              maxWidth: "760px",
              color: "rgba(226, 232, 240, 0.92)",
            }}
          >
            Software Engineer Enthusiast specializing in iOS, web development,
            and full-stack systems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "rgba(226, 232, 240, 0.8)",
            }}
          >
            DreamRank • HueMen • S.I.R.A.J
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#93c5fd",
            }}
          >
            ahmadkurniawanibrahim.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
