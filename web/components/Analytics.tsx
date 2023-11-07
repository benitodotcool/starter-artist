"use client";

import type { ComponentProps } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

type AnalyticsProps = ComponentProps<typeof VercelAnalytics>;

export const Analytics: React.FC<AnalyticsProps> = (props) => (
  <VercelAnalytics {...props} />
);
