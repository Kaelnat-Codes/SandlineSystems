// app/components/OfficeSurveyEmbed.tsx
type OfficeSurveyEmbedProps = {
  src: string;
  title?: string;
  height?: number;
};

export default function OfficeSurveyEmbed({
  src,
  title = "Survey",
  height = 900,
}: OfficeSurveyEmbedProps) {
  return (
    <div style={{ width: "100%", minHeight: height }}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        style={{ border: "none", maxWidth: "100%" }}
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  );
}
