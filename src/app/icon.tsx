import Image from "next/image";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size: { width: number; height: number } = {
    width: 32,
    height: 32,
};

export const contentType = "image/png";

// Image generation function
export default function Icon(): ImageResponse {
    return new ImageResponse(
        (
        <div
            style={{
            fontSize: 24,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
        >
            {/* Using <img> because next/image is not supported inside ImageResponse */}
            <Image
                src="/webtoplogo.png"
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </div>
        ),
        {
        ...size, // Spread size metadata
        }
    );
}
