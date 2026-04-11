export const runtime = "edge";

import { ExperienceDetail } from "./experience-detail";

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ExperienceDetail slug={slug} />;
}
