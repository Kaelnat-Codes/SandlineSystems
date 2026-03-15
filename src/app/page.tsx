// app/survey/page.tsx
import OfficeSurveyEmbed from "@/components/OfficeSurveyEmbed";

export default function Survey() {
  return (
    <main style={{ padding: "2rem" }}>
      <OfficeSurveyEmbed
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=cSrPUOv0sk-FMbg5sbe_fLlSHVjUENxEtMUMZADdakNUQURBTU1CODM4QzlSMlQ0UExBWDdQVExWViQlQCN0PWcu&embed=true"
        title="Customer Survey"
        height={1100}
      />
    </main>
  );
}
