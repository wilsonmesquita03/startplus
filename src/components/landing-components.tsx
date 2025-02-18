import { FC } from "react";
import { About, BonusIA, Certificate, Clients, CourseInfo, Discount, InstitutionalArea, StatsSection } from "@/components/flags";

type ComponentProps = Record<string, unknown>;

const COMPONENTS_MAP: Record<string, FC<ComponentProps>> = {
  About,
  Clients,
  Discount,
  InstitutionalArea,
  StatsSection,
};

// Alterando o tipo para aceitar números ou strings
const LandingPageComponents: FC<{ components: { id: string | number; type: string; settings: unknown }[] }> = ({ components }) => {
  return (
    <div className="tw-container tw-mx-auto tw-py-10">
      {components.map(({ id, type, settings }) => {
        const Component = COMPONENTS_MAP[type];

        // Garantir que settings seja um objeto válido antes de espalhar
        const parsedSettings = typeof settings === "object" && settings !== null ? settings : {};

        return Component ? <Component key={id} {...parsedSettings} /> : null;
      })}
      <CourseInfo />
      <BonusIA />
      <Certificate />
    </div>
  );
};

export default LandingPageComponents;
