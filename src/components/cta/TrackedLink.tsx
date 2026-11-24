"use client";

import * as React from "react";
import Link from "next/link";
import {
  trackConversion,
  type ConversionEventName,
  type ConversionPayload,
} from "@/lib/analytics";

interface TrackedExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: ConversionEventName;
  payload: ConversionPayload;
}

export function TrackedExternalLink({
  eventName,
  payload,
  onClick,
  children,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackConversion(eventName, payload);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

interface TrackedRouteLinkProps extends React.ComponentProps<typeof Link> {
  eventName: ConversionEventName;
  payload: ConversionPayload;
}

export function TrackedRouteLink({
  eventName,
  payload,
  onClick,
  children,
  ...props
}: TrackedRouteLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackConversion(eventName, payload);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
